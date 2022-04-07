import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from './empleado';
import { EmpleadoService } from './services/empleado.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CRUD de empleados con Spring, Mysql y Angular';

  constructor(private service: EmpleadoService) {

  }


  ngOnInit(): void {
  }


  
  
}
