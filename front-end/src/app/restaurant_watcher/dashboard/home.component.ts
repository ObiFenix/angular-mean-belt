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

  items: Object;

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
      this.items = doc['items'];
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
