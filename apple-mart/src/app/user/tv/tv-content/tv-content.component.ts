import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-tv-content',
  templateUrl: './tv-content.component.html',
  styleUrls: ['./tv-content.component.css']
})
export class TvContentComponent {
  tvcontent:any;
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
  this.fs.getitvbyID(this.id).subscribe({
    next: (data:any) => this.tvcontent= data,
    error: () => this.tvcontent = []
  })
}
}
