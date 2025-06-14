import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import dogProfile from '../../../public/dummyData/dog-profile';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  constructor() { }

  getDogProfile(): Observable<any> {
    return of(dogProfile);
  }
}
