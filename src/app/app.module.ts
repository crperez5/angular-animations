import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WikiService } from './wiki-service.service';
import { JsonpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JsonpModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
