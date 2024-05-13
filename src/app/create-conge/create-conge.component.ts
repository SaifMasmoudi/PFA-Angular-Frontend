import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/Modeles/Conge';
import { Enseignant } from 'src/Modeles/Enseignant';
import { CongeService } from 'src/Services/conge.service';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-create-conge',
  templateUrl: './create-conge.component.html',
  styleUrls: ['./create-conge.component.css']
})
export class CreateCongeComponent {
  conge: Conge = {
    type_conge: '',
    date_debut: '',
    date_fin: '',
    id_enseignant: 0
  };
  enseignants: Enseignant[] = [];
  constructor(
    private congeService: CongeService,
    private enseignantService: EnseignantService,

    private router: Router
  ) { this.getAllEnseignants();}





  getAllEnseignants(): void {
    this.enseignantService.getAllEnseignants().subscribe(
      (data) => {
        this.enseignants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants', error);
      }
    );
  }
  createConge():void {
    this.congeService.createConge(this.conge).subscribe(
      (data) => {
        this.router.navigate(['/conges']);
      },
      (error) => {
        console.error('Erreur lors de la création du congé :', error);
      }
    );
  }
  

}
