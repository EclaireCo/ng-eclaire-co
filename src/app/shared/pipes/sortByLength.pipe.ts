import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByLength'
})
export class SortByLengthPipe implements PipeTransform {

  transform(values: any[]): any {
    return values.sort(function(a, b){
        return a.text.length - b.text.length;
      });
  }

}