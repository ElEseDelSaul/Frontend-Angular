import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-crud-empleado',
  templateUrl: './crud-empleado.component.html',
  styleUrls: ['./crud-empleado.component.css']
})
export class CrudEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  empleados: Empleado[];

  constructor(private service: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  onSubmit(formulario: NgForm, empleado: Empleado) {
    const { id } = this.empleado;

    if (id) { //Actualizar empleado
      this.service.putEmploye(id, empleado)
        .subscribe(
          r => {
            console.log("Empleado No. " + id + " Actualizado.");
            console.log(r);
            this.listar();
            swal(
              'Empleado Actualizado',
              'El empleado ha sido actualizado con exito.',
              'success'
            );
          }
        )
    } else {  //Agregar un nuevo empleado
      this.service.saveEmploye(this.empleado)
        .subscribe(
          r => {
            console.log("Empleado Agregado: ", r), //Mostrar por consola resultado
              this.listar(); //Vovler a renderizar la lista
              swal(
                'Empleado Agregado',
                'El empleado ha sido agregado con exito.',
                'success'
              )
          }
        )
    }

    //Resetear valores
    this.empleado = {
      id: null as any,
      nombre: '',
      apellidos: '',
      email: ''
    }
    formulario.resetForm(); //Limpiar Formulario
  }

  listar() {
    this.service.getEmployes().subscribe(
      r => {
        this.empleados = r,
          console.log(r)
      }
    )
  }

  onDelete(id: number) {
    swal({
      title: '¿Estas seguro de eliminar el empleado?',
      text: 'Confirma si deseas eliminar al empleado',
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, cancelar.',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminalo.',
      confirmButtonClass: 'btn btn-success',
      buttonsStyling: true
    }).then((res) => {
      if (res.value) {
        this.service.deleteEmploye(id)
          .subscribe(
            r => {
              this.listar();
              swal(
                'Empleado Eliminado',
                'El empleado ha sido eliminado con exito.',
                'success'
              )
              console.log("Empleado eliminado.")
            }
          );
      }
    })


  }

  onUpdate(id: number, empleadoNuevo: Empleado) {
    this.service.getDetailsEmploye(id)
      .subscribe(
        r => {
          console.log(r),
            this.empleado = empleadoNuevo //Cargar empleado seleccionado al formulario
        }
      )
  }

  onDetails(id: number) {
    /* this.service.getDetailsEmploye(id)
      .subscribe(
        res => {
          console.log(res)
        }
      ) */
    this.router.navigate([`empleado-detalles/${id}`]);
  }


}
