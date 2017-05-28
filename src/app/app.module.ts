import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { jsonpService } from './services/get.service';
import { AccountOptionsComponent } from './account-options/account-options.component';

// bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AccountOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [jsonpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
