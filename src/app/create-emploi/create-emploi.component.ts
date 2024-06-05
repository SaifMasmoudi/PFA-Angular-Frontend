import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emploi } from 'src/Modeles/Emploi';
import { EmploiService } from 'src/Services/emploi.service';
import { JourService } from 'src/Services/jour.service';
import { HoraireService } from 'src/Services/horaire.service';
import { SalleService } from 'src/Services/salle.service';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { Jour } from 'src/Modeles/Jour';
import { Horaire } from 'src/Modeles/Horaire';
import { Salle } from 'src/Modeles/Salle';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';

@Component({
  selector: 'app-create-emploi',
  templateUrl: './create-emploi.component.html',
  styleUrls: ['./create-emploi.component.css']
})
export class CreateEmploiComponent {
 
}
