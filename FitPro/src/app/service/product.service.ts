import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class ProductsService {
 constructor(private http:HttpClient) { } 
public getvegetables(): Observable<any> {

return this.http.get("http://localhost:4500/Category/vegetables");

 }

public getfruits(): Observable<any> {

return this.http.get("http://localhost:4500/Category/fruits");

}

public getfish(): Observable<any> {

 return this.http.get("http://localhost:4500/Category/fish");

 }

 public getmeat(): Observable<any> {

 return this.http.get("http://localhost:4500/Category/meat");

 }

 public getnuts(): Observable<any> {

return this.http.get("http://localhost:4500/Category/nuts");
 }




}