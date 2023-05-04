import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  Watch:any;
  constructor(private fs:LogService)  {
    this.fs.getiwatch().subscribe(
       {
           next : (data:any)=> this.Watch =data
       }
    )
 }
}
