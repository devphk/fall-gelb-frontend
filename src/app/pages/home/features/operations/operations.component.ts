import { ModalService } from './../../../../core/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormCertificationComponent } from './certification/form-certification/form-certification.component';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  showFormCertification() {
    const dialogRef = this.modalService.openDialog(
      FormCertificationComponent,
      'Certificaciones de Créditos Fiscales',
      '80%',
      '80%'
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo ha sido cerrado');
    });
  }
}
