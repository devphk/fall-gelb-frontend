import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phk-sidenav',
  templateUrl: './phk-sidenav.component.html',
  styleUrls: ['./phk-sidenav.component.scss']
})
export class PhkSidenavComponent implements OnInit {

  @Input() menuItems: any[] = [
    { 
      path: 'dashboard', 
      title: 'Inicio',  
      icon: 'dashboard',
      childrenLinks: []
    },
    { 
      path: 'entities', 
      title: 'Entidades',  
      icon:'person',
      childrenLinks: [
        {
          path: 'providers',
          title: 'Proveedores'
        },
        {
          path: 'operations',
          title: 'Operaciones'
        },
        {
          path: 'statistics',
          title: 'Estadísticas'
        },
        {
          path: 'administration',
          title: 'Administración'
        },
        {
          path: 'settings',
          title: 'Configuración'
        },
        {
          path: 'commercial',
          title: 'Comercial'
        },
        {
          path: 'comptroller',
          title: 'Contraloría'
        }
      ]
    },
    // { 
    //   path: '/operations', 
    //   title: 'Operaciones',  
    //   icon:'content_paste' 
    // },
    // { 
    //   path: '/statistics', 
    //   title: 'Estadíticas',  
    //   icon:'library_books' 
    // },
    // {
    //   path: '/administration', 
    //   title: 'Administración',  
    //   icon:'bubble_chart' 
    // },
    // { 
    //   path: '/settings', 
    //   title: 'Configuración',  
    //   icon:'location_on' 
    // },
    // { 
    //   path: '/commercial', 
    //   title: 'Comercial',  
    //   icon:'notifications' 
    // },
    // { 
    //   path: '/comptroller', 
    //   title: 'Contraloría',  
    //   icon:'notifications' 
    // } 
  ];

  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(location: Location, private element: ElementRef, private router: Router) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    //   this.listTitles = ROUTES.filter(listTitle => listTitle);
    //   const navbar: HTMLElement = this.element.nativeElement;
    //   this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         var $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
  }

  navigate(paths: string[]) {
    console.log("path ", paths)

    let pathArray: string[] = ['fall-gelb'];
    for (let index = 0; index < paths.length; index++) {
      pathArray.push(paths[index]);
    }
    this.router.navigate(pathArray);
    
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };


  isActive(path: string): boolean {

    return this.router.url.includes(path) ? true : false;

  }
  

}
