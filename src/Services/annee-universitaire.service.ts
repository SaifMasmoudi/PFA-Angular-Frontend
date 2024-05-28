import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';

@Injectable({
  providedIn: 'root'
})
export class AnneeUniversitaireService {

  private apiUrl = 'http://localhost:8000/api/annee_universitaires';

  constructor(private http: HttpClient) { }

  getAnneeUniversitaires(): Observable<AnneeUniversitaire[]> {
    return this.http.get<AnneeUniversitaire[]>(this.apiUrl);
  }

  getAnneeUniversitaire(nom_annee: string): Observable<AnneeUniversitaire> {
    return this.http.get<AnneeUniversitaire>(`${this.apiUrl}/${nom_annee}`);
  }

  addAnneeUniversitaire(annee: AnneeUniversitaire): Observable<AnneeUniversitaire> {
    return this.http.post<AnneeUniversitaire>(this.apiUrl, annee);
  }

  updateAnneeUniversitaire(nom_annee: string, annee: AnneeUniversitaire): Observable<AnneeUniversitaire> {
    return this.http.put<AnneeUniversitaire>(`${this.apiUrl}/${nom_annee}`, annee);
  }

  deleteAnneeUniversitaire(nom_annee: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${nom_annee}`);
  }


}
