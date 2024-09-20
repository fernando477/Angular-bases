import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
  <p>Couter {{counter}}</p>
<button (click)="increasBy(+1)">+1</button>
<button (click)="resetCaunter()">Reset</button>
<button (click)="increasBy(-1)">-1</button>


`
})

export class CounterComponent {
  public counter: number = 10;

  increasBy (value: number): void{
    this.counter += value;
  }
  resetCaunter(): void{
    this.counter = 10;
  }

}
