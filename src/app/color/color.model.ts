export class Color {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
  setNewColor(color: string): void {
    this.value = color;
  }
}
