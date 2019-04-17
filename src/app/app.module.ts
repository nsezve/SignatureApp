import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { CoreModule } from './core/core.module';

// Import components
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

// import materialize module
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    MatInputModule,MatRadioModule,MatCheckboxModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [ MatInputModule,MatRadioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
