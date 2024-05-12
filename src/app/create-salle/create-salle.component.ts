import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/Modeles/Salle';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-create-salle',
  templateUrl: './create-salle.component.html',
  styleUrls: ['./create-salle.component.css']
})
export class CreateSalleComponent {
  constructor(private salleService: SalleService, private router: Router) { }

  createSalle(num_salle: string, capacite: string): void {
    const nouvelleSalle: Salle = { num_salle, capacite } as Salle;
    this.salleService.createSalle(nouvelleSalle).subscribe(() => {
      this.router.navigate(['/salle']);
    });
  }
}
