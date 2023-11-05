import { Component,
         OnDestroy, 
         OnInit} from '@angular/core';
import { SpinnerService } from '@core/services/spinner-service.service';
import { PhkThemeToggleService } from '@shared/components';
import { LoadingMessage, Mode } from '@shared/models';
import { NgxSpinnerService } from 'ngx-spinner';

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
  loadingMessage: LoadingMessage = LoadingMessage.DEFAULT;
  loadingObservable = this.spinnerService.$loadingStatus.subscribe((startLoading) => {
    return (startLoading) ? 
           this.spinner.show('full-screen-spinner') : 
           this.spinner.hide('full-screen-spinner');
  });

  constructor(private themeService: PhkThemeToggleService,
              private spinner: NgxSpinnerService,
              private spinnerService: SpinnerService) { }

  ngOnDestroy(): void {
    
    this.themeSubscriptor.unsubscribe();
    this.loadingObservable.unsubscribe();
    
  }

}