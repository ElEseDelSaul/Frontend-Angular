import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent implements OnInit {

  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private service: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']//obtener id del empleado por parametro
    this.empleado = new Empleado();
    this.service.getDetailsEmploye(this.id)
      .subscribe(r => {
        this.empleado = r 
        swal(`Detalles del empleado ${this.empleado.nombre}`);
      }) 
  }

}
