import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jour } from 'src/Modeles/Jour';
import { JourService } from 'src/Services/jour.service';

@Component({
  selector: 'app-edit-jour',
  templateUrl: './edit-jour.component.html',
  styleUrls: ['./edit-jour.component.css']
})
export class EditJourComponent implements OnInit {
  jourToEdit: Jour | null = null;
  form!: FormGroup;

  constructor(
    private jourService: JourService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getJourById(+id);
    }
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required]
    });
  }

  getJourById(id: number): void {
    this.jourService.getJourById(id).subscribe(jour => {
      this.jourToEdit = { ...jour };
      this.form.patchValue({
        nom: this.jourToEdit.nom
      });
    });
  }

  updateJour(): void {
    if (this.form.valid && this.jourToEdit) {
      const updatedJour: Jour = {
        id: this.jourToEdit.id,
        nom: this.form.value.nom
      };
      this.jourService.updateJour(updatedJour.id!, updatedJour).subscribe(() => {
        this.router.navigate(['/jours']);
      });
    }
  }
}
