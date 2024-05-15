import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salle } from 'src/Modeles/Salle';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-create-salle',
  templateUrl: './create-salle.component.html',
  styleUrls: ['./create-salle.component.css']
})
export class CreateSalleComponent {
  form: FormGroup; 

  constructor(
    private formBuilder: FormBuilder, 
    private salleService: SalleService, 
    private router: Router
  ) { 
      this.form = this.formBuilder.group({ 
      num_salle: ['', Validators.required], 
      capacite: ['', Validators.required]
    });
  }

  createSalle(): void {
    if (this.form.invalid) { 
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouvelleSalle: Salle = { 
      num_salle: this.form.value.num_salle, 
      capacite: this.form.value.capacite 
    };

    this.salleService.createSalle(nouvelleSalle).subscribe(() => {
      this.router.navigate(['/salle']);
    }, (error) => {
      console.error("Une erreur s'est produite lors de la création de la salle :", error);
      alert("Une erreur s'est produite lors de la création de la salle. Veuillez réessayer plus tard.");
    });
  }
}