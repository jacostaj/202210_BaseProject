import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';
@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  countRenault = 0;
  countChevrolet = 0;
  countNissan= 0 ;
  constructor(private vehiculoService: VehiculoService) { }
  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.countRenault = vehiculos.filter(vehiculo => vehiculo.marca === "Renault" ).length;
      this.countChevrolet = vehiculos.filter(vehiculo => vehiculo.marca === "Chevrolet" ).length;
      this.countNissan = vehiculos.filter(vehiculo => vehiculo.marca === "Nissan" ).length;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
