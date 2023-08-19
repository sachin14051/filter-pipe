import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../module/model';
import { iPlayer } from '../module/players';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<iPlayer>, searchstring: string): iPlayer[] {
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
