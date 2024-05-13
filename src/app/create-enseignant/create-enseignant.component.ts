import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.css']
})
export class CreateEnseignantComponent {
  enseignant: Enseignant = {
    nom_enseignant: '',
    prenom_enseignant: '',
    num_tel: '',
    email: ''
  };

  constructor(
    private enseignantService: EnseignantService,
    private router: Router
  ) {}

  createEnseignant(): void {
    this.enseignantService.createEnseignant(this.enseignant).subscribe(
      (data) => {
        this.router.navigate(['/enseignants']);
      },
      (error) => {
        console.error('Erreur lors de la création de l\'enseignant', error);
      }
    );
  }
}
