import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { MatiereService } from 'src/Services/matiere.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-create-niveau-matiere',
  templateUrl: './create-niveau-matiere.component.html',
  styleUrls: ['./create-niveau-matiere.component.css']
})
export class CreateNiveauMatiereComponent {
  form!: FormGroup;
  niveaux: Niveau[] = [];
  matieres: Matiere[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private niveauMatiereService: NiveauMatiereService,
    private niveauService: NiveauService,
    private matiereService: MatiereService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getNiveaux();
    this.getMatieres();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      id_niveau: ['', Validators.required],
      id_matiere: ['', Validators.required]
    });
  }

  getNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  getMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(matieres => this.matieres = matieres);
  }

  createNiveauMatiere(): void {
    if (this.form.valid) {
      const idNiveau: number = this.form.value.id_niveau;
      const idMatiere: number = this.form.value.id_matiere;

      const niveauMatiere: NiveauMatiere = {
        id_niveau: idNiveau,
        id_matiere: idMatiere
      };

      this.niveauMatiereService.createNiveauMatiere(niveauMatiere).subscribe(() => {
        this.router.navigate(['/niveau-matieres']);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}