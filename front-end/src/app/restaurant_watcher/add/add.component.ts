import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component ({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

  title: 'MnJRestaurant';

  dub: any;
  // cuisinefield: boolean;
  // namefield: boolean;
  restaurant: any;
  errors: any;

  constructor (
    private _route: ActivatedRoute,
    private _http: HttpService,
    private _router: Router
  ) {}

  ngOnInit () {
    this.dub = false;
    // this.namefield = true;
    // this.cuisinefield = true;
    this.restaurant = { name: '', cuisine: ''};
    this.errors = { name: false, cuisine: false };
  }

  onAdd (event: any) {
    event.preventDefault();
    // console.log(this.restaurant);

    const observable = this._http.addRestaurant(this.restaurant);
    observable.subscribe(doc => {
      // console.log(doc['errors']);
      if (!doc['errors']) { return this._router.navigate(['restaurants','admin']); }
      if (doc['errors'].code === 11000)  { this.dub = true; }
      // if (doc['errors'].name)            { this.namefield = false; }
      // if (doc['errors'].cuisine)         { this.cuisinefield = false; }

      this.errors = doc['errors'];
      // console.log(this.errors);
    });
  }

  onCancel () {
    this._router.navigate(['/restaurants','admin']);
  }
}
