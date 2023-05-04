import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.css']
})
export class MacComponent {
  mac:any;
  constructor(private fs:LogService)  {
    this.fs.getmac().subscribe(
       {
           next : (data:any)=> this.mac =data
       }
    )
 }
}