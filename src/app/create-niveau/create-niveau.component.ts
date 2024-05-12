import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Niveau } from 'src/Modeles/Niveau';
import { NiveauService } from 'src/Services/niveau.service';
@Component({
  selector: 'app-create-niveau',
  templateUrl: './create-niveau.component.html',
  styleUrls: ['./create-niveau.component.css']
})
export class CreateNiveauComponent {
  constructor(private niveauService: NiveauService, private router: Router) { }

  createNiveau(nom_niveau: string): void {
    const nouveauNiveau: Niveau = { nom_niveau } as Niveau;
    this.niveauService.createNiveau(nouveauNiveau).subscribe(() => {
      this.router.navigate(['/niveaux']);
    });
  }
}
