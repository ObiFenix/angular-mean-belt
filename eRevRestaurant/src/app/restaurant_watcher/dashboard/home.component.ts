import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: 'MnJRestaurant';
  spicehut_id: any;
  pappasbros_id: any;
  dbpit_id: any;
  mansionR_id: any;
  mapache_id: any;
  restaurants: Object;

  constructor(
    private _router: Router,
    private _httpServ: HttpService) { }

  ngOnInit() {
    this.getRestaurants ();
  }

  getRestaurants () {
    const observable = this._httpServ.getRestaurants();
    observable.subscribe(doc => {
      console.log(doc['items']);
      this.restaurants = doc['items'];
      // console.log(typeof(this.restaurants));
      for (let index in this.restaurants) {
        console.log(this.restaurants[index].name);
        if (this.restaurants[index].name === 'Spice Hut') { this.spicehut_id = this.restaurants[index]._id; }
        if (this.restaurants[index].name === 'Pappas Bros') { this.pappasbros_id = this.restaurants[index]._id; }
        if (this.restaurants[index].name === 'Dickey\'s Barbecue Pit') { this.dbpit_id = this.restaurants[index]._id; }
        if (this.restaurants[index].name === 'The Mansion Restaurant') { this.mansionR_id = this.restaurants[index]._id ; }
        if (this.restaurants[index].name === 'El Mapache') { this.mapache_id = this.restaurants[index]._id; }
      }
    });
  }
}
