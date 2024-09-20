import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletHero?: string;
  removerLastHeroe(): void {
   this.deletHero = this.heroName.pop();

  }
}
