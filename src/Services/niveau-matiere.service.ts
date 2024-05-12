import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';

@Injectable({
  providedIn: 'root'
})
export class NiveauMatiereService {

  private apiUrl = 'http://localhost:8000/api/niveau_matieres';

  constructor(private http: HttpClient) { }

  getAllNiveauMatieres(): Observable<NiveauMatiere[]> {
    return this.http.get<NiveauMatiere[]>(this.apiUrl);
  }

  getNiveauMatiereById(id: number): Observable<NiveauMatiere> {
    return this.http.get<NiveauMatiere>(`${this.apiUrl}/${id}`);
  }

  createNiveauMatiere(niveauMatiere: NiveauMatiere): Observable<NiveauMatiere> {
    return this.http.post<NiveauMatiere>(this.apiUrl, niveauMatiere);
  }

  updateNiveauMatiere(id: number, niveauMatiere: NiveauMatiere): Observable<NiveauMatiere> {
    return this.http.put<NiveauMatiere>(`${this.apiUrl}/${id}`, niveauMatiere);
  }

  deleteNiveauMatiere(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getNiveauMatieresByNiveau(idNiveau: number): Observable<NiveauMatiere[]> {
    return this.http.get<NiveauMatiere[]>(`${this.apiUrl}/res/${idNiveau}`);
  }

  getNiveauMatieresByMatiere(idMatiere: number): Observable<NiveauMatiere[]> {
    return this.http.get<NiveauMatiere[]>(`${this.apiUrl}/res/${idMatiere}`);
  }
}
