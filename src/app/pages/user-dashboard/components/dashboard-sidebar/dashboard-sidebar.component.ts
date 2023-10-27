import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  sidebarItems: any [] = [
    {
      itemTitle: 'Inicio',
      itemIcon: 'home',
      itemLink: 'home'
    },
    {
      itemTitle: 'Información personal',
      itemIcon: 'person',
      itemLink: 'personal-information'
    },
    {
      itemTitle: 'Seguridad',
      itemIcon: 'lock',
      itemLink: 'security'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isActive(path: string): boolean {
    return this.router.isActive("user-dashboard/" + path, true);
  }

  navigate(path: string) {
    console.log("path ", path)
    this.router.navigate(['user-dashboard/', path]);
  }
}
