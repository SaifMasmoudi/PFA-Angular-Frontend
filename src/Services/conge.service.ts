import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from 'src/Modeles/Conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private apiUrl = 'http://localhost:8000/api/conges';

  constructor(private http: HttpClient) {}

  getAllConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(this.apiUrl);
  }

  getCongeById(id: number): Observable<Conge> {
    return this.http.get<Conge>(`${this.apiUrl}/${id}`);
  }

  createConge(conge: Conge): Observable<Conge> {
    return this.http.post<Conge>(this.apiUrl, conge);
  }

  updateConge(id: number, conge: Conge): Observable<Conge> {
    return this.http.put<Conge>(`${this.apiUrl}/${id}`, conge);
  }

  deleteConge(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCongesByEnseignantId(idEnseignant: number): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiUrl}/ensg/${idEnseignant}`);
  }
}
