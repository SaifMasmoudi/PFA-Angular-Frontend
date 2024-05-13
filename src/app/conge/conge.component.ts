import { Component } from '@angular/core';
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
export class CongeComponent {
  conges: Conge[] = [];

  constructor(
    private congeService: CongeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getConges();
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
}
