import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Examen } from 'src/Modeles/Examen';
import { NiveauMatiere } from 'src/Modeles/NiveauMatiere';
import { ExamenService } from 'src/Services/examen.service';
import { NiveauMatiereService } from 'src/Services/niveau-matiere.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  examens: Examen[] = [];
  niveauMatieres: NiveauMatiere[] = [];
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];

  constructor(
    private examenService: ExamenService,
    private niveauMatiereService: NiveauMatiereService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getExamens();
    this.getNiveauMatieres();
  }

  getExamens() {
    this.examenService.getAllExamens().subscribe(
      (data) => {
        this.examens = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des examens :', error);
      }
    );
  }

  getNiveauMatieres() {
    this.niveauMatiereService.getAllNiveauMatieres().subscribe(
      (data) => {
        this.niveauMatieres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des niveaux/matières :', error);
      }
    );
  }

  editExamen(id: number) {
    this.router.navigate(['/edit-examen', id]);
  }

  deleteExamen(id: number) {
    this.examenService.deleteExamen(id).subscribe(
      () => {
        this.getExamens();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'examen :', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}
