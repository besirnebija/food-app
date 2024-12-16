import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'])
        //if params['searchTerm'] is not undefined
        this.foods = this.foodService.getAllFoodsBySearchterm(
          params['searchTerm']
        ); //filter the foods
      else if (params['tag'])
        //else if params['tag'] is not undefined
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else this.foods = this.foodService.getAll(); //get all foods
    });
  }
}
