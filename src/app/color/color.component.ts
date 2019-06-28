import { Component } from '@angular/core';
import { Color } from './color.model';

@Component({
  selector: 'app-color',
  styleUrls: ['./color.component.css'],
  template: `<div [style.background-color]="color.value">
                <span>{{color.value}}</span>
              </div>`
})
export class ColorComponent {
  color: Color;
  constructor() {
    this.color = new Color(this.generateRandomColor());
  }

  newColor(): void {
    this.color.setNewColor(this.generateRandomColor());
  }

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
