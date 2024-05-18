import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conge } from 'src/Modeles/Conge';
import { Enseignant } from 'src/Modeles/Enseignant';
import { CongeService } from 'src/Services/conge.service';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-create-conge',
  templateUrl: './create-conge.component.html',
  styleUrls: ['./create-conge.component.css']
})
export class CreateCongeComponent {
  congeForm!: FormGroup;
  enseignants: Enseignant[] = [];
  typesConge: string[] = ['Congé annuel', 'Congé de maladie', 'Congé de maternité', 'Congé de paternité'];

  constructor(
    private congeService: CongeService,
    private enseignantService: EnseignantService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initForm();
    this.getAllEnseignants();
  }

  initForm(): void {
    this.congeForm = this.formBuilder.group({
      type_conge: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      id_enseignant: ['', Validators.required]
    });
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

  createConge(): void {
    if (this.congeForm.valid) {
      const conge: Conge = {
        type_conge: this.congeForm.value.type_conge,
        date_debut: this.congeForm.value.date_debut,
        date_fin: this.congeForm.value.date_fin,
        id_enseignant: this.congeForm.value.id_enseignant
      };

      this.congeService.createConge(conge).subscribe(
        (data) => {
          this.router.navigate(['/conges']);
        },
        (error) => {
          console.error('Erreur lors de la création du congé :', error);
        }
      );
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
    
  

}