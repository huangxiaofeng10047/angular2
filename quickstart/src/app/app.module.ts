import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HelloWorldComponent }  from './hello-world.component';
@NgModule({
  imports:      [ BrowserModule,   HttpModule ],
  declarations: [ AppComponent,HelloWorldComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
