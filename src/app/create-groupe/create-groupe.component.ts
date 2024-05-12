import { Component } from '@angular/core';
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

  constructor(
    private groupeService: GroupeService,
    private niveauService: NiveauService,
    private router: Router
  ) {
    this.getAllNiveaux();
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  createGroupe(nom_groupe: string, id_niveau: string): void {
    const nouveauGroupe: Groupe = { nom_groupe, id_niveau: +id_niveau } as Groupe;
    this.groupeService.createGroupe(nouveauGroupe).subscribe(() => {
      this.router.navigate(['/groupes']);
    });
  }
}
