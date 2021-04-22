import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent implements OnInit  {

  // public linkTheme = document.querySelector('#theme');
  // public link: NodeListOf<Element>;

  constructor(private settingService: SettingsService){}

  ngOnInit(): void {
    // this.link = document.querySelectorAll('.selector');
    // this.cambioCheck();
    this.settingService.cambioCheck();
  }

  cambiarColor(tema: string){
    this.settingService.cambiarColor(tema);
    // const url = `./assets/css/colors/${ tema }.css`;  
    // this.linkTheme.setAttribute('href', url);
    // localStorage.setItem('theme', url);
    // this.cambioCheck();
  }  


}
