import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-music-content',
  templateUrl: './music-content.component.html',
  styleUrls: ['./music-content.component.css']
})
export class MusicContentComponent {
  musiccontent:any;
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
  this.fs.getmusicbyID(this.id).subscribe({
    next: (data:any) => this.musiccontent= data,
    error: () => this.musiccontent = []
  })
}
}
