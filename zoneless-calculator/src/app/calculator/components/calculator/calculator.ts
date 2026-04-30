import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';
import { NgClass } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'calculator',
  imports: [CalculatorButton],
  templateUrl: './calculator.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Calculator {
  handleClick(key: string){
    console.log({ key });
  }
 }
