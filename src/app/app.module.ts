import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatChipsModule} from '@angular/material/chips';


// [...]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // [...]
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }