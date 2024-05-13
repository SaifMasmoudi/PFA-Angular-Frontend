import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from 'src/Modeles/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private apiUrl = 'http://localhost:8000/api/enseignants';

  constructor(private http: HttpClient) {}

  getAllEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiUrl);
  }

  getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.apiUrl}/${id}`);
  }

  createEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.apiUrl, enseignant);
  }

  updateEnseignant(id: number, enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.apiUrl}/${id}`, enseignant);
  }

  deleteEnseignant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
