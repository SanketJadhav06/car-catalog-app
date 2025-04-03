import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {
  @Input() brand: string;
  @Input() cars: any[]; 
  selectedCar: any;
  isCarDetailsOpen: boolean = false;

  ngOnChanges() {
    console.log('Brand in child:', this.brand);
    console.log('Cars in child:', this.cars);
  }

  ngOnInit(): void {}

  selectCar(car: any) {
    this.selectedCar = car;
    this.isCarDetailsOpen = true;
  }

  closeCarDetails() {
    this.isCarDetailsOpen = false;
    this.selectedCar = null;
  }
}
