import { Component, OnInit } from '@angular/core';
import { Restaurants } from './mock-restaurants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  formulario: FormGroup;
  constructor() { }

  restaurantsList: [] = Restaurants;
  

  ngOnInit(): void {
  }

}
