import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from 'src/Modeles/Matiere';
import { MatiereService } from 'src/Services/matiere.service';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent {
  matiereToEdit: Matiere | null = null;

  constructor(
    private matiereService: MatiereService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMatiere(+id);
    }
  }

  getMatiere(id: number): void {
    this.matiereService.getMatiereById(id).subscribe(matiere => {
      this.matiereToEdit = { ...matiere };
    });
  }

  updateMatiere(): void {
    if (this.matiereToEdit) {
      this.matiereService.updateMatiere(this.matiereToEdit.id!, this.matiereToEdit).subscribe(() => {
        this.router.navigate(['/matieres']);
      });
    }
  }
}
