import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horaire } from 'src/Modeles/Horaire';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {
  private apiUrl = 'http://localhost:8000/api/horaires';

  constructor(private http: HttpClient) { }

  getAllHoraires(): Observable<Horaire[]> {
    return this.http.get<Horaire[]>(this.apiUrl);
  }

  getHoraireById(id: number): Observable<Horaire> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Horaire>(url);
  }

  createHoraire(horaire: Horaire): Observable<Horaire> {
    return this.http.post<Horaire>(this.apiUrl, horaire);
  }

  updateHoraire(id: number, horaire: Horaire): Observable<Horaire> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Horaire>(url, horaire);
  }

  deleteHoraire(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
