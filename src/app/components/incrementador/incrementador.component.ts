import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit{

  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  // @Input() progreso: number = 50;
  @Input('valor') progreso: number = 50; //cuando se necesite renombrar el argumento
  @Input() btnClass: string = "btn-primary";

  @Output() emitioValor: EventEmitter<number> = new EventEmitter();


  cambiarValor(valor: number){

    if(this.progreso > 100 && valor >= 0){
      this.emitioValor.emit(100);
      return this.progreso = 100;
    }
    
    if(this.progreso < 0 && valor < 0){
      this.emitioValor.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.emitioValor.emit(this.progreso);
  }

  onChange(valor: number){

    if(valor >= 100){
      this.progreso = 100;
    }else if(valor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }
    this.emitioValor.emit(this.progreso);
  }

}
