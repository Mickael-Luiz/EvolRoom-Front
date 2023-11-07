import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from '../interfaces/ICourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private jsonUrl = 'assets/database/CourseTable.json';

  constructor(private http: HttpClient) { }

  getJSONData() {
    return this.http.get<ICourse[]>(this.jsonUrl).toPromise();
  }
}
