import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emploi } from 'src/Modeles/Emploi';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  private apiUrl = 'http://localhost:8000/api/emplois';

  constructor(private http: HttpClient) {}

  getEmployis(): Observable<Emploi[]> {
    return this.http.get<Emploi[]>(this.apiUrl);
  }

  getEmployi(id: number): Observable<Emploi> {
    return this.http.get<Emploi>(`${this.apiUrl}/${id}`);
  }

  getEmploisBySalle(idSalle: number): Observable<Emploi[]> {
    return this.http.get<Emploi[]>(`${this.apiUrl}/emp/${idSalle}`);
  }

  getEmploisByAnnee(idAnnee: number): Observable<Emploi[]> {
    return this.http.get<Emploi[]>(`${this.apiUrl}/emp/${idAnnee}`);
  }

  createEmployi(emploi: Emploi): Observable<Emploi> {
    return this.http.post<Emploi>(this.apiUrl, emploi);
  }

  updateEmployi(id: number, emploi: Emploi): Observable<Emploi> {
    return this.http.put<Emploi>(`${this.apiUrl}/${id}`, emploi);
  }

  deleteEmployi(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
