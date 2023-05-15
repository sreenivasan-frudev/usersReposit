import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from './users.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { UsersComponent } from './users/users.component';
import { Practice1Component } from './practice/practice1/practice1.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    UsersComponent,
    Practice1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
