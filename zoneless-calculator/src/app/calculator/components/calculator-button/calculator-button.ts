import { ChangeDetectionStrategy, Component, Host, input, HostBinding, output, viewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrls: ['./calculator-button.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    // attribute: 'hola',
    // 'data-size': 'XL',
  },
})
export class CalculatorButton {
  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value
  });

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }

  handleClick() {
    if(!this.contentValue()?.nativeElement){
      return;
    }
    const value = this.contentValue()!.nativeElement.innerText;

    this.onClick.emit(value.trim());
  }

}
