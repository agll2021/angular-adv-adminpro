import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})

export class RxjsComponent  implements OnDestroy{

  intervalSubs: Subscription;

  constructor() { 

    // this.retornaObservable().pipe(
    //   retry(1)
    // )
    // .subscribe(
    //   valor => console.log('Subs: ', valor),
    //   err => console.warn('Error: ', err),
    //   () => console.info('Obs Terminado ')
    // );

    this.intervalSubs = this.retornaIntervalo()
    .subscribe( valor => console.log(valor));

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{

    return interval(500)
           .pipe( 
              map( valor => valor+1),
              filter( valor => ( valor % 2 === 0) ? true : false),
              take(5),              
            );   
  }


  retornaObservable(): Observable<number>{

    let i = -1;

    const obs$ = new Observable<number>( observer =>{
          

      const intervalo = setInterval(()=>{
        
        i++;
        observer.next(i);
        
        if(i === 4){
          clearInterval( intervalo );
          observer.complete();
        }

        if( i === 2){
          // i = 0;
          observer.error(' Llego al valor de 2 ');
        }

      }, 1000)

    });

    return obs$;
  }


}
