import { Component, OnInit } from '@angular/core';
import { Restaurants } from './mock-restaurants';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  constructor() { }

  restaurantsList: [] = Restaurants;

  ngOnInit(): void {
  }

}
