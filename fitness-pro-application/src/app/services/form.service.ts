import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  FormService(obj: { usernmae: string | null; comment: any; }) {
    throw new Error('Method not implemented.');
  }
  httpOptions: { headers: HttpHeaders; };

  constructor(public http: HttpClient) {
    this.httpOptions = {

    headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': "Bearer " + sessionStorage.getItem("token")
   })
  }
  }

getForum(): Observable<any> {


    return this.http.get(" http://localhost:4600/forum", this.httpOptions)



  }



  postForum(obj: any): Observable<any> {



    return this.http.post("http://localhost:4600/660/forum/", obj, this.httpOptions)



  }
}

