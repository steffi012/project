import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StudentListComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
