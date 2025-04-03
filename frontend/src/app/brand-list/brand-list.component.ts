import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  brands: string[] = [];
  filteredBrands: string[] = [];
  selectedBrand: string | null = null; 
  cars: { [key: string]: any }[] = [];
  allCars: any;
  searchTerm: string = '';

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.carService.fetchCars().subscribe({
      next: (cars) => {
        this.carService.setCarsData(cars);
        this.brands = Object.keys(cars);
        this.filteredBrands = [...this.brands]; // Initialize filtered brands
        this.allCars = cars;
      },
      error: (err) => console.error('Error fetching car brands:', err)
    });
  }

  selectBrand(brand: string) {
    this.selectedBrand = brand; 
    this.cars = this.allCars[brand] || [];
  }

  filterBrands(event: Event) {
    const target = event.target as HTMLInputElement;
    const searchTerm = target.value.toLowerCase();
    this.filteredBrands = this.brands.filter(brand => brand.toLowerCase().includes(searchTerm));
    this.selectedBrand = null;
    this.cars = [];
  }
  
}
