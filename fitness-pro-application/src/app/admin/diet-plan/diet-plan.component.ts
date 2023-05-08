import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DietPlanService } from 'src/app/services/diet-plan.service';
import { products } from '../home/products';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent implements OnInit {

  model: products = new products();

  constructor(private dietPlanService: DietPlanService ,
    private matSnackBar: MatSnackBar,
    private route: Router) { }

  ngOnInit() {
  }

  onSubmit(data:any){
    this.dietPlanService.addDietPlan(this.model).subscribe(res=>{
      this.matSnackBar.open("Diet Plan Added Successfully","Ok",{duration: 3000});
      this.route.navigate(['home'])
;    })
  }

  
  }