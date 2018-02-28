import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../data-table/user-model';


@Injectable()
export class DataTableServiceService {
  private dataTableUrl = ' https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.dataTableUrl);

  }

}
