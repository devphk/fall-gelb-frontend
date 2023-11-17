import { Component, OnInit } from '@angular/core';
import { ConceptsService } from './concepts.service';
import { DialogService, ToastService } from '@core/services';
import { FormConceptsComponent } from '../components';
import { ConceptType } from '@shared/models/concept';
import { WithholdingConcept } from '@shared/models';
import { Observable,
         forkJoin } from 'rxjs';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  tableColumnsToDisplay: string[] = ['ID', 'Nombre'];
  tableColumnsTags: string[] = ['id', 'name'];
  tableData: any[] = [];
  itemsSelected: any[] = [];
  conceptTypes: ConceptType[] = [];
  withholdingConcepts: WithholdingConcept[] = [];

  constructor(private conceptService: ConceptsService,
              private dialogService: DialogService,
              private toastService: ToastService) { }

  ngOnInit(): void {

    this.conceptService
        .getConcepts()
        .subscribe((response) => {
          console.log("response ", response)
        });
  }

  getConcepts() {
    
  }

  getConceptTypes() {

    this.conceptTypes = [];
    this.conceptService
        .getConceptTypes()
        .subscribe((response) => {
          this.conceptTypes = response;
        }, (error) => {
          this.toastService.showToaster('Error obteniendo tipos de conceptos', true);
        });

  }

  getWithholdingConcepts() {

    this.withholdingConcepts = [];
    this.conceptService
        .getWithholdingConcepts()
        .subscribe((response) => {
          this.withholdingConcepts = response
        }, (error) => {
          this.toastService.showToaster('Error obteniendo conceptos de retención', true);
        });

  }

  processConcept(processType: string) {

    if (this.conceptTypes.length === 0
        || this.withholdingConcepts.length === 0) {
      
      let requestArray: Observable<any>[] = [];
      requestArray.push(this.conceptService.getWithholdingConcepts());
      requestArray.push(this.conceptService.getConceptTypes());

      forkJoin(requestArray).subscribe((responses) => {
        
        // this.withholdingConcepts = responses[0];
        // this.conceptTypes = responses[1];

        const withholdingConceptsResponse = responses[0];
        const conceptTypesResponse = responses[1];
      
        // Utiliza withholdingConceptsResponse y conceptTypesResponse según sea necesario
      
        this.withholdingConcepts = withholdingConceptsResponse;
        this.conceptTypes = conceptTypesResponse;

        console.log("this.withholdingConcepts ", this.withholdingConcepts)
        console.log("this.conceptTypes ", this.conceptTypes)

        this.openModal(processType);
        
      }, (error) => {
        this.toastService.showToaster('Error obteniendo datos de retención')
      })

    } else {
      this.openModal(processType);
    }


  }

  openModal(processType: string) {

    let dialogData = {
      withholdingConcepts: this.withholdingConcepts,
      conceptTypes: this.conceptTypes,
      itemsSelected: this.itemsSelected
    }

    this.dialogService
        .openDialog(
          FormConceptsComponent,
          processType === 'Add' ? 'Crear Concepto' : 'Editar Concepto',
          '800px',
          'auto',
          dialogData
        )
        .afterClosed()
        .subscribe((concept) => {
          if (concept) {
            this.getConcepts();
          }
        });
  }

  deleteConcept() {
    // this.dialogService
    //   .openConfirmationDialog(
    //     `Eliminar Banco`,
    //     `¿Desea eliminar banco '${this.itemsSelected[0].name}'?`
    //   )
    //   .afterClosed()
    //   .subscribe((response) => {
    //     if (response) {
    //       this.bankService.deleteBanks(this.itemsSelected[0].id).subscribe(
    //         (data) => {
    //           this.toastService.showToaster('Banco eliminado correctamente!');
    //           this.refreshBanks();
    //         },
    //         (error) => this.toastService.showToaster(error.error.message, true)
    //       );
    //     }
    //   });
  }

}
