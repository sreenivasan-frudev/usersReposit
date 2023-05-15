import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserData } from '../users-posts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  constructor(private userService:UsersService){

  }
users:UserData[]=[];

ngOnInit(){
  this.getUsers();
  }
getUsers(){
  this.userService.getUser().subscribe(response=>{
    this.users=response.data;
  })
}
}
