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
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' } 
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

  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    // var $toggle = document.getElementsByClassName('navbar-toggler')[0];

    // if (this.sidebarVisible === false) {
    //   this.sidebarOpen();
    // } else {
    //   this.sidebarClose();
    // }
    // const body = document.getElementsByTagName('body')[0];

    // if (this.mobile_menu_visible == 1) {
    //   // $('html').removeClass('nav-open');
    //   body.classList.remove('nav-open');
    //   if ($layer) {
    //     $layer.remove();
    //   }
    //   setTimeout(function () {
    //     $toggle.classList.remove('toggled');
    //   }, 400);

    //   this.mobile_menu_visible = 0;
    // } else {
    //   setTimeout(function () {
    //     $toggle.classList.add('toggled');
    //   }, 430);

    //   var $layer = document.createElement('div');
    //   $layer.setAttribute('class', 'close-layer');


    //   if (body.querySelectorAll('.main-panel')) {
    //     document.getElementsByClassName('main-panel')[0].appendChild($layer);
    //   } else if (body.classList.contains('off-canvas-sidebar')) {
    //     document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
    //   }

    //   setTimeout(function () {
    //     $layer.classList.add('visible');
    //   }, 100);

    //   $layer.onclick = function () { //asign a function
    //     body.classList.remove('nav-open');
    //     this.mobile_menu_visible = 0;
    //     $layer.classList.remove('visible');
    //     setTimeout(function () {
    //       $layer.remove();
    //       $toggle.classList.remove('toggled');
    //     }, 400);
    //   }.bind(this);

    //   body.classList.add('nav-open');
    //   this.mobile_menu_visible = 1;

    // }
  };

  getTitle() {
    // var titlee = this.location.prepareExternalUrl(this.location.path());
    // if (titlee.charAt(0) === '#') {
    //   titlee = titlee.slice(1);
    // }

    // for (var item = 0; item < this.listTitles.length; item++) {
    //   if (this.listTitles[item].path === titlee) {
    //     return this.listTitles[item].title;
    //   }
    // }
    // return 'Dashboard';
  }

  isActive(path: string): boolean {
    return this.router.isActive("home" + path, true);
  }
  

}
