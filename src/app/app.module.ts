import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GramaticaFormComponent } from './components/gramatica-form/gramatica-form.component';
import { IngresoGramaticaComponent } from './pages/ingreso-gramatica/ingreso-gramatica.component';

@NgModule({
  declarations: [AppComponent, GramaticaFormComponent, IngresoGramaticaComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
