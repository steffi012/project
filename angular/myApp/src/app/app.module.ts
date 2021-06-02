import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { TwowaybComponent } from './twowayb/twowayb.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { StructuralComponent } from './structural/structural.component';
import { Test2Component } from './test2/test2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    TwowaybComponent,
    TemplateComponent,
    StructuralComponent,
    Test2Component,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
