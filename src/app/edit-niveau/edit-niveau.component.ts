import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-edit-niveau',
  templateUrl: './edit-niveau.component.html',
  styleUrls: ['./edit-niveau.component.css']
})
export class EditNiveauComponent {
  niveauToEdit: Niveau | null = null;

  constructor(
    private niveauService: NiveauService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getNiveau(+id);
    }
  }

  getNiveau(id: number): void {
    this.niveauService.getNiveauById(id).subscribe(niveau => {
      this.niveauToEdit = { ...niveau };
    });
  }

  updateNiveau(): void {
    if (this.niveauToEdit) {
      this.niveauService.updateNiveau(this.niveauToEdit.id!, this.niveauToEdit).subscribe(() => {
        this.router.navigate(['/niveaux']);
      });
    }
  }
}
