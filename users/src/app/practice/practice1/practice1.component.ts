import { Observable,from,of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { FormClass } from 'src/app/form-class';


@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.scss']
})

export class Practice1Component implements OnInit {


  ngOnInit(){
   /* const observable$=new Observable((subscriber)=>{
      subscriber.next(32);
      subscriber.next("hello");
      subscriber.next('how are you');
      setTimeout(()=>{
        subscriber.next("this is a text inside timeout");
      },2000);
    });

    observable$.subscribe(x=>{
      console.log(x);
    });
*/

 /*
const observable1$=new Observable((subscriber)=>{
  subscriber.next(32);
  subscriber.next("hello");
  subscriber.next('how are you');
  setTimeout(()=>{
    subscriber.next("this is a text inside timeout1");
  },1000);
  setTimeout(()=>{
    subscriber.next("this is a text inside timeout2");
    subscriber.complete();
  },500);
});

console.log("this is before subscription");
observable1$.subscribe({
next(x){
console.log(x);
},error(err){
console.log("an error is occured:"+err);
},complete(){
console.log("completed");
}
 })
*/
/*
const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});
observable.subscribe(x=>{
  console.log(x);
});
*/
/*
var observable=new Observable(function subscribe(subscriber){
 try{
  subscriber.next("hi");
  subscriber.next('hello');
 }catch(err){
console.log("error occured:"+err)
 }
});
observable.subscribe(x=>{
  console.log(x);
})
*/
/*
const observable=from([23,45,34]);
observable.subscribe(x=>{
  console.log(x);
});
*/

}


logInForm:FormGroup;
logInModel:FormClass;


constructor(){
  this.logInForm=new FormGroup({});
  this.logInModel=new FormClass;
}


formField:FormlyFieldConfig[]= [
{
  fieldGroupClassName:'flex flex-column  gap-2',
      fieldGroup:[{
      className: 'col-12',
      key: 'name',
      type: 'input',
      wrappers:['custom_template'],

      props: {
        label: 'Full Name',
        placeholder: 'Enter full name',
        minLength: 3,
        required: true,
      },
    validation:{
      messages:{
        required:"this field is  required",
        minlength:"minimum three characters are needed"
      }
    },
    },
    {
      className: "col-12",
      key: 'email',
      type: 'input',
      wrappers:['custom_template'],
      templateOptions:{
        type:"email",
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validation:{
        messages:{
          required:"email is required",
        }
      },
      validators:{
        validation:['email']
      }
    },
    {
      className: "col-12",
      key: 'password',
      type: 'input',
      wrappers:['custom_template'],
      templateOptions:{
        label: 'password',
        placeholder: 'Enter password',
        required: true,
        type:"password",
        minLength:4,
      },
      validation:{
        messages:{
          required:"password is required",
          minLength:"password must be greater than 4 characters"
        }
      }
    },
    {
      className: "col-12",
      key: 'ratings',
      type: 'Rating',
      wrappers:['custom_template'],
      templateOptions:{
        label: 'Ratings',
      },
    },
    {
      className: "col-12",
      key: 'slider',
      type: 'slider',
      wrappers:['custom_template'],
      templateOptions:{
        label: 'Give us rating out of 100',
      },
    },
    {
      className: "col-12",
      key: 'toggle',
      type: 'toggle',
      wrappers:['custom_template'],
      templateOptions:{
        label: 'click here to confirm',
      },
    },
    {
      className: "col-12",
      key: 'SelectButton',
      type: 'selectButton',
      wrappers:['custom_template'],
      templateOptions:{
        label: 'select any one',
      },
    }]
  }]
  }


