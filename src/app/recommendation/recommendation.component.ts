import { Component, OnInit } from '@angular/core';
import { Restaurants } from './mock-restaurants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Request } from './request';
import { RecommendationService } from './recommendation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  formulario: FormGroup;
  
  restaurantsList: [] = Restaurants;

  request = new Request();
  
  constructor(
    private _formBuilder: FormBuilder,
    private _recomendationService: RecommendationService
  ) { }

  // options = {
  //   "Inputs": {
  //     "input1": {
  //       "ColumnNames": [
  //         "Iduser",
  //         "Rating",
  //         "RestauranID",
  //         "date"
  //       ],
  //       "Values": [
  //         [
  //           this.request.Iduser,
  //           this.request.Rating,
  //           this.request.RestauranID,
  //           this.request.date
  //         ]
  //       ]
  //     }
  //   },
  //   "GlobalParameters": {}
  // }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      Iduser: ['', [Validators.required]],
      Rating: ['', [Validators.required]],
      RestauranID: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });

    
  }

  postRequest(){
    this._recomendationService.postRating()
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }





}
