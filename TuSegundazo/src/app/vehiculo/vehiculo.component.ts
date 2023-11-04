import { Component, OnInit } from '@angular/core';
import { VehiculoDto } from './VehiculoDto';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculos: VehiculoDto[] = [];

  constructor(private vehiculosService: VehiculoService) { }

  ngOnInit() {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this.vehiculosService.getVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos);
  }

  get marcas() {
    return this.vehiculos.map(vehiculo => vehiculo.marca).filter((marca, index, array) => array.indexOf(marca) === index);
  }

  carrosPorMarca(marca: string) {
    return this.vehiculos.filter(vehiculo => vehiculo.marca === marca).length;
  }

}
