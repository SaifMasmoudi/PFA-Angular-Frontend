import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { Emploi } from 'src/Modeles/Emploi';
import { Salle } from 'src/Modeles/Salle';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { EmploiService } from 'src/Services/emploi.service';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-edit-emploi',
  templateUrl: './edit-emploi.component.html',
  styleUrls: ['./edit-emploi.component.css']
})
export class EditEmploiComponent {
  emploiToEdit: Emploi | null = null;
  salles: Salle[] = [];
  annees: AnneeUniversitaire[] = [];
  jours: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emploiService: EmploiService,
    private salleService: SalleService,
    private anneeService: AnneeUniversitaireService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEmployi(+id);
      this.getAllSalles();
      this.getAllAnnees();
    }
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      jour: [''],
      heure_debut: [''],
      heure_fin: [''],
      id_salle: [''],
      id_annee: ['']
    });
  }

  getEmployi(id: number): void {
    this.emploiService.getEmployi(id).subscribe(emploi => {
      this.emploiToEdit = emploi;
      this.form.patchValue({
        jour: emploi.jour,
        heure_debut: emploi.heure_debut,
        heure_fin: emploi.heure_fin,
        id_salle: emploi.id_salle,
        id_annee: emploi.id_annee
      });
    });
  }

  getAllSalles(): void {
    this.salleService.getAllSalles().subscribe(salles => {
      this.salles = salles;
    });
  }

  getAllAnnees(): void {
    this.anneeService.getAllAnneeUniversitaires().subscribe(annees => {
      this.annees = annees;
    });
  }

  updateEmployi(): void {
    if (this.emploiToEdit && this.emploiToEdit.id) {
      const updatedEmployi: Emploi = {
        ...this.emploiToEdit,
        jour: this.form.value.jour,
        heure_debut: this.form.value.heure_debut,
        heure_fin: this.form.value.heure_fin,
        id_salle: this.form.value.id_salle,
        id_annee: this.form.value.id_annee
      };
      this.emploiService.updateEmployi(updatedEmployi.id!, updatedEmployi).subscribe(() => {
        this.router.navigate(['/emplois']);
      });
    }
  }
}
