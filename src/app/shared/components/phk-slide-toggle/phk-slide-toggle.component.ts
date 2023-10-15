import { Component, 
         Injector, 
         Input, 
         forwardRef } from '@angular/core';
import { FormControl, 
         NG_VALUE_ACCESSOR, 
         NgControl } from '@angular/forms';

@Component({
  selector: 'app-phk-slide-toggle',
  templateUrl: './phk-slide-toggle.component.html',
  styleUrls: ['./phk-slide-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhkSlideToggleComponent),
      multi: true
    }
  ]
})
export class PhkSlideToggleComponent {

  constructor(public injector: Injector) {}

  @Input() label: string = '';
  @Input() disabled = false;
  inputControl = new FormControl(null);
  ngControl!: any;

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.inputControl.valueChanges.subscribe(value => this.propagateChange(value));
  }

  onTouch() {
    this.propagateTouch();
  }

  writeValue(value: any): void {
    this.inputControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  propagateChange = (_: any) => {
  }

  propagateTouch = () => {
  }

}