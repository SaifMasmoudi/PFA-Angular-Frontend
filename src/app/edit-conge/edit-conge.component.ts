import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/Modeles/Conge';
import { Enseignant } from 'src/Modeles/Enseignant';
import { CongeService } from 'src/Services/conge.service';
import { EnseignantService } from 'src/Services/enseignant.service';
@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrls: ['./edit-conge.component.css']
})
export class EditCongeComponent implements OnInit {
  
  conge: Conge = {
    id: 0,
    type_conge: '',
    date_debut: '',
    date_fin: '',
    id_enseignant: 0
  };

  enseignants: Enseignant[] = [];
  congeForm!: FormGroup;
  typeConge: string[] = ['Congé annuel', 'Congé de maladie', 'Congé de maternité', 'Congé de paternité']; // Liste des types de congé
  defaultTypeConge: string = 'Congé de maladie'; // Type de congé par défaut

  constructor(
    private congeService: CongeService,
    private enseignantService: EnseignantService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getCongeById(id);
    this.initForm();
    this.getAllEnseignants();
  }
  compareTypes(type1: string, type2: string): boolean {
    return type1 && type2 ? type1 === type2 : type1 === this.defaultTypeConge;
  }

  initForm() {
    this.congeForm = this.formBuilder.group({
      type_conge: [this.conge.type_conge, Validators.required],
      date_debut: [this.conge.date_debut, Validators.required],
      date_fin: [this.conge.date_fin, Validators.required],
      id_enseignant: [this.conge.id_enseignant, Validators.required]
    });
  }

  getCongeById(id: number) {
    this.congeService.getCongeById(id).subscribe(
      (data) => {
        this.conge = data;
        // Mise à jour des valeurs du formulaire lors de la récupération du congé
        this.congeForm.patchValue({
          type_conge: this.conge.type_conge,
          date_debut: this.conge.date_debut,
          date_fin: this.conge.date_fin,
          id_enseignant: this.conge.id_enseignant
        });
        // Mise à jour du type de congé par défaut
        this.defaultTypeConge = this.conge.type_conge;
      },
      (error) => {
        console.error('Erreur lors de la récupération du congé :', error);
      }
    );
  }

  getAllEnseignants() {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }

  updateConge() {
    if (this.congeForm.valid) {
      const updatedConge = this.congeForm.value;
      this.congeService.updateConge(this.conge.id!, updatedConge).subscribe(
        () => {
          this.router.navigate(['/conges']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du congé :', error);
        }
      );
    }
  }
}