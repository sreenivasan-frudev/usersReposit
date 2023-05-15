import { Observable,from,of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

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
}
