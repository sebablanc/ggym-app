import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) return null;

        const passwordValid = passwordStrengthValidation(value);
        return !passwordValid?.hasAlphabetic || !passwordValid?.hasNumeric || !passwordValid?.hasSymbols ? { passwordStrength: passwordValid } : null;
    }
}

export function passwordStrengthValidation(value: string) {
    let stringSplitted = value.split('');
    const hasAlphabetic = stringSplitted.filter((letter: string) => /[a-zA-Z]/.test(letter)).length >= 4;
    const hasNumeric = stringSplitted.filter((num: string) => /[0-9]/.test(num)).length >= 2;
    const hasSymbols = stringSplitted.filter((symb: string) => /[!_%@#&.*/|?¡¿]/.test(symb)).length >= 1;

    return {hasAlphabetic, hasNumeric, hasSymbols};
}