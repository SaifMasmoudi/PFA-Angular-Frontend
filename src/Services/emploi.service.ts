import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emploi } from 'src/Modeles/Emploi';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  private apiUrl = 'http://localhost:8000/api/emplois';

  constructor(private http: HttpClient) { }

  getAllEmplois(): Observable<Emploi[]> {
    return this.http.get<Emploi[]>(this.apiUrl);
  }

  getEmploiById(id: number): Observable<Emploi> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Emploi>(url);
  }

  createEmploi(emploi: Emploi): Observable<Emploi> {
    return this.http.post<Emploi>(this.apiUrl, emploi);
  }

  updateEmploi(id: number, emploi: Emploi): Observable<Emploi> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Emploi>(url, emploi);
  }

  deleteEmploi(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  getEmploisBySalle(idsalle: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/emp/${idsalle}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByAnnee(idannee: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/emp/${idannee}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByJour(idjour: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/emp/${idjour}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByHeure(idheure: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/emp/${idheure}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByChargeHoraire(idcharge: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/emp/${idcharge}`;
    return this.http.get<Emploi[]>(url);
  }
}
