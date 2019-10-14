import { Injectable } from '@angular/core';
import { SemDate } from "./modele/semDate";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SeminaryDatesService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private baseUrl = 'http://marcinmaniak.pythonanywhere.com'

  allSemDates(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/dates/')
  }

  getSemDate(id: number): Observable<SemDate> {
    return this.http.get<SemDate>(`${this.baseUrl}/api/dates/${id}/`)
  }

  addDate (ndate: SemDate): Observable<SemDate> {
    return this.http.post<SemDate>(this.baseUrl + '/api/dates/', ndate, this.httpOptions);
  }

   
}

