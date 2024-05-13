import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';

@Injectable({
  providedIn: 'root'
})
export class ChargeHoraireService {

  private apiUrl = 'http://localhost:8000/api/charge_horaires';

  constructor(private http: HttpClient) { }

  getAllChargeHoraires(): Observable<ChargeHoraire[]> {
    return this.http.get<ChargeHoraire[]>(this.apiUrl);
  }

  getChargeHoraireById(id: number): Observable<ChargeHoraire> {
    return this.http.get<ChargeHoraire>(`${this.apiUrl}/${id}`);
  }

  createChargeHoraire(chargeHoraire: ChargeHoraire): Observable<ChargeHoraire> {
    return this.http.post<ChargeHoraire>(this.apiUrl, chargeHoraire);
  }

  updateChargeHoraire(id: number, chargeHoraire: ChargeHoraire): Observable<ChargeHoraire> {
    return this.http.put<ChargeHoraire>(`${this.apiUrl}/${id}`, chargeHoraire);
  }

  deleteChargeHoraire(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getChargeHorairesByNiveauMatiereId(idNiveauMatiere: number): Observable<ChargeHoraire[]> {
    return this.http.get<ChargeHoraire[]>(`${this.apiUrl}/res/${idNiveauMatiere}`);
  }

  getChargeHorairesByEnseignantId(idEnseignant: number): Observable<ChargeHoraire[]> {
    return this.http.get<ChargeHoraire[]>(`${this.apiUrl}/res/${idEnseignant}`);
  }
}
