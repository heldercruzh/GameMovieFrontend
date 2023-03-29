import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserVoModel } from 'src/app/pages/user-register/shared/models/user.vo.model';
import { environment } from '../../../environments/environment';
import { UserDtoModel } from '../models/user.dto.model';

const headers = new HttpHeaders().append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { 
  }

  public insert(user: UserVoModel): Observable<UserDtoModel> {        
    return this.http.post<UserDtoModel>(environment.apiMovie+'/user', user,{headers});
  }

  public update(user: UserVoModel): Observable<UserDtoModel> {
    return this.http.put<UserDtoModel>(environment.apiMovie+'/user', user,{headers});
  }

  public findById(id: number): Observable<UserDtoModel> {
    
    const params = new HttpParams()
    .append('id',id)
    
    return this.http.get<UserDtoModel>(environment.apiMovie+'/user/', {headers, params});

  }

}
