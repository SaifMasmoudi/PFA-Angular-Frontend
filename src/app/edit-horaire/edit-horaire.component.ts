import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Horaire } from 'src/Modeles/Horaire';
import { HoraireService } from 'src/Services/horaire.service';

@Component({
  selector: 'app-edit-horaire',
  templateUrl: './edit-horaire.component.html',
  styleUrls: ['./edit-horaire.component.css']
})
export class EditHoraireComponent implements OnInit {
  horaireToEdit: Horaire | null = null;
  form!: FormGroup;

  constructor(
    private horaireService: HoraireService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getHoraireById(+id);
    }
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      heure: ['', Validators.required]
    });
  }

  getHoraireById(id: number): void {
    this.horaireService.getHoraireById(id).subscribe(horaire => {
      this.horaireToEdit = { ...horaire };
      this.form.patchValue({
        heure: this.horaireToEdit.heure
      });
    });
  }

  updateHoraire(): void {
    if (this.form.valid && this.horaireToEdit) {
      const updatedHoraire: Horaire = {
        id: this.horaireToEdit.id,
        heure: this.form.value.heure
      };
      this.horaireService.updateHoraire(updatedHoraire.id!, updatedHoraire).subscribe(() => {
        this.router.navigate(['/horaires']);
      });
    }
  }
}
