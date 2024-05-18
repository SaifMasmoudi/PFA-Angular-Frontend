import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent {
  enseignant: Enseignant;
  form: FormGroup;

  constructor(
    private enseignantService: EnseignantService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.enseignant = {
      nom_enseignant: '',
      prenom_enseignant: '',
      num_tel: '',
      email: ''
    };

    this.form = this.formBuilder.group({
      nom_enseignant: ['', Validators.required],
      prenom_enseignant: ['', Validators.required],
      num_tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEnseignant(+id);
    }
  }

  getEnseignant(id: number): void {
    this.enseignantService.getEnseignantById(id).subscribe(
      (data) => {
        this.enseignant = data;
        // Mettre à jour les valeurs du formulaire
        this.form.patchValue({
          nom_enseignant: data.nom_enseignant,
          prenom_enseignant: data.prenom_enseignant,
          num_tel: data.num_tel,
          email: data.email
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'enseignant', error);
      }
    );
  }

  updateEnseignant(): void {
    if (this.form.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.enseignantService.updateEnseignant(+id, this.form.value).subscribe(
          (data) => {
            this.router.navigate(['/enseignants']);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de l\'enseignant', error);
          }
        );
      }
    }
  }
}