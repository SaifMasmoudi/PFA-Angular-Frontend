import { Component } from '@angular/core';
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

  constructor(
    private groupeService: GroupeService,
    private niveauService: NiveauService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getGroupe(+id);
      this.getAllNiveaux();
    }
  }

  getGroupe(id: number): void {
    this.groupeService.getGroupeById(id).subscribe(groupe => {
      this.groupeToEdit = { ...groupe };
    });
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => {
      this.niveaux = niveaux;
    });
  }

  updateGroupe(): void {
    if (this.groupeToEdit) {
      this.groupeService.updateGroupe(this.groupeToEdit.id!, this.groupeToEdit).subscribe(() => {
        this.router.navigate(['/groupes']);
      });
    }
  }
}
