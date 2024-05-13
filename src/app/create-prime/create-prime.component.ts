import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { Prime } from 'src/Modeles/Prime';
import { EnseignantService } from 'src/Services/enseignant.service';
import { PrimeService } from 'src/Services/prime.service';

@Component({
  selector: 'app-create-prime',
  templateUrl: './create-prime.component.html',
  styleUrls: ['./create-prime.component.css']
})
export class CreatePrimeComponent {
  prime: Prime = {
    montant_prime: '',
    id_enseignant: 0
  };
  enseignants: Enseignant[] = [];

  constructor(
    private primeService: PrimeService,
    private enseignantService: EnseignantService,
    private router: Router
  ) {
    this.getAllEnseignants();
  }

  getAllEnseignants(): void {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants', error);
      }
    );
  }

  createPrime(): void {
    this.primeService.createPrime(this.prime).subscribe(
      (data) => {
        this.router.navigate(['/primes']);
      },
      (error) => {
        console.error('Erreur lors de la création de la prime', error);
      }
    );
  }
}
