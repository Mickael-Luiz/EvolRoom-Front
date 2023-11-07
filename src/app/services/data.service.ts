import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from '../interfaces/ICourse';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = '';

  constructor(private http: HttpClient) { }

  getJSONData() {
    return this.http.get(this.jsonUrl) as Observable<ICourse[]>;
  }
}
