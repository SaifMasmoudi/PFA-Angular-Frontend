import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from 'src/Modeles/Examen';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'http://localhost:8000/api/examens';

  constructor(private http: HttpClient) { }

  getAllExamens(): Observable<Examen[]> {
    return this.http.get<Examen[]>(this.apiUrl);
  }

  getExamenById(id: number): Observable<Examen> {
    return this.http.get<Examen>(`${this.apiUrl}/${id}`);
  }

  createExamen(examen: Examen): Observable<Examen> {
    return this.http.post<Examen>(this.apiUrl, examen);
  }

  updateExamen(id: number, examen: Examen): Observable<Examen> {
    return this.http.put<Examen>(`${this.apiUrl}/${id}`, examen);
  }

  deleteExamen(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getExamensByCategoryId(idCategory: number): Observable<Examen[]> {
    return this.http.get<Examen[]>(`${this.apiUrl}/ex/${idCategory}`);
  }
}
