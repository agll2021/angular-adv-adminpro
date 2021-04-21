import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent  {

  progreso1: number = 25;
  progreso2: number = 30;

  get getProgreso1(){
    return `${ this.progreso1}%`;
  }
  get getProgreso2(){
    return `${this.progreso2}%`;
  }

  // cambioValorHijo(valor:number){
  //   this.progreso1 = valor;
  // }

}
