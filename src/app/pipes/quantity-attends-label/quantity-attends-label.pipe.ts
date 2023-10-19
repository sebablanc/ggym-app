import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'quantityAttendsLabel'
})
export class QuantityAttendsLabelPipe implements PipeTransform {

  constructor(private translateSrv: TranslateService) {}

  transform(value: number, type: string = 'month'): string {
    switch (type) {
      case 'month':
        return this.createLabel(value, 'mes');
      case 'days':
        return this.createLabel(value, 'día');
      default: 
        return '';
    }
    
  }

  private createLabel(value: number, type: string){
    let label = this.translateSrv.instant('pipes.quantityAttendsLabel.withoutAttends', {type});
    if(value > 0) {
      let translate = value > 1 ? 'pipes.quantityAttendsLabel.multipleAttends' : 'pipes.quantityAttendsLabel.singleAttends';
      label = this.translateSrv.instant(translate, {value, type});
    }
    
    return label;
  }

}
