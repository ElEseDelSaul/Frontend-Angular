import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { DetallesEmpleadoComponent } from './components/detalles-empleado/detalles-empleado.component';
import { CrudEmpleadoComponent } from './components/crud-empleado/crud-empleado.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DetallesEmpleadoComponent,
    CrudEmpleadoComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
