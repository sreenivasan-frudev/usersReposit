import { Person } from './../users-posts';

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../users-posts';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{
  person!:UserData;
  personData:any;
  personId!:any;
  constructor(private activatedRoute:ActivatedRoute, private userService:UsersService){
  }

  ngOnInit(){
this.personId=this.activatedRoute.snapshot.paramMap.get('id');
 this.userService.getUser().subscribe(data=>{
this.personData=data.data.find(x=>x.id==this.personId);
if(this.personData!==undefined){
  this.person=this.personData ;
  }
 });
  }


}
