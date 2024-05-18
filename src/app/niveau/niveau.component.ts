import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauService } from 'src/Services/niveau.service';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {
  niveaux: Niveau[] = [];
  displayedColumns: string[] = ['1', '2', '3'];

  constructor(private niveauService: NiveauService, private router: Router) { }

  ngOnInit(): void {
    this.getAllNiveaux();
  }

  getAllNiveaux(): void {
    this.niveauService.getAllNiveau().subscribe(niveaux => this.niveaux = niveaux);
  }

  deleteNiveau(id: number): void {
    this.niveauService.deleteNiveau(id).subscribe(() => {
      this.niveaux = this.niveaux.filter(niveau => niveau.id !== id);
    });
  }

  editNiveau(niveau: Niveau): void {
    this.router.navigate(['/edit-niveau', niveau.id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}