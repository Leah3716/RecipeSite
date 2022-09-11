import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesHours'
})
export class MinutesHoursPipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    if(hours<10&&minutes<10)
    return '0'+hours + ' : 0' + minutes ;
    if(hours<10)
    return '0'+hours + ' : ' + minutes ;
    if(minutes<10)
    return +hours + ' : 0' + minutes ;
    return hours + ' : ' + minutes ;
  }

}
