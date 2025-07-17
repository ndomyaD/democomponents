import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Textcomponent } from './textcomponent/textcomponent';
import { Imagecomponent } from './imagecomponent/imagecomponent';
import { EmpInfo } from './emp-info/emp-info';
import { FormComponent } from './form-component/form-component';

@NgModule({
  declarations: [
    App,
    Textcomponent,
    Imagecomponent,
    EmpInfo,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
