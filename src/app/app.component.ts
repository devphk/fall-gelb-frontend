import { Component,
         OnDestroy } from '@angular/core';
import { PhkThemeToggleService } from '@shared/components';
import { Mode } from '@shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'fall-gelb';

  currentMode: Mode = Mode.LIGHT;
  themeSubscriptor = this.themeService
                         .modeChanged$
                         .subscribe((mode: Mode) => {
    this.currentMode = mode;
  });

  constructor(private themeService: PhkThemeToggleService) { }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.themeSubscriptor.unsubscribe();
  }

}