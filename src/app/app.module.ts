import { UserComponent } from './user/user.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatInputModule } from  '@angular/material/input';
import {MatCardModule } from  '@angular/material/card';
import {MatButtonModule } from  '@angular/material/button';
import {MatFormFieldModule } from  '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import {NGX_LOCAL_STORAGE_SERIALIZER} from 'ngx-localstorage';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxLocalStorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
