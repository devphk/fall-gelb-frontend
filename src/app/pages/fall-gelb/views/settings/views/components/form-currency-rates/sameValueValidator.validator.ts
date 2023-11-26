import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function sameValueValidator(control1Name: string, control2Name: string, isEdit:boolean):ValidatorFn{
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const control1 = formGroup.get(control1Name);
        const control2 = formGroup.get(control2Name);
    
        if (control1 && control2 && control1.value === control2.value && isEdit === true) {
          return { notSameValue: true };
        }
    
        return null;
      };
}