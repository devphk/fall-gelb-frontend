import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
})
export class DashboardSidebarComponent implements OnInit {
  sidebarItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sidebarItems = [
      {
        itemTitle: 'Inicio',
        itemIconUrl: '../../../../../assets/icons/account_circle.svg',
        itemLink: 'home',
      },
      {
        itemTitle: 'Información personal',
        itemIconUrl: '../../../../../assets/icons/badge.svg',
        itemLink: 'personal-information',
      },
      {
        itemTitle: 'Seguridad',
        itemIconUrl: '../../../../../assets/icons/lock.svg',
        itemLink: 'security',
      },
    ];
  }

  isActive(path: string): boolean {
    return this.router.isActive('user-dashboard/' + path, true);
  }

  navigate(path: string) {
    this.router.navigate(['user-dashboard/', path]);
  }

  navigateToFallGelb() {
    this.router.navigate(['fall-gelb']);
  }
}
