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

  getAnnees(): Observable<AnneeUniversitaire[]> {
    return this.http.get<AnneeUniversitaire[]>(this.apiUrl);
  }

  getAnnee(id: number): Observable<AnneeUniversitaire> {
    return this.http.get<AnneeUniversitaire>(`${this.apiUrl}/${id}`);
  }

  createAnnee(annee: AnneeUniversitaire): Observable<AnneeUniversitaire> {
    return this.http.post<AnneeUniversitaire>(this.apiUrl, annee);
  }

  updateAnnee(id: number, annee: AnneeUniversitaire): Observable<AnneeUniversitaire> {
    return this.http.put<AnneeUniversitaire>(`${this.apiUrl}/${id}`, annee);
  }

  deleteAnnee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
