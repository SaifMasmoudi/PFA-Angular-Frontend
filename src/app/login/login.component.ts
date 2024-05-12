import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AUTH:AuthService,private router:Router){}
  SIGNIN():void{
    this.AUTH.doGoogleLogin().then(()=>{
      this.router.navigate(['/members'])
    })
  }
  }
