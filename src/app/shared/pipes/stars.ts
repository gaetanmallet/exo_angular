import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})

export class StarsPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const stars = [];

    for (let i = 0; i < value; i++) {
      stars.push(i);
    }

    return stars;
  }
}
