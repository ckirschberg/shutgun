import { Trip } from './entities/trip';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }

  getAllTrips(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createTrip(trip: Trip) {
    trip.localFilter = 'Christian';
    return this.http.post(this.baseUrl, trip);
  }
}
