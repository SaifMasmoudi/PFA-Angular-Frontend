import { Component } from '@angular/core';
import { Enseignant } from 'src/Modeles/Enseignant';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  enseignants: Enseignant[] = [];

  constructor(private enseignantService: EnseignantService) {}

  ngOnInit(): void {
    this.getAllEnseignants();
  }

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

  deleteEnseignant(id: number): void {
    if (id !== undefined) {
      this.enseignantService.deleteEnseignant(id).subscribe(
        () => {
          this.enseignants = this.enseignants.filter((e) => e.id !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'enseignant', error);
        }
      );
    }
  }
  
}
