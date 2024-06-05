import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emploi } from 'src/Modeles/Emploi';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  private apiUrl = 'http://localhost:8000/api/emplois';

  constructor(private http: HttpClient) { }

  getEmplois(): Observable<Emploi[]> {
    return this.http.get<Emploi[]>(this.apiUrl);
  }

  getEmploi(id: number): Observable<Emploi> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Emploi>(url);
  }

  addEmploi(emploi: Emploi): Observable<Emploi> {
    return this.http.post<Emploi>(this.apiUrl, emploi);
  }

  updateEmploi(id: number, emploi: Emploi): Observable<Emploi> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Emploi>(url, emploi);
  }

  deleteEmploi(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Additional methods for filtering
  getEmploisBySalle(idSalle: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/salle/${idSalle}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByAnnee(idAnnee: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/annee/${idAnnee}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByJour(idJour: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/jour/${idJour}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByHeure(idHeure: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/heure/${idHeure}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByChargeHoraire(idCharge: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/charge/${idCharge}`;
    return this.http.get<Emploi[]>(url);
  }
  getEmploisByEnseignant(idEnseignant: number): Observable<Emploi[]> {
    return this.http.get<Emploi[]>(`${this.apiUrl}/emplois/enseignant/${idEnseignant}`);
  }

}
