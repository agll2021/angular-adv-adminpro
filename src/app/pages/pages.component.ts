import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function funcionInicial();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingServices: SettingsService) { }

  ngOnInit(): void {
    //./assets/css/colors/default-dark.css
    // 1er forma:
    // if(localStorage.getItem('theme') !== null)
    //   this.linkTheme.setAttribute('href', localStorage.getItem('theme'));    
    // else
    //   this.linkTheme.setAttribute('href', './assets/css/colors/default-dark.css');
    funcionInicial();
  }

}
