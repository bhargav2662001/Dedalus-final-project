import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  Music:any;
  constructor(private fs:LogService)  {
    this.fs.getmusic().subscribe(
       {
           next : (data:any)=> this.Music =data
       }
    )
 }
}