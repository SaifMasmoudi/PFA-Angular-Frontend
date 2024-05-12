import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/Modeles/Salle';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent  implements OnInit{
  salles: Salle[] = [];

  constructor(private salleService: SalleService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSalles();
  }

  getAllSalles(): void {
    this.salleService.getAllSalles().subscribe(salles => this.salles = salles);
  }

  deleteSalle(id: number): void {
    this.salleService.deleteSalle(id).subscribe(() => {
      this.salles = this.salles.filter(salle => salle.id !== id);
    });
  }

  editSalle(salle: Salle): void {
    this.router.navigate(['/edit-salle', salle.id]);
  }
}