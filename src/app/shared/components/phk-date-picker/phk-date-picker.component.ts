import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-phk-date-picker',
  templateUrl: './phk-date-picker.component.html',
  styleUrls: ['./phk-date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhkDatePickerComponent),
      multi: true,
    },
  ],
})
export class PhkDatePickerComponent
  implements OnInit, ControlValueAccessor, OnChanges
{
  @Input() label: string = '';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
  @Input() max = new Date(new Date().getFullYear() + 1, 11, 31);
  @Input() min = new Date(1000, 1, 1);
  @Input() showMinDate = false;
  @Input() requiredMarker = false;
  @Input() required = false;
  @Input() startView: 'month' | 'year' | 'multi-year' = 'year';
  @Output() dateChange = new EventEmitter<Date | null>();
  inputControl = new FormControl({ value: null, disabled: this.disabled });
  ngControl: any;

  constructor(public injector: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.inputControl.valueChanges.subscribe(value =>
      {
        if (value) {
          this.propagateChange(this.convertStringToDate(value));
        } else {
          this.propagateChange(value);
        }
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      if (this.disabled) {
        this.inputControl.disable();
      } else {
        this.inputControl.enable();
      }
    }
  }

  onTouch(): void {
    this.propagateTouch();
  }

  convertStringToDate(stringDate: string): string {
    if (stringDate === '') {
      return '';
    } else {
      const date = new Date(stringDate);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return [date.getFullYear(), month, day].join('-');
    }
  }

  writeValue(value: any): void {
    this.dateChange.emit(value);
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
