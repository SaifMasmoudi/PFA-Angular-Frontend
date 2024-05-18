import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-edit-niveau',
  templateUrl: './edit-niveau.component.html',
  styleUrls: ['./edit-niveau.component.css']
})
export class EditNiveauComponent {
  form!: FormGroup;
  niveauId!: number;

  constructor(
    private niveauService: NiveauService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.niveauId = +this.route.snapshot.paramMap.get('id')!;

    this.form = this.formBuilder.group({
      nom_niveau: ['', Validators.required]
    });

    this.getNiveau(this.niveauId);
  }

  getNiveau(id: number): void {
    this.niveauService.getNiveauById(id).subscribe((niveau: Niveau) => {
      this.form.patchValue({
        nom_niveau: niveau.nom_niveau
      });
    });
  }

  updateNiveau(): void {
    if (this.form.valid) {
      const updatedNiveau: Niveau = {
        id: this.niveauId,
        nom_niveau: this.form.value.nom_niveau
      };
      this.niveauService.updateNiveau(this.niveauId, updatedNiveau).subscribe(() => {
        this.router.navigate(['/niveaux']);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}