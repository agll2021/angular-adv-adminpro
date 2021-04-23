import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) { 
    this.getArgumentosRuta();      
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
    this.tituloSubs$ = this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data),
    )
    .subscribe( data => {
      this.titulo = data.titulo;
      document.title = ` AdminPro - ${this.titulo}`
    });
    // Desestructura el objecto, obteniendo la propiedad directamente en este caso titulo:
    // .subscribe( ({titulo}) => {
    //   this.titulo = data.tiulo;
    // });
  }


}
