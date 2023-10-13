import {
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import {
  ControlValueAccessor,
  UntypedFormControl,
  NG_VALUE_ACCESSOR,
  NgControl
} from '@angular/forms';

@Component({
  selector: 'app-phk-input',
  templateUrl: './phk-input.component.html',
  styleUrls: ['./phk-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhkInputComponent),
      multi: true
    }
  ]
})
export class PhkInputComponent implements OnInit, ControlValueAccessor {
  @Input() label!: string;
  @Input() type: 'text' | 'password' = 'text';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() mask = null;
  @Input() requiredMarker = false;
  @Input() required = false;
  @Input() minLength = 1;
  @Input() maxLength = 100;
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
  inputControl = new UntypedFormControl(null);
  ngControl!: any;

  constructor(public injector: Injector) {
  }

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
