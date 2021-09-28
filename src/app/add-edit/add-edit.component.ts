import { UserService } from './../service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})


/**
* AddEditComponent program implements an application that
* user data can be added, edited, deleted in localStorage
*
* @author  amanpandey
* @version 1.0
* @since   2021-09-27
*/


export class AddEditComponent implements OnInit {

  user: any = {};
  curUser:any
  id:number=0
  submitted = false;
  form:FormGroup
  userlist:any

  constructor(private userService: UserService , private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    console.log(this.route.snapshot.params)
    if(this.route.snapshot.params){
      this.selectUser(this.route.snapshot.params)
    }
  }


  
  get formControl() {
    return this.form.controls;
  }

 async selectUser(user: any) {
   
  this.user = user;
  this.id = user['id'];
  console.log(this.id)

}

newUser() {
  this.user = {};
}

createUser() {
  this.submitted = true;
  if (this.form.valid) {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.form.value);
    this.userService.addUser(this.form.getRawValue())
    this.router.navigate(['/users']);
  }
}



async updateUser(f: any) {
    
  this.userlist = await this.userService.getUsers()

  console.log(this.userlist)
   for(let i=0;i<this.userlist.length;i++){
      
    console.log(this.userlist)
     if(this.id == this.userlist[i].id){
    
      this.curUser = this.userlist[i]
     }
   }
  f.value.id = this.user['id']
  console.log(this.curUser)
  console.log(f.value.id)
  this.userService.updateUser(this.curUser,f.value)
  this.router.navigate(['/users']);

}
}
