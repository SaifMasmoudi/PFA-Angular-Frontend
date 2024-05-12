import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/Services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modeles/Member';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  //injection de dependances
  constructor(private MS:MemberService, private router:Router, private activatedRoute:ActivatedRoute){}
  form!:FormGroup
  idcourant!:string
  onsub():void{
    if(!!this.idcourant)
    { 
      this.MS.updateMember(this.idcourant,this.form.value).subscribe(()=>{
        this.router.navigate(['/members'])
    })
  }
      else{
    
    //recuperation des données entres par user
    console.log(this.form.value);
    //appeler la fonction onSave(this.form.values)
    //du service MemberService
    const MemberToSave=this.form.value;
    this.MS.ONSAVE(MemberToSave).subscribe(()=>{
      this.router.navigate(['/members'])
     })

  }}
  ngOnInit():void{
    //1.recupérer id de l'url
    this.idcourant=this.activatedRoute.snapshot.params['id']
    //2. tester sur id
    if(!!this.idcourant)
    {
          this.MS.getMemberById(this.idcourant).subscribe((x)=>{
            this.initForm2(x);
          })
    }
    else this.initForm();
    //3. si id existe => {je suis dans edit }
                              // getMemberById(id)
                              //initForm2(m)
    //4. si non je suis dans create => initForm()


  }
  initForm():void
  {
    this.form=new FormGroup({
      cin:new FormControl(null,[Validators.required]) ,
      name: new FormControl(null,[Validators.required]) ,
      cv: new FormControl(null,[Validators.required]) ,
      type: new FormControl(null,[Validators.required]) ,
    })
  }
  initForm2(m:Member):void
  {
    this.form=new FormGroup({
      cin:new FormControl(m.cin,[Validators.required]) ,
      name: new FormControl(m.name,[Validators.required]) ,
      cv: new FormControl(m.cv,[Validators.required]) ,
      type: new FormControl(m.type,[Validators.required]) ,
    })
  }
}
