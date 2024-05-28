import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/Modeles/Enseignant';
import { Prime } from 'src/Modeles/Prime';
import { EnseignantService } from 'src/Services/enseignant.service';
import { PrimeService } from 'src/Services/prime.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  primes: Prime[] = [];
  enseignants: Enseignant[] = [];
  displayedColumns: string[] = ['1', '2', '3','4'];

  constructor(
    private primeService: PrimeService,
    private enseignantService: EnseignantService,
    private router: Router, private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllPrimes();
    this.getAllEnseignants();
  }

  getAllPrimes(): void {
    this.primeService.getAllPrimes().subscribe(primes => this.primes = primes);
  }

  getAllEnseignants(): void {
    this.enseignantService.getAllEnseignants().subscribe(enseignants => this.enseignants = enseignants);
  }

  deletePrime(id: number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.primeService.deletePrime(id).subscribe(() => {
          this.primes = this.primes.filter(prime => prime.id !== id);
        });
      }
    });
   
  }

  editPrime(prime: Prime): void {
    this.router.navigate(['/edit-prime', prime.id]);
  }

  getEnseignantName(idEnseignant: number): string {
    const enseignant = this.enseignants.find(e => e.id === idEnseignant);
    return enseignant ? enseignant.nom_enseignant : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Apply your filtering logic here if needed
  }
}
