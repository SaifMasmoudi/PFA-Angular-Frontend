import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Groupe } from 'src/Modeles/Groupe';
import { Niveau } from 'src/Modeles/Niveau';
import { GroupeService } from 'src/Services/groupe.service';
import { NiveauService } from 'src/Services/niveau.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent {
  groupes: Groupe[] = [];
  niveaux: Niveau[] = [];

  constructor(
    private groupeService: GroupeService,
    private niveauService: NiveauService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllGroupes();
    this.getAllNiveaux();
  }

  getAllGroupes(): void {
    this.groupeService.getAllGroupes().subscribe(groupes => this.groupes = groupes);
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  deleteGroupe(id: number): void {
    this.groupeService.deleteGroupe(id).subscribe(() => {
      this.groupes = this.groupes.filter(groupe => groupe.id !== id);
    });
  }

  editGroupe(groupe: Groupe): void {
    this.router.navigate(['/edit-groupe', groupe.id]);
  }
  getNiveauName(idNiveau: number): string {
    const niveau = this.niveaux.find(n => n.id === idNiveau);
    return niveau ? niveau.nom_niveau : '';
  }
}
