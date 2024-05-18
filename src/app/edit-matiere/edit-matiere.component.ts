import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { MatiereService } from 'src/Services/matiere.service';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent {
  matiereToEdit: Matiere | null = null;
  form!: FormGroup;

  constructor(
    private matiereService: MatiereService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom_matiere: ['', Validators.required],
      description: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMatiere(+id);
    }
  }

  getMatiere(id: number): void {
    this.matiereService.getMatiereById(id).subscribe(matiere => {
      this.matiereToEdit = matiere;
      this.form.patchValue({
        nom_matiere: matiere.nom_matiere,
        description: matiere.description
      });
    });
  }

  updateMatiere(): void {
    if (this.form.valid && this.matiereToEdit) {
      const updatedMatiere: Matiere = { ...this.matiereToEdit, ...this.form.value };
      this.matiereService.updateMatiere(this.matiereToEdit.id!, updatedMatiere).subscribe(() => {
        this.router.navigate(['/matieres']);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}