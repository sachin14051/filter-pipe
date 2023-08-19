import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../module/model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Iplayer>, searchstring: string): Iplayer[] {
    if (!value) {
      return []
    }
    if (!searchstring) {
      return value
    }


    let filterArray = value.filter(obj => {
      return obj.team.toLowerCase().includes(searchstring.toLowerCase()) ||
        obj.name.toLowerCase().includes(searchstring.toLowerCase())
    })
    return filterArray
  }

}
