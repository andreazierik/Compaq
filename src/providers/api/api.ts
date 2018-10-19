import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private baseApiPath = "https://api.github.com/users";

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getPerfil(){
    return this.http.get(this.baseApiPath + `/andreazierik`);
  }

  getRepos(){
    return this.http.get(this.baseApiPath + `/andreazierik/repos`);
  }

}
