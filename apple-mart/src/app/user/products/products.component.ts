import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
names:any;
constructor(is:LogService){
  is.getipad().subscribe(
{
  next:(data:any)=>this.names=data,
  error:()=>this.names=[]
}
  )
  }
}

