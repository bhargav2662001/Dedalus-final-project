import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  forums:any;

com:any;
  
  
  constructor(public fs:FormService){
  
      this.getForum();
 
   }

   getForum(){
    this.fs.getForum().subscribe({
  
      next:(data:any)=>this.forums = data,
     
      error:()=>this.forums=[]
     
      })
   }


   onPost(){
  
  let obj ={ "usernmae":sessionStorage.getItem("username"),
  
  "comment":this.com
 }
   this.fs.postForum(obj).subscribe({
  
   next:()=>alert("successfully Posted"),
  
   error:()=>alert("Error on posting")
  
   })
  
   window.location.reload()
  
   }
}
