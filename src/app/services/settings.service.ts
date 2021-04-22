import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    console.log('Inicio del setting');

    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', url);
    
  }

  cambiarColor(tema: string){
      
    const url = `./assets/css/colors/${ tema }.css`;  
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.cambioCheck();
  }

  cambioCheck(){
    const link = document.querySelectorAll('.selector');

    if(localStorage.getItem('theme') !== null){
      
        link.forEach(element => {

          element.classList.remove('working');
                        
          const tema = element.getAttribute('data-theme');
          const url = `./assets/css/colors/${ tema }.css`;
          
          if(localStorage.getItem('theme') === url)
            element.classList.add('working');

      });
    }else{      
        link.forEach(element => {
        const url = `default-dark`;        
        if(element.getAttribute('data-theme') === url)
          element.classList.add('working');        
      });
    }    
  }

}
