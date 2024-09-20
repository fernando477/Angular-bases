import { Component } from '@angular/core';

@Component({
  //selector creado personalizados
  selector: 'app-heroeshero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iriman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHeroi(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void{
    this.age = 25;
  }
  reset(): void {
    this.name = 'iroman';
    this.age = 45;
}
}
