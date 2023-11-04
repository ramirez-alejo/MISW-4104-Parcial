/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { faker } from '@faker-js/faker';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { DebugElement } from '@angular/core';

describe('Service: Vehiculo', () => {
  let component: VehiculoComponent;
  let debug: DebugElement;
  let fixture: ComponentFixture<VehiculoComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoComponent],
      providers: [VehiculoService, HttpClient, HttpHandler]
    });

    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;

    component.vehiculos = [];
    
      component.vehiculos.push({
        id: faker.number.int(),
        marca: 'Mazda',
        linea: faker.vehicle.model(),
        modelo: faker.number.int()
      });
      component.vehiculos.push({
        id: faker.number.int(),
        marca: 'Mazda',
        linea: faker.vehicle.model(),
        modelo: faker.number.int()
      });
      component.vehiculos.push({
        id: faker.number.int(),
        marca: 'Kia',
        linea: faker.vehicle.model(),
        modelo: faker.number.int()
      });
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));

  it('debe tener una lista de vehiculos', () => {
    expect(component.vehiculos.length).toBeGreaterThan(0);
  });

  it('debe contener una table', () => {
    expect(debug.nativeElement.querySelector('table')).toBeTruthy();
  });

  it('debe contener un thead', () => {
    expect(debug.nativeElement.querySelector('thead')).toBeTruthy();
  });

  it('debe contener un tbody', () => {
    expect(debug.nativeElement.querySelector('tbody')).toBeTruthy();
  });

  it('debe contener un tr por cada vehiculo', () => {
    expect(debug.nativeElement.querySelectorAll('tbody tr').length).toBe(component.vehiculos.length);
  });

  it('debe contener un th por cada columna', () => {
    expect(debug.nativeElement.querySelectorAll('thead th').length).toBe(4);
  });

  it('debe contener los totales', () => {
    expect(document.getElementById('totales')).toBeTruthy();
  });

  it('debe calcular los totales', () => {
    expect(component.marcas.length).toBe(2);
    expect(component.carrosPorMarca('Mazda')).toBe(2);
    expect(component.carrosPorMarca('Kia')).toBe(1);
  });

  it('El div de totales debe contener un a por cada marca', () => {
    expect(document.querySelectorAll('#totales a').length).toBe(component.marcas.length);
  });
});
