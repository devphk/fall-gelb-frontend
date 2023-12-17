import { Component, 
         OnInit } from '@angular/core';
import { ConceptsService } from './concepts.service';
import { DialogService, 
         ToastService } from '@core/services';
import { FormConceptsComponent } from '../components';
import { RetentionConcept, 
         ConceptType,
         Concept } from '@shared/models';
import { Observable,
         forkJoin } from 'rxjs';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  tableColumnsToDisplay: string[] = ['Id', 'Nombre'];
  tableColumnsTags: string[] = ['id', 'name'];
  tableData: any[] = [];
  itemsSelected: any[] = [];
  conceptTypes: ConceptType[] = [];
  retentionConcepts: RetentionConcept[] = [];
  conceptList: Concept[] = [];

  constructor(private conceptService: ConceptsService,
              private dialogService: DialogService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getConcepts();
  }

  getConcepts() {

    this.tableData, this.conceptList = [];

    this.conceptService
        .getConcepts()
        .subscribe((response) => {

          this.conceptList = response;
          this.conceptList.forEach((concept) => {

            const tableRow = {
              id: concept.id,
              name: concept.name
            };

            this.tableData.push(tableRow);

          });

        }, (error) => {
          this.toastService.showToaster('Error obteniendo conceptos');
        });
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

  getretentionConcepts() {

    this.retentionConcepts = [];
    this.conceptService
        .getRetentionConcepts()
        .subscribe((response) => {
          this.retentionConcepts = response
        }, (error) => {
          this.toastService.showToaster('Error obteniendo conceptos de retención', true);
        });

  }

  processConcept(processType: string) {

    if (this.conceptTypes.length === 0
        || this.retentionConcepts.length === 0) {
      
      let requestArray: Observable<any>[] = [];
      requestArray.push(this.conceptService.getRetentionConcepts());
      requestArray.push(this.conceptService.getConceptTypes());

      forkJoin(requestArray).subscribe((responses) => {
        
        // this.retentionConcepts = responses[0];
        // this.conceptTypes = responses[1];

        const retentionConceptsResponse = responses[0];
        const conceptTypesResponse = responses[1];
      
        // Utiliza retentionConceptsResponse y conceptTypesResponse según sea necesario
      
        this.retentionConcepts = retentionConceptsResponse;
        this.conceptTypes = conceptTypesResponse;

        this.openModal(processType);
        
      }, (error) => {
        this.toastService.showToaster('Error obteniendo datos de retención')
      })

    } else {
      this.openModal(processType);
    }


  }

  openModal(processType: string) {

    let conceptData;
    if (processType !== 'Add') {
      conceptData = this.conceptList.find(concept => concept.id === this.itemsSelected[0].id);
    }

    let dialogData = {
      retentionConcepts: this.retentionConcepts,
      conceptTypes: this.conceptTypes,
      itemsSelected: this.itemsSelected,
      conceptData
    }

    this.dialogService
        .openDialog(
          FormConceptsComponent,
          processType === 'Add' ? 'Crear Concepto' : `Editar Concepto: ${conceptData?.name}`,
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
