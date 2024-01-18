import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../model/sport.model';

@Injectable({
  providedIn: 'root'
})
export class SportApiService {

  private apiUrl = 'http://localhost:8080/api/sports';

  constructor(private http: HttpClient) { }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.apiUrl);
  }
}
