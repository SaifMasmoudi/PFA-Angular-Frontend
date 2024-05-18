import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-create-niveau',
  templateUrl: './create-niveau.component.html',
  styleUrls: ['./create-niveau.component.css']
})
export class CreateNiveauComponent {
  form!: FormGroup;

  constructor(
    private niveauService: NiveauService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      Nom_niveau: ['', Validators.required],
    });
  }

  createNiveau(): void {
    if (this.form.valid) {
      const nouveauNiveau: Niveau = { nom_niveau: this.form.value.Nom_niveau } as Niveau;
      this.niveauService.createNiveau(nouveauNiveau).subscribe(() => {
        this.router.navigate(['/niveaux']);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}