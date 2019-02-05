import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable( {
    providedIn:'root'
  })

  export class StudentAuthService {

    constructor(private http:HttpClient) {}
  
  
    authStudent(data) {
    // localStorage.setItem('usertoken' , JSON.stringify(data.usertoken));
   
      return this.http.post('http://localhost:3000/student/auth',data)
  }
  
//     updateUser(user) {
//       let tmp = user; 
//       tmp.status = 'sent'
//       return this.http.patch(`http://localhost:3000/users/${tmp._id}`, tmp)
//   }
  
  }
  