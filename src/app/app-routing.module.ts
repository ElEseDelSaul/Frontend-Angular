import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CrudEmpleadoComponent } from './components/crud-empleado/crud-empleado.component';
import { DetallesEmpleadoComponent } from './components/detalles-empleado/detalles-empleado.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'empleados', component:CrudEmpleadoComponent },
  { path:'',redirectTo:'empleados',pathMatch:'full' },
  { path:'empleado-detalles/:id', component: DetallesEmpleadoComponent},
  { path:'about', component:AboutComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
