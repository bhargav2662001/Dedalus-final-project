import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-mac-content',
  templateUrl: './mac-content.component.html',
  styleUrls: ['./mac-content.component.css']
})
export class MacContentComponent {
  maccontent:any;
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
  this.fs.getmacbyID(this.id).subscribe({
    next: (data:any) => this.maccontent= data,
    error: () => this.maccontent = []
  })
}

}
