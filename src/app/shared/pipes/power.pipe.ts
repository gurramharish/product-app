import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power: 3}} ==> 8
// {{ 5 | power}} ==> 5

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): any {
    // console.log('Exponent value :: ', exponent);
    // let result = value;
    // if (exponent === 0) {
    //   return 1;
    // }
    // if (exponent === 1) {
    //   return value * exponent;
    // } else {
    //   while (exponent) {
    //     result *= value;
    //     exponent--;
    //   }
    // }
    return Math.pow(value, exponent);
    // return result;
  }

}
