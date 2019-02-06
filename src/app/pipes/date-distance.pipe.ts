import { Pipe, PipeTransform } from '@angular/core';

import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as localeFR from 'date-fns/locale/fr';

@Pipe({
  name: 'dateDistance'
})
export class DateDistancePipe implements PipeTransform {

  // {{ 'value' | dateDistance:arg1:arg2:arg3 }}
  transform(value: any, args?: any): any {
    if (isNaN(Date.parse(value))) {
      return null;
    }
    return distanceInWordsToNow(value, {locale: localeFR});
  }

}
