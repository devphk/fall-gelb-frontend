import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-phk-text-area',
  templateUrl: './phk-text-area.component.html',
  styleUrls: ['./phk-text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhkTextAreaComponent),
      multi: true,
    },
  ],
})
export class PhkTextAreaComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: 'text' | 'password' = 'text';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() requiredMarker = false;
  @Input() required = false;
  @Input() minLength = 1;
  @Input() maxLength = 400;
  @Input() rows = 2;
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
  @Input() showHint: boolean = false
  @Input() hintMessage: string = '';
  inputControl = new FormControl(null);
  ngControl: any;

  constructor(public injector: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.inputControl.valueChanges.subscribe(value =>
      this.propagateChange(value)
    );
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

  propagateChange = (_: any) => {};

  propagateTouch = () => {};
}
