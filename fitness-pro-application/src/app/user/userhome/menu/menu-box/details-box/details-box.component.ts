import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-details-box',
  templateUrl: './details-box.component.html',
  styleUrls: ['./details-box.component.css'],
})
export class DetailsBoxComponent {
  id: any;

  details: any;

  constructor(private ds: NutritionService, private ar: ActivatedRoute) {
    this.ar.params.subscribe({
      next: (params) => {
        this.id = params['id'];

        this.readdata();
      },

      error: () => (this.id = 0),
    });
  }

  readdata() {
    this.ds.getDetails(this.id).subscribe({
      next: (data: any) => (this.details = data),

      error: () => (this.details = {}),
    });
  }
}
