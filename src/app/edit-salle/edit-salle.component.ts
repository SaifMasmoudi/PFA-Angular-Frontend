import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from 'src/Modeles/Salle';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent {
  salleToEdit: Salle | null = null;

  constructor(
    private salleService: SalleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getSalle(+id);
    }
  }

  getSalle(id: number): void {
    this.salleService.getSalleById(id).subscribe(salle => {
      this.salleToEdit = { ...salle };
    });
  }

  updateSalle(): void {
    if (this.salleToEdit) {
      this.salleService.updateSalle(this.salleToEdit.id!, this.salleToEdit).subscribe(() => {
        this.router.navigate(['/salle']);
      });
    }
  }
}
