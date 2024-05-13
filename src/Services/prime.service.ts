import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prime } from 'src/Modeles/Prime';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  private apiUrl = 'http://localhost:8000/api/primes';

  constructor(private http: HttpClient) {}

  getAllPrimes(): Observable<Prime[]> {
    return this.http.get<Prime[]>(this.apiUrl);
  }

  getPrimeById(id: number): Observable<Prime> {
    return this.http.get<Prime>(`${this.apiUrl}/${id}`);
  }

  createPrime(prime: Prime): Observable<Prime> {
    return this.http.post<Prime>(this.apiUrl, prime);
  }

  updatePrime(id: number, prime: Prime): Observable<Prime> {
    return this.http.put<Prime>(`${this.apiUrl}/${id}`, prime);
  }

  deletePrime(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getPrimesByEnseignantId(idEnseignant: number): Observable<Prime[]> {
    return this.http.get<Prime[]>(`${this.apiUrl}/ensg/${idEnseignant}`);
  }
}
