import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter : {{ counter }}</h3>

  <button (click)="homeworkBy(1)">+1</button>
  <button (click)="homeworkReset()">Reset</button>
  <button (click)="homeworkBy(-1)">-1</button>
  `,
})

export class CounterComponent {
  public counter: number = 1
  homeworkBy(value : number): void {
    this.counter += value;
  }

  homeworkReset(): void {
    this.counter =0;
  }
}
