import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-iphone-content',
  templateUrl: './iphone-content.component.html',
  styleUrls: ['./iphone-content.component.css']
})
export class IphoneContentComponent {
  iphonecontent:any;
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
  this.fs.getiphonebyID(this.id).subscribe({
    next: (data:any) => this.iphonecontent= data,
    error: () => this.iphonecontent = []
  })
}

}

