import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) {

   }

  GetAllUsers():Observable<any>{
    var url = environment.APIURL + 'User/all';
        return this.http.get(url);
  }

  
//   AddUser(userdet : any): Observable<any>{
//     var url = environment.APIURL + 'User/adduser';
//     const editsch = {
    
//           schCode:schdet.SchCode,
//           schName: schdet.SchName,
//           schEmail: schdet.SchEmail,
//           schAddress: schdet.SchAddress,
//           schPhone: schdet.SchPhone
        
//     };
//     return this.http.post(url,editsch);
//   }
}
