import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pageDetails} from './users-posts';

import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUser():Observable<pageDetails>{
    return this.http.get<pageDetails>("https://reqres.in/api/users");
  }

}
