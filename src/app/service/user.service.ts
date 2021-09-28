import { Injectable } from '@angular/core';
import { Product } from  '../user';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../Interface/user';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { StorageMap } from '@ngx-pwa/local-storage';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected localStorage: LocalStorage,private storage: StorageMap){

  }

  getUsers(){
      let users = JSON.parse(localStorage.getItem('user')!)
      return users
    // let users  =  this.storage.get('user').subscribe((user:any) => {
    //   return user
    //  });
    // let users 
    // this.storage.get('user').subscribe((user:any) => {
    //   console.log(user)
    //   users = user
    // })
    // console.log(users)
    // return users;
  }

  addUser(newuser:any):Observable<User>{ 
    let users 
    users = JSON.parse(localStorage.getItem('user')!)
     newuser.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     users.push(newuser);
     localStorage.setItem('user',JSON.stringify(users))
     this.storage.set('user',users).subscribe((users:any) => {
    });
     return users
  }

  deleteUser(id:any):Observable<User>{
    let users = JSON.parse(localStorage.getItem('user')!);
    for(let i = 0; i <users.length; i++) {
     if(users[i].id == id) {
       users.splice(i, 1);
     }

  }
  localStorage.setItem('user',JSON.stringify(users))
  this.storage.set('user',users).subscribe((users:any) => {
 });
     return users
  }

    updateUser(oldUser:any, newUser:any):Observable<User>{  
      
      let users = JSON.parse(localStorage.getItem('user')!);

    for(let i = 0; i <users.length; i++) {
     if(users[i].id == oldUser.id) {
       users[i] = newUser;
     }
  }
  localStorage.setItem('user',JSON.stringify(users))
  this.storage.set('user',users).subscribe((users:any) => {
 });
     return users
    }


}
