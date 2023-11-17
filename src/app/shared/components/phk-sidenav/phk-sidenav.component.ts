import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phk-sidenav',
  templateUrl: './phk-sidenav.component.html',
  styleUrls: ['./phk-sidenav.component.scss'],
})
export class PhkSidenavComponent implements OnInit {
  @Input() menuItems: any[] = [
    {
      path: 'dashboard',
      title: 'Inicio',
      icon: 'dashboard',
      childrenLinks: [],
    },
    {
      path: 'entities',
      title: 'Entidades',
      icon: 'person',
      childrenLinks: [
        {
          path: 'providers',
          title: 'Proveedores',
        },
        {
          path: 'customers',
          title: 'Clientes',
        },
        {
          path: 'shipping-companies',
          title: 'Navieras',
        },
        {
          path: 'air-consolidators',
          title: 'Consolidador Aéreo',
        },
        {
          path: 'airlines',
          title: 'Aerolíneas',
        },
        {
          path: 'terrestrials',
          title: 'Terrestre',
        },
        {
          path: 'drivers',
          title: 'Choferes',
        },
      ],
    },
    {
      path: 'settings',
      title: 'Configuración',
      icon: 'settings',
      childrenLinks: [
        {
          path: 'users',
          title: 'Usuarios',
        },
        {
          path: 'banks',
          title: 'Banco',
        },
        {
          path: 'bank-accounts',
          title: 'Cuentas Bancarias',
        },
        {
          path: 'currencies',
          title: 'Monedas',
        },
        {
          path: 'units',
          title: 'Unidades',
        },
        {
          path: 'container-type',
          title: 'Tipos de Contenedor',
        },
        {
          path: 'customs',
          title: 'Aduanas',
        },
        {
          path: 'truck-type',
          title: 'Tipos de Camiones',
        },
        {
          path: 'commodity-type',
          title: 'Tipos de Mercancia',
        },
        {
          path: 'warehouse',
          title: 'Almacenes',
        },
        {
          path: 'cargo-type-lcl',
          title: 'Tipo de Carga LCL',
        },
        {
          path: 'withholding-concepts',
          title: 'Conceptos de Retención'
        },
      ],
    },
    {
      path: 'security',
      title: 'Seguridad',
      icon: 'security',
      childrenLinks: [
        {
          path: 'roles',
          title: 'Roles',
        },
      ],
    },
  ];

  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router
  ) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {}

  navigate(paths: string[]) {
    console.log('path ', paths);

    let pathArray: string[] = ['fall-gelb'];
    for (let index = 0; index < paths.length; index++) {
      pathArray.push(paths[index]);
    }
    this.router.navigate(pathArray);
  }

  isActive(path: string): boolean {
    return this.router.url.includes(path) ? true : false;
  }
}
