import { AbstractControl, ValidationErrors } from "@angular/forms";

export function minWords(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const wordCount = control.value ? control.value.trim().split(/\s+/).length : 0;
    return wordCount >= min ? null : { minWords: { required: min, actual: wordCount } };
  };
}
