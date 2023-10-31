import { Component, 
         OnInit,
         ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { FallGelbService } from './fall-gelb.service';

@Component({
  selector: 'app-fall-gelb',
  templateUrl: './fall-gelb.component.html',
  styleUrls: ['./fall-gelb.component.scss']
})
export class FallGelbComponent implements OnInit {

  @ViewChild('drawer', {static: true}) public drawer!: MatDrawer;

  links = [
    {
      linkTitle: 'Entidades',
      linkUrl: 'entities'
    },
    {
      linkTitle: 'Operaciones',
      linkUrl: 'operations'
    },
    {
      linkTitle: 'Estadísticas',
      linkUrl: 'statistics'
    },
    {
      linkTitle: 'Administración',
      linkUrl: 'administration'
    },
    {
      linkTitle: 'Configuraciones',
      linkUrl: 'settings'
    },
    {
      linkTitle: 'Comercial',
      linkUrl: 'commercial'
    },
    {
      linkTitle: 'Contraloría',
      linkUrl: 'comptroller'
    }
  ]

  constructor(private fallgelbService: FallGelbService) { }

  ngOnInit(): void {
    this.fallgelbService.setDrawer(this.drawer);
  }

  onToggleDrawer() {
    if (this.fallgelbService.isOpend()) {
      this.fallgelbService.close();
    }
    this.fallgelbService.toggle();
  }
  
}
