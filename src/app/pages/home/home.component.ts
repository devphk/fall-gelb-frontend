import { Component, 
         OnInit,
         ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.setDrawer(this.drawer);
  }

  onToggleDrawer() {
    if (this.homeService.isOpend()) {
      this.homeService.close();
    }
    this.homeService.toggle();
  }
}
