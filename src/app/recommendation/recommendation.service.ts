import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  url = environment.APIUrl;

  httpOptions = {
    
  }

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer lfnl7CdyI6C+d2FZv/G9RxlP1as3YTa6RLJCygYKX+A1kkF9FpN2Xs2w7ypscAtCpMbSlBTCfuHBsRFmfS0i0g=='
  })


  
  
  constructor(
    private http: HttpClient
    ) {}
    
    

  postRating(){
    let body = {
      Inputs: {
        input1: {
          ColumnNames: [
            "Iduser",
            "Rating",
            "RestauranID",
            "date"
          ],
          Values: [
            [
              "1123",
              "4",
              "10032",
              "12/08/2020"
            ]
          ]
        }
      },
      GlobalParameters: {}
    }

    return this.http.post<any>(this.url, body, {headers: this.headers});
  }

}