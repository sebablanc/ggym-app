import { Directive, Input, ElementRef } from '@angular/core';
import { passwordStrengthValidation } from 'src/app/validators/passwordStrength.validator';

@Directive({
  selector: '[appAlphabetTrafficLights]'
})
export class AlphabetTrafficLightsDirective {
  @Input() appAlphabetTrafficLights: string | undefined = '';
  @Input() minLength = 0;
  @Input() type = '';

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    let color = '';
    
    if (this.appAlphabetTrafficLights && this.appAlphabetTrafficLights.length > 0) {
      const result = passwordStrengthValidation(this.appAlphabetTrafficLights);
      let isOK = false;
      switch (this.type) {
        case 'letters':
          isOK = (result?.hasAlphabetic) || false;
          break;
        case 'numbers':
          isOK = (result?.hasNumeric) || false;
          break;
        case 'symbols':
          isOK = (result?.hasSymbols) || false;
          break;
        default:
          isOK = this.appAlphabetTrafficLights.length >= this.minLength;
          break;
      }
      color = isOK ? '#2fdf75' : '#ff4961';
    }
    this.el.nativeElement.style.color = color;
  }

}
