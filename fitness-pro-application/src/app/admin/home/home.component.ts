import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DietPlanService } from 'src/app/services/diet-plan.service';
import { FooditemsService } from 'src/app/services/fooditems.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gdata:any;
  searchText:any;
  constructor(private cs:FooditemsService, private dietPlanService: DietPlanService,private matSnackBar: MatSnackBar ){
   
    this.getProducts()
  }

  removeItem(id: any){
    this.dietPlanService.removeDietPlan(id).subscribe(res =>{
      this.matSnackBar.open(`Item removed from the cart`,'Ok',{duration: 3000});
      this.getProducts()

    });}

    getProducts(){
      this.cs.getProducts().subscribe((res)=>{
        this.gdata = res;
      })
    }
}