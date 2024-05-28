import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jour } from 'src/Modeles/Jour';

@Injectable({
  providedIn: 'root'
})
export class JourService {

  private apiUrl = 'http://localhost:8000/api/jours';

  constructor(private http: HttpClient) { }

  getAllJours(): Observable<Jour[]> {
    return this.http.get<Jour[]>(this.apiUrl);
  }

  getJourById(id: number): Observable<Jour> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Jour>(url);
  }

  createJour(jour: Jour): Observable<Jour> {
    return this.http.post<Jour>(this.apiUrl, jour);
  }

  updateJour(id: number, jour: Jour): Observable<Jour> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Jour>(url, jour);
  }

  deleteJour(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
