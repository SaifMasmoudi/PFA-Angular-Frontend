import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { EnseignantService } from 'src/Services/enseignant.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent {
  enseignant: Enseignant;

  constructor(
    private enseignantService: EnseignantService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.enseignant = {
      nom_enseignant: '',
      prenom_enseignant: '',
      num_tel: '',
      email: ''
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEnseignant(+id);
    }
  }

  getEnseignant(id: number): void {
    this.enseignantService.getEnseignantById(id).subscribe(
      (data) => {
        this.enseignant = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'enseignant', error);
      }
    );
  }

  updateEnseignant(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.enseignantService.updateEnseignant(+id, this.enseignant).subscribe(
        (data) => {
          this.router.navigate(['/enseignants']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'enseignant', error);
        }
      );
    }
  }
}
