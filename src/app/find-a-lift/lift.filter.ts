import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Trip } from '../entities/trip';

@Pipe({name: 'filterLift'})
@Injectable()
export class FilterLift implements PipeTransform {
     transform(items: Trip[], search: string): any {
  // your custom code here
      console.log(search);
      console.log(items);
      
    return items;

  }
}
