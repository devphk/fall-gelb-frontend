import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { RetentionConceptsService } from './retention-concept.service';
import { RetentionConceptTableData } from '@shared/models/retention-concepts';
import { FormRetentionConceptsComponent } from '../components/form-retention-concepts/form-retention-concepts.component';
import { UtilsService } from '@core/services/utils-service.service';

@Component({
  selector: 'app-retention-concept',
  templateUrl: './retention-concept.component.html',
  styleUrls: ['./retention-concept.component.scss']
})
export class RetentionConceptComponent implements OnInit {

  
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
    private conceptsService: RetentionConceptsService,
    private toastService:ToastService,
    private utilsService:UtilsService  ) {}

  ngOnInit(): void {
    this.getConcepts();
  }

  getConcepts() {

    this.conceptsService
        .getConcepts()
        .subscribe((response) => {

      const tableData: RetentionConceptTableData[] = [];

      response.forEach((concept) => {
        const conceptToInput: RetentionConceptTableData = {
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
        .openDialog(FormRetentionConceptsComponent, 
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
