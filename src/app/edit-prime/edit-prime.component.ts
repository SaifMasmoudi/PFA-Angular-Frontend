import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { Prime } from 'src/Modeles/Prime';
import { EnseignantService } from 'src/Services/enseignant.service';
import { PrimeService } from 'src/Services/prime.service';

@Component({
  selector: 'app-edit-prime',
  templateUrl: './edit-prime.component.html',
  styleUrls: ['./edit-prime.component.css']
})
export class EditPrimeComponent {
  prime: Prime;
  enseignants: Enseignant[] = [];

  constructor(
    private primeService: PrimeService,
    private enseignantService: EnseignantService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.prime = {
      montant_prime: '',
      id_enseignant: 0
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPrime(+id);
      this.getAllEnseignants();
    }
  }

  getPrime(id: number): void {
    this.primeService.getPrimeById(id).subscribe(
      (data) => {
        this.prime = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la prime', error);
      }
    );
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

  updatePrime(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.primeService.updatePrime(+id, this.prime).subscribe(
        (data) => {
          this.router.navigate(['/primes']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la prime', error);
        }
      );
    }
  }
}
