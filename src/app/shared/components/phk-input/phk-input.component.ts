import {
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-phk-input',
  templateUrl: './phk-input.component.html',
  styleUrls: ['./phk-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhkInputComponent),
      multi: true,
    },
  ],
})
export class PhkInputComponent implements OnInit, ControlValueAccessor {
  @Input() label!: string;
  @Input() type: 'number' | 'text' | 'password' = 'text';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() requiredMarker = false;
  @Input() required = false;
  @Input() minLength = 1;
  @Input() maxLength = 100;
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
  @Input() errorMessage: string | null = null;
  @Input() mask: string = '';
  @Input() min: number = -999999999;
  inputControl = new FormControl();
  ngControl!: NgControl;

  constructor(public injector: Injector, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.inputControl.valueChanges.subscribe((value) => {
      this.propagateChange(value);
    });
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
    if (isDisabled) {
      this.inputControl.disable();
    } else {
      this.inputControl.enable();
    }
  }

  propagateChange = (_: any) => {};

  propagateTouch = () => {};
}
