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

  getAllAnneeUniversitaires(): Observable<AnneeUniversitaire[]> {
    return this.http.get<AnneeUniversitaire[]>(this.apiUrl);
  }

  getAnneeUniversitaireById(id: number): Observable<AnneeUniversitaire> {
    return this.http.get<AnneeUniversitaire>(`${this.apiUrl}/${id}`);
  }

  createAnneeUniversitaire(anneeUniversitaire: AnneeUniversitaire): Observable<AnneeUniversitaire> {
    return this.http.post<AnneeUniversitaire>(this.apiUrl, anneeUniversitaire);
  }

  updateAnneeUniversitaire(id: number, anneeUniversitaire: AnneeUniversitaire): Observable<AnneeUniversitaire> {
    return this.http.put<AnneeUniversitaire>(`${this.apiUrl}/${id}`, anneeUniversitaire);
  }

  deleteAnneeUniversitaire(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAnneeUniversitaireByChargeHoraireId(idChargeHoraire: number): Observable<AnneeUniversitaire[]> {
    return this.http.get<AnneeUniversitaire[]>(`${this.apiUrl}/annee/${idChargeHoraire}`);
  }
}
