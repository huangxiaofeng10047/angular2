import { Component } from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Mobile} from './mobile'
@Component({
  selector: 'my-app',
  template: `<h1>nihao {{name}}</h1>
  		<app-hello-world></app-hello-world>
  		  <ul>
      <li *ngFor="let hero of mobiles">
      <span>{{hero.id}}</span>
        <span>{{ hero.name }}</span>
      </li>
    </ul>`,
})
export class AppComponent  { name = 'xfeng222';
 public mobiles: Mobile[];
    constructor(public http: Http) {
        console.log(" AppComponent constructor :", "run step constructor ");

        http.get('app/mobile.json').subscribe(res=> this.mobiles =res.json());

    }    

 }

