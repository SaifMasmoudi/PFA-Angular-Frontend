import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SalleComponent } from './salle/salle.component';
import { CreateSalleComponent } from './create-salle/create-salle.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { NiveauComponent } from './niveau/niveau.component';
import { CreateNiveauComponent } from './create-niveau/create-niveau.component';
import { EditNiveauComponent } from './edit-niveau/edit-niveau.component';
import { EditGroupeComponent } from './edit-groupe/edit-groupe.component';
import { CreateGroupeComponent } from './create-groupe/create-groupe.component';
import { GroupeComponent } from './groupe/groupe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { CreateMatiereComponent } from './create-matiere/create-matiere.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { NiveauMatiereComponent } from './niveau-matiere/niveau-matiere.component';
import { CreateNiveauMatiereComponent } from './create-niveau-matiere/create-niveau-matiere.component';
import { EditNiveauMatiereComponent } from './edit-niveau-matiere/edit-niveau-matiere.component';
import { ExamenComponent } from './examen/examen.component';
import { CreateExamenComponent } from './create-examen/create-examen.component';
import { EditExamenComponent } from './edit-examen/edit-examen.component';
import { CreateEnseignantComponent } from './create-enseignant/create-enseignant.component';
import { EditEnseignantComponent } from './edit-enseignant/edit-enseignant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { PrimeComponent } from './prime/prime.component';
import { CreatePrimeComponent } from './create-prime/create-prime.component';
import { EditPrimeComponent } from './edit-prime/edit-prime.component';
import { CongeComponent } from './conge/conge.component';
import { CreateCongeComponent } from './create-conge/create-conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { ChargeHoraireComponent } from './charge-horaire/charge-horaire.component';
import { CreateChargeHoraireComponent } from './create-charge-horaire/create-charge-horaire.component';
import { EditChargeHoraireComponent } from './edit-charge-horaire/edit-charge-horaire.component';
import { AnneeUniversitaireComponent } from './annee-universitaire/annee-universitaire.component';
import { CreateAnneeUniversitaireComponent } from './create-annee-universitaire/create-annee-universitaire.component';
import { EditAnneeUniversitaireComponent } from './edit-annee-universitaire/edit-annee-universitaire.component';
import { EmploiComponent } from './emploi/emploi.component';
import { CreateEmploiComponent } from './create-emploi/create-emploi.component';
import { EditEmploiComponent } from './edit-emploi/edit-emploi.component';
const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },

  { path: 'groupes', component: GroupeComponent },
  { path: 'create-groupe', component: CreateGroupeComponent },
  { path: 'edit-groupe/:id', component: EditGroupeComponent },

  { path: 'matieres', component: MatiereComponent },
  { path: 'create-matiere', component: CreateMatiereComponent },
  { path: 'edit-matiere/:id', component: EditMatiereComponent },

  { path: 'niveaux', component: NiveauComponent },
  { path: 'create-niveau', component: CreateNiveauComponent },
  { path: 'edit-niveau/:id', component: EditNiveauComponent },

  { path: 'niveau-matieres', component: NiveauMatiereComponent },
  { path: 'create-niveau-matiere', component: CreateNiveauMatiereComponent },
  { path: 'edit-niveau-matiere/:id', component: EditNiveauMatiereComponent },

  { path: 'examens', component: ExamenComponent },
  { path: 'create-examen', component: CreateExamenComponent },
  { path: 'edit-examen/:id', component: EditExamenComponent },

  { path: 'enseignants', component: EnseignantComponent },
  { path: 'create-enseignant', component: CreateEnseignantComponent },
  { path: 'edit-enseignant/:id', component: EditEnseignantComponent },

  { path: 'conges', component: CongeComponent },
  { path: 'create-conge', component: CreateCongeComponent },
  { path: 'edit-conge/:id', component: EditCongeComponent },

  { path: 'salle', pathMatch: 'full', component: SalleComponent },
  { path: 'create-salle', pathMatch: 'full', component: CreateSalleComponent },
  { path: 'edit-salle/:id', pathMatch: 'full', component: EditSalleComponent },

  { path: 'primes', component: PrimeComponent },
  { path: 'create-prime', component: CreatePrimeComponent },
  { path: 'edit-prime/:id', component: EditPrimeComponent },

  
  { path: 'charge-horaires', component: ChargeHoraireComponent },
  { path: 'create-charge-horaire', component: CreateChargeHoraireComponent },
  { path: 'edit-charge-horaire/:id', component: EditChargeHoraireComponent },

  { path: 'annee-universitaires', component: AnneeUniversitaireComponent },
  { path: 'create-annee-universitaire', component: CreateAnneeUniversitaireComponent },
  { path: 'edit-annee-universitaire/:id', component: EditAnneeUniversitaireComponent },


  { path: 'emplois', component: EmploiComponent },
  { path: 'emplois-create', component: CreateEmploiComponent },
  { path: 'edit-emplois/:id', component: EditEmploiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
