import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { MatStepperModule } from '@angular/material/stepper';
import { DefaultErrorMatcher } from './default.error-matcher';
import { ErrorStateMatcher } from '@angular/material/core';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: DefaultErrorMatcher }],

  bootstrap: [AppComponent],
})
export class AppModule {}
