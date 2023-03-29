import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginVoModel } from 'src/app/shared/models/login.vo.model';
import { UserDtoModel } from 'src/app/shared/models/user.dto.model';

const headers = new HttpHeaders().append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: LoginVoModel): Observable<UserDtoModel> {
    return this.http.post<UserDtoModel>(environment.apiMovie+'/authorization', user,{ headers });
  }
 
}
