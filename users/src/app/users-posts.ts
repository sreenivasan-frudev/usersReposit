export interface UserData {
 id:number;
 email:string;
 first_name:string;
 last_name:string;
 avatar:string;
}
export interface supportDetails{
  url:string;
  text:string;
}
export interface pageDetails{
page:number;
per_page:number;
total:number;
total_pages:number;
data:UserData[];
support:supportDetails[];
}
export interface Person{
  data:UserData[];
  support:supportDetails[];
}
export interface personDetails{
persons:Person[];
}
