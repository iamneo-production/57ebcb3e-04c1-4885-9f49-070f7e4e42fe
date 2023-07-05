import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 3ba3e596594331fac4165c9754ce8863c646981f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent
=======
    LoginComponent
>>>>>>> 3ba3e596594331fac4165c9754ce8863c646981f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
