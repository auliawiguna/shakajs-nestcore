import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberHelper {
  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }    
}

