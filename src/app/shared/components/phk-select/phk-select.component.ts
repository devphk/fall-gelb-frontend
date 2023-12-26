import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  Injector,
  Input,
  OnInit,
  QueryList,
  Output,
  EventEmitter
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {MatOption} from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-phk-select',
  templateUrl: './phk-select.component.html',
  styleUrls: ['./phk-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhkSelectComponent),
      multi: true
    }
  ]
})
export class PhkSelectComponent implements OnInit, 
                                           AfterViewInit, 
                                           ControlValueAccessor {

  @Input() label: string = '';
  @Input() multiple = false;
  @Input() panelClass = '';
  @Input() requiredMarker = false;
  @Input() required = false;
  @Input() showExtraField = false;
  @Input() appearance: 'fill' | 'outline' = 'outline';
  @ContentChildren(MatOption) queryOptions!: QueryList<MatOption>;
  options!: { 
    value: any, 
    viewValue: any, 
    disabled: boolean 
  }[];
  @Input() disabled = false;
  @Input() showNoSelect: boolean = false;

  @Output() optionSelected: EventEmitter<any> = new EventEmitter();
  @Output() extraField: EventEmitter<string> = new EventEmitter();
  ngControl!: NgControl;
  @Input() errorMessage: string | null = null;

  extraFieldInput: string = '';

  constructor(public injector: Injector) {
  }

  // tslint:disable-next-line:variable-name
  private _value: any;

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.propagateChange(this._value);
  }

  ngOnInit(): void {
    this.setOptions();
    this.ngControl = this.injector.get(NgControl);
  }

  showField() {
    // if(e.keyCode === 13){
      // e.preventDefault(); // Ensure it is only this code that runs
      this.extraField.emit(this.extraFieldInput);
      this.extraFieldInput = '';
    // }
  }

  ngAfterViewInit(): void {
    this.queryOptions.changes.subscribe(() => {
      this.setOptions();
    });
  }

  setOptions() {
    this.options = [];

    setTimeout(() => {

      this.options = this.queryOptions.toArray().map(option => ({
        value: option.value,
        viewValue: option.viewValue,
        disabled: option.disabled
      }));

    }, 0);
  }

  onSelect(event: MatSelectChange) {
    this.value = event.value;
    this.optionSelected.emit(this.value);
  }

  onTouch() {
    this.propagateTouch();
  }

  writeValue(value: any): void {
    this.value = value;
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
