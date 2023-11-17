## Notes for help

1.- When use mask in the components as phk-input, the mask understand that the value to
insert in the input is a number, text, etc. This mean which is no neccessary assign
a input [type] when is already using the mask. Example:

    <app-phk-input formControlName="username" 
                    label="Usuario"
                    class="w-100"
                    [mask]="'000-000-000'"></app-phk-input>

"This input allow only numbers values"

2.- When using mask in table is neccessary to respect this type of data: 

tableDataTest: any[] = [
    {
      number: {
        value: '1245',
        mask: '00.00',
        suffix: '%'
      },
    }
  ];

  IMPORTANT: The value has to be string