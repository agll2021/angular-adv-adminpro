import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise((resolve, reject)=>{
    //   if(false)
    //     resolve('Hola Mundo.');
    //   else
    //     reject('Algo anda mal.');
    // });

    // promesa.then((mensaje)=>{
    //   console.log(mensaje +" Inicio ...");
    // }).catch(error=>console.log(error, " maaaaal...! "));

    // console.log(" Fin de la promesa.");

    this.getUsuarios().then( usuarios =>{
      console.log(usuarios);
    }).catch(error =>console.log(error));
  }

  getUsuarios(){

    return new Promise( (resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then( resp => resp.json())
      .then( body => resolve(body.data))
      .catch( error => reject('Problemas del servicio... '+ error));
    });
  }

}
