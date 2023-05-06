import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IPhoneComponent {
  iphone:any;
  constructor(private fs:LogService)  {
    this.fs.getiphone().subscribe(
       {
           next : (data:any)=> this.iphone =data
       }
    )
 }

 AddtoCart(){
  
 }
}
