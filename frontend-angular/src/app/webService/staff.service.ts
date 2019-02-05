import {Injectable }from '@angular/core'; 
import {HttpClient, HttpHeaders }from '@angular/common/http'

@Injectable( {
  providedIn:'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}


  getUsers() {
 
    let token = JSON.parse(localStorage.getItem('usertoken'));
    const headers = new HttpHeaders( {"x-auth-token":token})
    return this.http.get('http://localhost:3000/users/role/student',{headers:headers})
}

  updateUser(user) {
    let tmp = user; 
    tmp.status = 'sent'
    return this.http.patch(`http://localhost:3000/users/${tmp._id}`, tmp)
}

}

