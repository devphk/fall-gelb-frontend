import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { fadeFastAnimation } from '@shared/animations';
import { HomeService } from 'src/app/pages/home/home.service';

@Component({
  selector: 'app-phk-apps-list',
  templateUrl: './phk-apps-list.component.html',
  styleUrls: ['./phk-apps-list.component.scss'],
  animations: [fadeFastAnimation]
})
export class PhkAppsListComponent {

  @Input() appsList: any[] = [];
  @Input() clickingInOutsideButton: boolean = false;

  constructor(private homeService: HomeService,
              private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)
        && !this.clickingInOutsideButton) {
        this.homeService.toggleAppsList = false;
    }
  }

}
