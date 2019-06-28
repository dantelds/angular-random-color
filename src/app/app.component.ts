import { Component, ViewChild } from '@angular/core';
import { ColorComponent } from './color/color.component';

@Component({
  selector: 'app-root',
  template: `
    <app-color></app-color>
    <button mat-raised-button (click)="changeColor()">New color</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ColorComponent, {static: true}) appColor: ColorComponent;
  changeColor(): void {
    this.appColor.newColor();
  }
}
