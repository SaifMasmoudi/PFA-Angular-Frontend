import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  user!:any
  constructor(private LOG:AuthService,private router:Router){
    this.LOG.getUserClaims().then((u)=>{
      this.user=u;
     if(!!this.user) console.log(this.user.displayName);

    })
  }
  LOGOUT():void{
    this.LOG. doLogout().then(()=>{
      this.router.navigate(['/login'])
    })
  }

}
