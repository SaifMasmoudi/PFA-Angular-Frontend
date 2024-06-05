import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeUniversitaire } from 'src/Modeles/AnneeUniversitaire';
import { ChargeHoraire } from 'src/Modeles/ChargeHoraire';
import { Emploi } from 'src/Modeles/Emploi';
import { Enseignant } from 'src/Modeles/Enseignant';
import { Groupe } from 'src/Modeles/Groupe';
import { Horaire } from 'src/Modeles/Horaire';
import { Jour } from 'src/Modeles/Jour';
import { Matiere } from 'src/Modeles/Matiere';
import { Salle } from 'src/Modeles/Salle';
import { AnneeUniversitaireService } from 'src/Services/annee-universitaire.service';
import { ChargeHoraireService } from 'src/Services/charge-horaire.service';
import { EmploiService } from 'src/Services/emploi.service';
import { EnseignantService } from 'src/Services/enseignant.service';
import { GroupeService } from 'src/Services/groupe.service';
import { HoraireService } from 'src/Services/horaire.service';
import { JourService } from 'src/Services/jour.service';
import { MatiereService } from 'src/Services/matiere.service';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {
  newEmploi: Emploi = this.initializeNewEmploi();
  jours: Jour[] = [];
  horaires: Horaire[] = [];
  salles: Salle[] = [];
  chargesHoraires: ChargeHoraire[] = [];
  anneesUniversitaires: AnneeUniversitaire[] = [];
  enseignants: Enseignant[] = [];
  matieres: Matiere[] = [];
  groupes: Groupe[] = [];
  emploiTable: any[][] = [];
  emplois: Emploi[] = [];
  selectedGroup: number | null = null;
  selectedEnseignant: number | null = null; // Ajouter cette ligne
  

  constructor(
    // Inject necessary services
    private emploiService: EmploiService,
    private jourService: JourService,
    private horaireService: HoraireService,
    private salleService: SalleService,
    private chargeHoraireService: ChargeHoraireService,
    private anneeUniversitaireService: AnneeUniversitaireService,
    private enseignantService: EnseignantService,
    private matiereService: MatiereService,
    private groupeService: GroupeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSalles();
    this.loadChargesHoraires();
    this.loadAnneesUniversitaires();
    this.loadEnseignants();
    this.loadMatieres();
    this.loadGroupes();
    this.loadData();
  }

  displayedColumns: string[] = ['jour', 'heure', 'salle', 'annee', 'enseignant', 'matiere', 'groupe', 'actions'];

  initializeNewEmploi(): Emploi {
    return {
      id: 0,
      id_jour: 0,
      id_heure: 0,
      id_salle: 0,
      id_annee: "",
      id_charge_horaire: 0
    };
  }


  loadEmploiForEnseignant(): void {
    if (this.selectedEnseignant) {
      this.emploiService.getEmploisByEnseignant(this.selectedEnseignant).subscribe(
        (data: Emploi[]) => {
          this.emplois = data;
          this.generateEmploiTable();
        },
        error => console.error('Error loading emplois for enseignant', error)
      );
    }
  }
  // Other methods remain the same...
  generateEmploiTable(): void {
    this.emploiTable = this.jours.map(() => this.horaires.map(() => null));
    this.emplois.forEach(emploi => {
      const jourIndex = this.jours.findIndex(j => j.id === emploi.id_jour);
      const heureIndex = this.horaires.findIndex(h => h.id === emploi.id_heure);
      if (jourIndex !== -1 && heureIndex !== -1) {
        this.emploiTable[jourIndex][heureIndex] = emploi;
      }
    });
  }















  loadGroupes(): void {
    this.groupeService.getAllGroupes().subscribe(
      (data: Groupe[]) => this.groupes = data,
      error => console.error('Error loading groupes', error)
    );
  }

  loadJours(): void {
    this.jourService.getAllJours().subscribe(
      (data: Jour[]) => this.jours = data,
      error => console.error('Error loading jours', error)
    );
  }

  loadHoraires(): void {
    this.horaireService.getAllHoraires().subscribe(
      (data: Horaire[]) => this.horaires = data,
      error => console.error('Error loading horaires', error)
    );
  }

  loadSalles(): void {
    this.salleService.getAllSalles().subscribe(
      (data: Salle[]) => this.salles = data,
      error => console.error('Error loading salles', error)
    );
  }

  loadChargesHoraires(): void {
    this.chargeHoraireService.getAllChargeHoraires().subscribe(
      (data: any) => {
        this.chargesHoraires = data.map((item: any) => item.chargeHoraire);
        console.log('Charges Horaires loaded:', this.chargesHoraires);
      },
      error => console.error('Error loading charges horaires', error)
    );
  }

  loadAnneesUniversitaires(): void {
    this.anneeUniversitaireService.getAnneeUniversitaires().subscribe(
      (data: AnneeUniversitaire[]) => this.anneesUniversitaires = data,
      error => console.error('Error loading annees universitaires', error)
    );
  }

  loadEnseignants(): void {
    this.enseignantService.getAllEnseignants().subscribe(
      (data: Enseignant[]) => {
        this.enseignants = data;
        console.log('Enseignants loaded:', this.enseignants);
      },
      error => console.error('Error loading enseignants', error)
    );
  }

  loadMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(
      (data: Matiere[]) => {
        this.matieres = data;
        console.log('Matieres loaded:', this.matieres);
      },
      error => console.error('Error loading matieres', error)
    );
  }

  loadEmplois(): void {
    this.emploiService.getEmplois().subscribe(
      (data: Emploi[]) => this.emplois = data,
      error => console.error('Error loading emplois', error)
    );
  }

  getEnseignantName(idEnseignant: number): string {
    const enseignant = this.enseignants.find(e => e.id === idEnseignant);
    return enseignant ? `${enseignant.nom_enseignant} ${enseignant.prenom_enseignant}` : '';
  }

  getMatiereLabel(idMatiere: number): string {
    const matiere = this.matieres.find(m => m.id === idMatiere);
    return matiere ? matiere.nom_matiere : '';
  }

  getGroupName(idGroupe: number): string {
    const groupe = this.groupes.find(g => g.id === idGroupe);
    return groupe ? groupe.nom_groupe : '';
  }

  addEmploi(): void {
    this.emploiService.addEmploi(this.newEmploi).subscribe(
      (data: Emploi) => {
        // Ajouter le nouvel emploi au tableau si l'ajout réussit
        this.newEmploi = this.initializeNewEmploi(); // Réinitialiser les champs du formulaire après l'ajout
        this.loadEmplois(); // Recharger les emplois après l'ajout
        console.log('EMPLOI AJOUTÉ!');
      },
      error => {
        console.error('Une erreur s\'est produite lors de l\'ajout de l\'emploi :', error);
      }
    );
  }

  getJourName(idJour: number): string {
    const jour = this.jours.find(j => j.id === idJour);
    return jour ? jour.nom : '';
  }

  getHeureLabel(idHeure: number): string {
    const horaire = this.horaires.find(h => h.id === idHeure);
    return horaire ? horaire.heure : '';
  }

  getSalleNumber(idSalle: number): string {
    const salle = this.salles.find(s => s.id === idSalle);
    return salle ? salle.num_salle : '';
  }

  getAnneeLabel(idAnnee: string): string {
    const annee = this.anneesUniversitaires.find(a => a.nom_annee === idAnnee);
    return annee ? annee.nom_annee : '';
  }

  getEnseignantNameFromChargeHoraire(idChargeHoraire: number): string {
    const chargeHoraire = this.chargesHoraires.find(ch => ch.id === idChargeHoraire);
    return chargeHoraire ? this.getEnseignantName(chargeHoraire.id_enseignant) : '';
  }

  getMatiereLabelFromChargeHoraire(idChargeHoraire: number): string {
    const chargeHoraire = this.chargesHoraires.find(ch => ch.id === idChargeHoraire);
    return chargeHoraire ? this.getMatiereLabel(chargeHoraire.id_niveau_matiere) : '';
  }

  getGroupNameFromChargeHoraire(idChargeHoraire: number): string {
    const chargeHoraire = this.chargesHoraires.find(ch => ch.id === idChargeHoraire);
    return chargeHoraire ? this.getGroupName(chargeHoraire.id_niveau_matiere) : '';
  }

  loadData(): void {
    this.jourService.getAllJours().subscribe((jours: Jour[]) => {
      this.jours = jours;
      this.horaireService.getAllHoraires().subscribe((horaires: Horaire[]) => {
        this.horaires = horaires;
        this.emploiService.getEmplois().subscribe((emplois: Emploi[]) => {
          this.emplois = emplois;
          this.generateEmploiTable();
        });
      });
    });
  }

  

 
  printEmploi(): void {
    const printContents = document.getElementById('emploiTable')?.innerHTML;
    const originalContents = document.body.innerHTML;
  
    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    } else {
      console.error('No content to print!');
    }
  }

}
