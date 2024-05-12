import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MemberFormComponent } from './member-form/member-form.component';
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




@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
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
