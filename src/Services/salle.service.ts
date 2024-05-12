import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from 'src/Modeles/Salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private apiUrl = 'http://localhost:8000/api/salles'; 

  constructor(private http: HttpClient) { }

  getAllSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl);
  }

  getSalleById(id: number): Observable<Salle> {
    return this.http.get<Salle>(`${this.apiUrl}/${id}`);
  }

  createSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(this.apiUrl, salle);
  }

  updateSalle(id: number, salle: Salle): Observable<Salle> {
    return this.http.put<Salle>(`${this.apiUrl}/${id}`, salle);
  }

  deleteSalle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
