import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/Modeles/Conge';
import { Enseignant } from 'src/Modeles/Enseignant';
import { CongeService } from 'src/Services/conge.service';
import { EnseignantService } from 'src/Services/enseignant.service';
@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrls: ['./edit-conge.component.css']
})
export class EditCongeComponent implements OnInit {
  conge: Conge = {
    id: 0,
    type_conge: '',
    date_debut: '',
    date_fin: '',
    id_enseignant: 0
  };

  constructor(
    private congeService: CongeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getCongeById(id);
  }

  getCongeById(id: number) {
    this.congeService.getCongeById(id).subscribe(
      (data) => {
        this.conge = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération du congé :', error);
      }
    );
  }

  updateConge() {
    this.congeService.updateConge(this.conge.id!, this.conge).subscribe(
      () => {
        this.router.navigate(['/conges']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du congé :', error);
      }
    );
  }
}
