import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from '@core/services';
import { WithholdingConceptsService } from './withholding-concepts.service';
import { WithholdingConcept, WithholdingConceptTableData } from '@shared/models';

@Component({
  selector: 'app-withholding-concepts',
  templateUrl: './withholding-concepts.component.html',
  styleUrls: ['./withholding-concepts.component.scss']
})
export class WithholdingConceptsComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    'ID',
    'Nombre',
    'Tarifa Persona Natural',
    'Tarifa Persona Juridica',
  ];
  tableColumnsTags: string[] = ['id', 'name', 'natural_person', 'legal_person'];
  tableData: any[] = [];
  durationInSeconds = 2;
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private snackBar: MatSnackBar,
    private conceptsService:WithholdingConceptsService  ) {}

  ngOnInit(): void {
    this.getConcept();
  }

  getConcept() {

    this.conceptsService
        .getConcepts()
        .subscribe((response) => {

      const tableData: WithholdingConceptTableData[] = [];

      response.forEach((concept) => {
        const conceptToInput: WithholdingConceptTableData = {
          id: concept.id,
          name: concept.name,
          natural_person: concept.natural_person,
          legal_person: concept.legal_person
        };

        tableData.push(conceptToInput);
      });

      this.tableData = tableData;

    }, (error) => {
      
    });

  }

  openSnackBar(type: number) {
    if (type === 1) {
      this.snackBar.open('Eliminado Exitosamente!', 'Close', {duration: this.durationInSeconds * 1000,
        panelClass: ['success-snackbar'],
      });
    } else {
      this.snackBar.open('Ha ocurrido un Error!', 'Close', {duration: this.durationInSeconds * 1000,
        panelClass: ['error-snackbar'],
      });
    }
  }

  processConcept(processType: string) {
    // this.dialogService
    //     .openDialog(FormUserComponent, 
    //                 processType === 'Add' ? 'Crear Usuario' : 'Editar Usuario', 
    //                 '800px', 
    //                 'auto',
    //                 processType === 'Add' ? null : this.itemsSelected)
    //     .afterClosed()
    //     .subscribe((user) => {
    //       console.log("user ", user)
    //     });
  }

  deleteConcept() {
    // this.userService
    //     .deleteUsers(this.itemsSelected[0].id)
    //     .subscribe(
    //   (data) => {

    //     this.snackBar
    //         .open('Eliminado Exitosamente!', 
    //               'Ok', {
    //                 duration: this.durationInSeconds * 1000,
    //                 panelClass: ['success-snackbar']
    //               });  

    //   },
    //   (error) => {

    //     this.snackBar
    //         .open('Ha ocurrido un error, intenta mas tarde!', 
    //               'Ok', {
    //                 duration: this.durationInSeconds * 1000,
    //                 panelClass: ['error-snackbar'],
    //               });  
    //   }
    // );
  }



}
