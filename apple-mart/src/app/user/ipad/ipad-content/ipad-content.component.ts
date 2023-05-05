import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-ipad-content',
  templateUrl: './ipad-content.component.html',
  styleUrls: ['./ipad-content.component.css']
})
export class IpadContentComponent {
  iPadcontent:any;
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
  this.fs.getipadbyID(this.id).subscribe({
    next: (data:any) => this.iPadcontent= data,
    error: () => this.iPadcontent = []
  })
}

}

