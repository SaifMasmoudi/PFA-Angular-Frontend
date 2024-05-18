import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;

  constructor(
    private primeService: PrimeService,
    private enseignantService: EnseignantService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.prime = {
      montant_prime: '',
      id_enseignant: 0
    };
    this.form = this.formBuilder.group({
      montant_prime: ['', Validators.required],
      id_enseignant: ['', Validators.required]
    });
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
        this.form.patchValue({
          montant_prime: this.prime.montant_prime,
          id_enseignant: this.prime.id_enseignant
        });
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
      this.primeService.updatePrime(+id, this.form.value).subscribe(
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