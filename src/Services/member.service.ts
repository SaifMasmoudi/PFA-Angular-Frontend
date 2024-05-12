import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab:any[]=GLOBAL.DB.members;
  constructor(private httpClient:HttpClient) { }
  ONSAVE(memberToSave:any):Observable<any>
  {
         //return this.httpClient.post('127.0.01.8080/api/Member',memberToSave)
         const member1={
          ...memberToSave,
          id: Math.ceil(Math.random()*1000),
          createdDate:new Date ().toString
         }
         this.tab.push(member1);
         return new Observable(observer=>observer.next())
  }
ONDELETE(id:string):Observable<any>
{
    //return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
    this.tab=this.tab.filter(item=>item.id!=id)
    return new Observable(observer=>observer.next())
  
}
getMemberById(id :string):Observable<Member>{
 // return this.httpClient.get<Member>('127.0.0.1:8080/api/Member/$('id')
 return new Observable(observer=>observer.next(
  this.tab.filter(item=>item.id==id)[0] ?? null
))}
updateMember(idcourant:string,form:any):Observable<any>
{
  //return this.httpClient.put('linktorestAPI',form);
  const index= this.tab.findIndex(item=>item.id==idcourant);
  this.tab[index]={
    id:idcourant,
    ...form,
    createdDate:new Date().toISOString()
  }
  return new Observable(observer=>observer.next());
}
getAll():Observable<Member[]>
{
   return this.httpClient.get<Member[]>
   ('http://localhost:3000/members')
}
}
