import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/Modeles/Groupe';
import { Niveau } from 'src/Modeles/Niveau';
import { GroupeService } from 'src/Services/groupe.service';
import { NiveauService } from 'src/Services/niveau.service';

@Component({
  selector: 'app-edit-groupe',
  templateUrl: './edit-groupe.component.html',
  styleUrls: ['./edit-groupe.component.css']
})
export class EditGroupeComponent {
  groupeToEdit: Groupe | null = null;
  niveaux: Niveau[] = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private groupeService: GroupeService,
    private niveauService: NiveauService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getGroupe(+id);
      this.getAllNiveaux();
    }
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      nom_groupe: [''],
      id_niveau: ['']
    });
  }

  getGroupe(id: number): void {
    this.groupeService.getGroupeById(id).subscribe(groupe => {
      this.groupeToEdit = groupe;
      this.form.patchValue({
        nom_groupe: groupe.nom_groupe,
        id_niveau: groupe.id_niveau
      });
    });
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => {
      this.niveaux = niveaux;
    });
  }

  updateGroupe(): void {
    if (this.groupeToEdit && this.groupeToEdit.id) {
      const updatedGroupe: Groupe = {
        ...this.groupeToEdit,
        nom_groupe: this.form.value.nom_groupe,
        id_niveau: this.form.value.id_niveau
      };
      this.groupeService.updateGroupe(updatedGroupe.id!, updatedGroupe).subscribe(() => {
        this.router.navigate(['/groupes']);
      });
    }
  }
  
  }