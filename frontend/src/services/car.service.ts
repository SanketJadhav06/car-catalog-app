import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsData = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  fetchCars(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/api/cars'); 
  }

  setCarsData(data: any[]) {
    this.carsData.next(data);
  }

  getCarsData(): Observable<any[]> {
    return this.carsData.asObservable();
  }
}
