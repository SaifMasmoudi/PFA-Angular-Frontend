import { Component } from '@angular/core';
import { Matiere } from 'src/Modeles/Matiere';
import { MatiereService } from 'src/Services/matiere.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-matiere',
  templateUrl: './create-matiere.component.html',
  styleUrls: ['./create-matiere.component.css']
})
export class CreateMatiereComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matiereService: MatiereService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom_matiere: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createMatiere(): void {
    if (this.form.valid) {
      const nouvelleMatiere: Matiere = this.form.value as Matiere;
      this.matiereService.createMatiere(nouvelleMatiere).subscribe(() => {
        this.router.navigate(['/matieres']);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}