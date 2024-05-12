import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Niveau } from 'src/Modeles/Niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  
  private apiUrl = 'http://localhost:8000/api/niveaux'; 

  constructor(private http: HttpClient) { }

  getAllNiveau(): Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.apiUrl);
  }

  getNiveauById(id: number): Observable<Niveau> {
    return this.http.get<Niveau>(`${this.apiUrl}/${id}`);
  }

  createNiveau(niveau: Niveau): Observable<Niveau> {
    return this.http.post<Niveau>(this.apiUrl, niveau);
  }

  updateNiveau(id: number, niveau: Niveau): Observable<Niveau> {
    return this.http.put<Niveau>(`${this.apiUrl}/${id}`, niveau);
  }

  deleteNiveau(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
