import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
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
const routes: Routes = [
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  },
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
  {
    path:'salle',
    pathMatch:'full',
    component:SalleComponent
  },
  {
    path:'create-salle',
    pathMatch:'full',
    component:CreateSalleComponent
  },
  {
    path:'edit-salle/:id',
    pathMatch:'full',
    component:EditSalleComponent
  },
  {
    path:'members',
    pathMatch:'full',
    component:MemberComponent
  },
  {
    path:'create',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'members'

  },
  {
   path:':id/edit',
   pathMatch:"full",
   component: MemberFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
