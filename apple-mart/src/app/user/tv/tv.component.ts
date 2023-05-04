import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  iTv:any;
  constructor(private fs:LogService)  {
    this.fs.getitv().subscribe(
       {
           next : (data:any)=> this.iTv =data
       }
    )
 }
}