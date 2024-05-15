import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Groupe } from 'src/Modeles/Groupe';
import { Niveau } from 'src/Modeles/Niveau';
import { GroupeService } from 'src/Services/groupe.service';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-create-groupe',
  templateUrl: './create-groupe.component.html',
  styleUrls: ['./create-groupe.component.css']
})
export class CreateGroupeComponent {
  niveaux: Niveau[] = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private groupeService: GroupeService,
    private niveauService: NiveauService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllNiveaux();
    this.initForm();
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      nom_groupe: ['', Validators.required],
      id_niveau: ['', Validators.required]
    });
  }

  createGroupe(): void {
    if (this.form.invalid) {
      return;
    }

    const { nom_groupe, id_niveau } = this.form.value;
    const nouveauGroupe: Groupe = { nom_groupe, id_niveau } as Groupe;
    
    this.groupeService.createGroupe(nouveauGroupe).subscribe(() => {
      this.router.navigate(['/groupes']);
    });
  }
}