import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cityZipValidator(control: AbstractControl): ValidationErrors | null {
  const city = control.get('city')?.value;
  const zip = control.get('zip')?.value;

  if (!city || !zip) return null;

  // Example rule (demo purpose)
  // Chennai ZIP starts with 6, Bangalore starts with 5
  if (city.toLowerCase() === 'chennai' && !zip.startsWith('6')) {
    return { invalidCityZip: true };
  }

  if (city.toLowerCase() === 'bangalore' && !zip.startsWith('5')) {
    return { invalidCityZip: true };
  }

  return null;
}
