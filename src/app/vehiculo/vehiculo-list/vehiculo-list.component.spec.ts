/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoListComponent } from './vehiculo-list.component';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ]
    })
    .compileComponents();
  }));
beforeEach(() => {
  fixture = TestBed.createComponent(VehiculoListComponent);
  component = fixture.componentInstance;
  component.vehiculos = [
    new Vehiculo(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(),faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence()),
    new Vehiculo(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(),faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence()),
    new Vehiculo(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(),faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence())
  ]
  fixture.detectChanges();
  debug = fixture.debugElement;
});

it("Component has a table with header", () => {
  expect(debug.query(By.css("thead")).children.length).toEqual(1);
});

it("Component has a table with three cars", () => {
  expect(debug.query(By.css("tbody")).children.length).toEqual(component.vehiculos.length);
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});
