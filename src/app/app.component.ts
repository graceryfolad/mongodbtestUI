import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mongodbtest';
  users:any;  
  constructor(private userservice: UserService ){

  }

  ngOnInit(): void {
    this.userservice.GetAllUsers().subscribe(res=>{
       this.users= res;
    });
  }

  EditUser(userdet:any){

  }
  AddUser(){

  }
}
