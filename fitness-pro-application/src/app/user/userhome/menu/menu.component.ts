import { Component } from '@angular/core';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  searchText: any;
  types = [
    'All',
    'Dairy products',
    'Fats, Oils, Shortenings',
    'Meat, Poultry',
    'Fish, Seafood',
    'fruits'
  ];
  selected = 'All';

  names: any;

  constructor(ns: NutritionService) {
    ns.getPro().subscribe({
      next: (data: any) => (this.names = data),
      error: () => (this.names = []),
    });
  }
}
