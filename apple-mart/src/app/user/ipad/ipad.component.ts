import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-ipad',
  templateUrl: './ipad.component.html',
  styleUrls: ['./ipad.component.css']
})
export class IpadComponent {
  iPad:any;
  constructor(private fs:LogService)  {
    this.fs.getipad().subscribe(
       {
           next : (data:any)=> this.iPad =data
       }
    )
 }
}
