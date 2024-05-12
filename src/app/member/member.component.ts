import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {  MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];
constructor(private MS:MemberService,private dialog:MatDialog){}
dataSource=new MatTableDataSource(this.MS.tab)
delete(id:string):void
{  
  //1.lancer la boite 
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '200px',
    width: '300px',
  });
  //2. attendre le resultat de l'utilisateur
  dialogRef.afterClosed().subscribe(result => {
    if(result)
    this.MS.ONDELETE(id).subscribe(()=>{this.dataSource.data=this.MS.tab})
  });
  
 
  
 
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
} 
}

