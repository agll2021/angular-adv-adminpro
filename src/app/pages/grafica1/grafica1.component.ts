import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: String[] = ['Estadistica 1', 'Estadistica 2', 'Estadistica 3'];
  public data1 = [
    [100, 250, 370],
  ];

  public labels2: String[] = ['Ventas 1', 'Ventas 2', 'Ventas 3'];
  public data2 = [
    [50, 500, 170],
  ];
}
