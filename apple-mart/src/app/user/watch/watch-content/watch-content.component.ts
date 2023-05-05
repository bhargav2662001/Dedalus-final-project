import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-watch-content',
  templateUrl: './watch-content.component.html',
  styleUrls: ['./watch-content.component.css']
})
export class WatchContentComponent {
  watchcontent:any;
  id:any;
  constructor(private fs:LogService, private ar:ActivatedRoute)  {
      this.ar.params.subscribe(
        {
        next: (params:{[x:string]:any;})=>{
          this.id = params['id']
          this.readData()
        },
        error:() => this.id = 0
        }
      )
}
readData(){
  this.fs.getiwatchbyID(this.id).subscribe({
    next: (data:any) => this.watchcontent= data,
    error: () => this.watchcontent = []
  })
}
}
