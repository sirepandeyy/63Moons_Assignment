import { User } from './../Interface/user';
import { UserService } from './../service/user.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { map, tap } from 'rxjs/operators';
import { Product } from '../user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
/**
* UserComponent program implements an application that
* fetches all users data from local storage 
*
* @author  amanpandey
* @version 1.0
* @since   2021-09-27
*/

export class UserComponent implements OnInit {

  form:FormGroup
  filterValue: string;
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource: any;
  pageEvent: PageEvent
 

  @ViewChild(MatPaginator) paginator: MatPaginator

  users: MatTableDataSource<User>;
userlist:any

  constructor(private userService: UserService , private fb: FormBuilder) {
    
}

  ngOnInit() {

    if(localStorage.getItem('user') == null ){
      var data:any = []
      localStorage.setItem('user',JSON.stringify(data))
    }


    this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('user')!))

    setTimeout(() => {
      this.dataSource.paginator = this.paginator
    });

  }


  initDataSource() {

    this.dataSource = this.userService.getUsers()
    console.log(this.dataSource)
  }


  deleteUser(id: number) {

    this.userService.deleteUser(id)
  }

  

}



