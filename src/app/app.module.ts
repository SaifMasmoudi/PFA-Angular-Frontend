import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { FirebaseModule } from './Firebase.module (2)';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SalleComponent } from './salle/salle.component';
import { CreateSalleComponent } from './create-salle/create-salle.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { NiveauComponent } from './niveau/niveau.component';
import { CreateNiveauComponent } from './create-niveau/create-niveau.component';
import { EditNiveauComponent } from './edit-niveau/edit-niveau.component';
import { GroupeComponent } from './groupe/groupe.component';
import { EditGroupeComponent } from './edit-groupe/edit-groupe.component';
import { CreateGroupeComponent } from './create-groupe/create-groupe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { CreateMatiereComponent } from './create-matiere/create-matiere.component';
import { CreateNiveauMatiereComponent } from './create-niveau-matiere/create-niveau-matiere.component';
import { EditNiveauMatiereComponent } from './edit-niveau-matiere/edit-niveau-matiere.component';
import { NiveauMatiereComponent } from './niveau-matiere/niveau-matiere.component';
import { ExamenComponent } from './examen/examen.component';
import { CreateExamenComponent } from './create-examen/create-examen.component';
import { EditExamenComponent } from './edit-examen/edit-examen.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EditEnseignantComponent } from './edit-enseignant/edit-enseignant.component';
import { CreateEnseignantComponent } from './create-enseignant/create-enseignant.component';
import { PrimeComponent } from './prime/prime.component';
import { CreatePrimeComponent } from './create-prime/create-prime.component';
import { EditPrimeComponent } from './edit-prime/edit-prime.component';
import { CongeComponent } from './conge/conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { CreateCongeComponent } from './create-conge/create-conge.component';
import { ChargeHoraireComponent } from './charge-horaire/charge-horaire.component';
import { CreateChargeHoraireComponent } from './create-charge-horaire/create-charge-horaire.component';
import { EditChargeHoraireComponent } from './edit-charge-horaire/edit-charge-horaire.component';
import { AnneeUniversitaireComponent } from './annee-universitaire/annee-universitaire.component';
import { EditAnneeUniversitaireComponent } from './edit-annee-universitaire/edit-annee-universitaire.component';
import { CreateAnneeUniversitaireComponent } from './create-annee-universitaire/create-annee-universitaire.component';




@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    LoginComponent,
    SalleComponent,
    CreateSalleComponent,
    EditSalleComponent,
    NiveauComponent,
    CreateNiveauComponent,
    EditNiveauComponent,
    GroupeComponent,
    EditGroupeComponent,
    CreateGroupeComponent,
    MatiereComponent,
    EditMatiereComponent,
    CreateMatiereComponent,
    CreateNiveauMatiereComponent,
    EditNiveauMatiereComponent,
    NiveauMatiereComponent,
    ExamenComponent,
    CreateExamenComponent,
    EditExamenComponent,
    EnseignantComponent,
    EditEnseignantComponent,
    CreateEnseignantComponent,
    PrimeComponent,
    CreatePrimeComponent,
    EditPrimeComponent,
    CongeComponent,
    EditCongeComponent,
    CreateCongeComponent,
    ChargeHoraireComponent,
    CreateChargeHoraireComponent,
    EditChargeHoraireComponent,
    AnneeUniversitaireComponent,
    EditAnneeUniversitaireComponent,
    CreateAnneeUniversitaireComponent,
    
  ],
  imports: [ MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
     MatToolbarModule,
     MatListModule,
     MatMenuModule,
     FirebaseModule,
     
     MatCardModule,
     MatPaginatorModule,
     MatDatepickerModule,
     MatNativeDateModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
