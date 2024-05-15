import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from 'src/Modeles/Salle';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent {
  salleToEdit: Salle | null = null;
  form!: FormGroup; // Déclarez la propriété form comme un FormGroup

  constructor(
    private salleService: SalleService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder // Injectez le FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm(); // Appelez la méthode pour initialiser le formulaire
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getSalle(+id);
    }
  }

  initializeForm(): void {
    // Initialisez le formulaire avec FormBuilder
    this.form = this.formBuilder.group({
      num_salle: ['', Validators.required], // Ajoutez les champs de formulaire requis ici
      capacite: ['', Validators.required]
    });
  }

  getSalle(id: number): void {
    this.salleService.getSalleById(id).subscribe(salle => {
      this.salleToEdit = { ...salle };
      // Mettez à jour les valeurs du formulaire avec les valeurs de salleToEdit
      this.form.patchValue({
        num_salle: this.salleToEdit.num_salle,
        capacite: this.salleToEdit.capacite
      });
    });
  }

  updateSalle(): void {
    if (this.form.valid && this.salleToEdit) { // Vérifiez si le formulaire est valide avant de mettre à jour
      const updatedSalle: Salle = {
        id: this.salleToEdit.id,
        num_salle: this.form.value.num_salle,
        capacite: this.form.value.capacite
      };
      this.salleService.updateSalle(updatedSalle.id!, updatedSalle).subscribe(() => {
        this.router.navigate(['/salle']);
      });
    }
  }
}