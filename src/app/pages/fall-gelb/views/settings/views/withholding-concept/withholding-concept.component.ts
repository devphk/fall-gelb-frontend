import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { WithholdingConceptsService } from './withholding-concept.service';
import { WithholdingConceptTableData } from '@shared/models/withholding-concepts';
import { FormWithholdingConceptsComponent } from '../components/form-withholding-concepts/form-withholding-concepts.component';
import { UtilsService } from '@core/services/utils-service.service';

@Component({
  selector: 'app-withholding-concept',
  templateUrl: './withholding-concept.component.html',
  styleUrls: ['./withholding-concept.component.scss']
})
export class WithholdingConceptComponent implements OnInit {

  
  tableColumnsToDisplay: string[] = [
    'ID',
    'Nombre',
    'Tarifa Persona Natural',
    'Tarifa Persona Juridica'
  ];
  tableColumnsTags: string[] = ['id', 'name', 'natural_person', 'legal_person'];
  tableData: any[] = [];
  durationInSeconds = 2;
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private conceptsService: WithholdingConceptsService,
    private toastService:ToastService,
    private utilsService:UtilsService  ) {}

  ngOnInit(): void {
    this.getConcepts();
  }

  getConcepts() {

    this.conceptsService
        .getConcepts()
        .subscribe((response) => {

      const tableData: WithholdingConceptTableData[] = [];

      response.forEach((concept) => {
        const conceptToInput: WithholdingConceptTableData = {
          id: concept.id,
          name: concept.name,
          natural_person: {
            value: this.utilsService.parseValueToPercent(concept.natural_person).toString(),
            mask: this.utilsService.generateMask(concept.natural_person),
            suffix: '%'
          },
          legal_person: {
            value: this.utilsService.parseValueToPercent(concept.legal_person).toString(),
            mask: this.utilsService.generateMask(concept.natural_person),
            suffix: '%'
          },
        };
        tableData.push(conceptToInput);
      });

      this.tableData = tableData;

    }, (error) => {
      
    });
  }

  processConcept(processType: string) {
    this.dialogService
        .openDialog(FormWithholdingConceptsComponent, 
                    processType === 'Add' ? 'Crear Concepto de Retención' : 'Editar Concepto de Retención', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((user) => {
          if(user) {
            this.refreshConcepts();
          }
        });
  }

  deleteConcept() {

    this.dialogService
        .openConfirmationDialog(
                'Eliminar Concepto',
                `¿Eliminar concepto '${this.itemsSelected[0].name}'?`)
        .afterClosed()
        .subscribe((response)=>{
          if (response) {
            this.conceptsService.deleteConcept(this.itemsSelected[0].id)
            .subscribe((data) => {
              this.toastService.showToaster('Concepto eliminado correctamente!')
              this.refreshConcepts();
            },
              (error) => this.toastService.showToaster(error.error.message, true));
          }})
  }

  refreshConcepts() {
    this.tableData = [];

    this.getConcepts();
  }
}