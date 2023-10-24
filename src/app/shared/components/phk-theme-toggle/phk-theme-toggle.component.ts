import { Component, OnInit } from "@angular/core";
import { PhkThemeToggleService } from "./phk-theme-toggle.service";

@Component({
  selector: 'app-phk-theme-toggle',
  templateUrl: './phk-theme-toggle.component.html',
  styleUrls: ['./phk-theme-toggle.component.scss']
})
export class PhkThemeToggleComponent implements OnInit {

  iconPath: string = "";

  moonPath: string = "../../../../assets/icons/moon.svg";
  sunPath: string = "../../../../assets/icons/sun.svg";

  constructor(private themeToggleService: PhkThemeToggleService) {}

  toggle() {
    this.iconPath = (this.iconPath === this.moonPath) ? this.sunPath : this.moonPath;
    this.themeToggleService.toggleMode();
  }

  ngOnInit(): void {
    if (localStorage.getItem('mode')) {
      this.iconPath = (localStorage.getItem('mode') === 'dark') ? this.moonPath: this.sunPath;
    }
  }
}
