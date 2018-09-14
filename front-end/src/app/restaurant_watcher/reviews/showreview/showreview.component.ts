import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-showreview',
  templateUrl: './showreview.component.html',
  styleUrls: ['./showreview.component.scss']
})


export class ShowReviewComponent implements OnInit {

  title: 'MnJRestaurant';
  restaurant: Object;
  restaurant_id: any;
  stars_title: string;
  errors: any;
  reviews: any;
  check: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpServ: HttpService) { }

  ngOnInit () {
    this.check = false;
    this.reviews = [];
    this.restaurant = {}; console.log(this.restaurant_id);
    this.getReviews();
    this._route.params.subscribe((params: Params) => this.getRestaurant(params.id));
  }

  goHome () {
    this._router.navigate(['/restaurants']);
  }

  getReviews () {
    const observable = this._httpServ.getReviews(this._route.snapshot.params['id']);
    observable.subscribe((doc: Object) => {
      console.log(doc['erros']);
      console.log(doc['reviews']);

      if (doc['errors']) { this.errors = doc['errors']; }
      else               { this.reviews = doc['reviews']; }
    });
  }

  getRestaurant(id: String) {
    const observable = this._httpServ.getRestaurant(id);
    observable.subscribe(doc => {
      const data = doc['item'];
      this.restaurant = {
          _id     : data['_id'],
          name    : data['name'],
          cuisine : data['cuisine'],
      };
      console.log('restaurant: ', this.restaurant);
    });
  }
}
