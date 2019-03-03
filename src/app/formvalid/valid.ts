import { FormControl } from '@angular/forms';

export function positiveNumberValidator(control: FormControl) {
    if (!control.value) {
        return null;
    }
    let price = parseInt(control.value);
    if (price > 0) {
        return null;
    } else {
        return { positiveNumber: true };
    }
}