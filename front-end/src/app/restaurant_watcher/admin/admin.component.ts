import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title: 'MnJRestaurant';

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
    });
  }

  onDelete(id) {
    console.log('Before ========================', typeof(id));
    const observable = this._httpServ.deleteRestaurant(id);
    observable.subscribe(doc => {
      console.log('After ========================');
      this._router.navigate(['/restaurants']);
    });
    this._router.navigate(['/restaurants']);
  }
}
