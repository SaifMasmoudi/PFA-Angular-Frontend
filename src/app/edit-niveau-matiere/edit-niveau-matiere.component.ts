import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { MatiereService } from 'src/Services/matiere.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-edit-niveau-matiere',
  templateUrl: './edit-niveau-matiere.component.html',
  styleUrls: ['./edit-niveau-matiere.component.css']
})
export class EditNiveauMatiereComponent {
  niveauMatiereToEdit: NiveauMatiere | null = null;
  niveaux: Niveau[] = [];
  matieres: Matiere[] = [];
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private niveauMatiereService: NiveauMatiereService,
    private niveauService: NiveauService,
    private matiereService: MatiereService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getNiveauMatiereToEdit();
    this.getAllNiveaux();
    this.getAllMatieres();
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      id_niveau: ['', Validators.required],
      id_matiere: ['', Validators.required]
    });
  }

  getNiveauMatiereToEdit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.niveauMatiereService.getNiveauMatiereById(+id).subscribe(niveauMatiere => {
        this.niveauMatiereToEdit = niveauMatiere;
        this.form.patchValue({
          id_niveau: niveauMatiere.id_niveau,
          id_matiere: niveauMatiere.id_matiere
        });
      });
    }
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(matieres => this.matieres = matieres);
  }

  updateNiveauMatiere(): void {
    if (this.niveauMatiereToEdit && this.form.valid) {
      const idNiveau: number = this.form.value.id_niveau;
      const idMatiere: number = this.form.value.id_matiere;
  
      // Mettre à jour les valeurs du niveau-matière avec les nouvelles valeurs
      this.niveauMatiereToEdit.id_niveau = idNiveau;
      this.niveauMatiereToEdit.id_matiere = idMatiere;
  
      // Appeler le service pour mettre à jour le niveau-matière
      this.niveauMatiereService.updateNiveauMatiere(this.niveauMatiereToEdit.id!, this.niveauMatiereToEdit).subscribe(() => {
        this.router.navigate(['/niveau-matieres']);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}