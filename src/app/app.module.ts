import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoAddFormComponent } from './components/to-do-add-form/to-do-add-form.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoAddFormComponent,
    ToDoListComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
