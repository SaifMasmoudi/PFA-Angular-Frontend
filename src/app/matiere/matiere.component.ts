import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { MatiereService } from 'src/Services/matiere.service';
@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent {
  matieres: Matiere[] = [];

  constructor(
    private matiereService: MatiereService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllMatieres();
  }

  getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(matieres => this.matieres = matieres);
  }

  deleteMatiere(id: number): void {
    this.matiereService.deleteMatiere(id).subscribe(() => {
      this.matieres = this.matieres.filter(matiere => matiere.id !== id);
    });
  }

  editMatiere(matiere: Matiere): void {
    this.router.navigate(['/edit-matiere', matiere.id]);
  }
}
