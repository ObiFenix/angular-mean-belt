import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component ({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.scss']
})

export class AddReviewComponent implements OnInit {

  title: 'MnJRestaurant';
  resName: any;
  review: any;
  restaurant: any;
  errors: any;

  constructor (
    private _route: ActivatedRoute,
    private _http: HttpService,
    private _router: Router
  ) {}

  ngOnInit () {
    this.review = { customer: '', content: '', stars: 1, _restaurantId: this._route.snapshot.params['id'] };
    this.errors = { customer: false, content: false, stars: false, _restaurantId: false };
    this._route.params.subscribe((params: Params) => this.getRestaurant(params.id));
  }

  getRestaurant(id: String) {
    const observable = this._http.getRestaurant(id);
    observable.subscribe(doc => {
      // console.log(doc);
      const data = doc['item'];
      this.restaurant = {
          _id     : data['_id'],
          name    : data['name'],
          cuisine : data['cuisine'],
      };
      this.resName = this.restaurant.name;
      console.log('restaurant: ', this.restaurant);
    });
  }

  onAddReview (event: any) {
    event.preventDefault();
    console.log("=================||BEFORE: ", this.review);
    const observable = this._http.addReview(this.review, this._route.snapshot.params['id']);
    console.log("=================||AFTER:  ", this.review);

    observable.subscribe(doc => {
      if (doc['errors']) { this.errors = doc['errors']; }
      else               { this._router.navigate([`/restaurants/${this.restaurant._id}`]); }
    });
  }

  onCancel () {
    this._router.navigate(['/restaurants', this.restaurant._id]);
  }
}
