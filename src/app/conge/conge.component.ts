import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/Modeles/Conge';
import { Enseignant } from 'src/Modeles/Enseignant';
import { CongeService } from 'src/Services/conge.service';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  conges: Conge[] = [];
  enseignants: Enseignant[] = [];
  displayedColumns: string[] = ['6','1', '2', '3', '4', '5'];

  constructor(
    private congeService: CongeService,
    private enseignantService: EnseignantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getConges();
    this.getEnseignants();
  }

  getConges() {
    this.congeService.getAllConges().subscribe(
      (data) => {
        this.conges = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des congés :', error);
      }
    );
  }

  getEnseignants() {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }

  editConge(id: number) {
    this.router.navigate(['/edit-conge', id]);
  }

  deleteConge(id: number) {
    this.congeService.deleteConge(id).subscribe(
      () => {
        this.getConges();
      },
      (error) => {
        console.error('Erreur lors de la suppression du congé :', error);
      }
    );
  }

  getEnseignantName(idEnseignant: number): string {
    const enseignant = this.enseignants.find(e => e.id === idEnseignant);
    return enseignant ? `${enseignant.nom_enseignant} ${enseignant.prenom_enseignant}` : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}
