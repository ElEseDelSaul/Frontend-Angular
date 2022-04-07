import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Class
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private URI = 'http://localhost:8080/api/empleados';

  //empleados: Empleado[];

  constructor(private http: HttpClient) { }

  //Realizar peticion POST al Backend y agregar Empleado
  saveEmploye(empleado: Empleado): Observable<Object> {
    return this.http.post(this.URI, empleado);
  }

  //Realizar peticion PUT al Backend y actualizar Empleado
  putEmploye(id:number, empleado:Empleado):Observable<Object>{
    return this.http.put(`${this.URI}/${id}`,empleado);
  }
  //Realizar peticion GET al Backend y obtener Empleados
  getEmployes(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.URI);
  }
  
  //Realizar peticion GET al Backend Obtener un unico Empleado
  getDetailsEmploye(id: number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.URI}/${id}`);
  }

  //Realizar peticion DELETE al Backend y Eliminar un registro
  deleteEmploye(id: number): Observable<Object>{
    return this.http.delete(`${this.URI}/${id}`);
  }


}
