import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

    title: 'MnJRestaurant';

    dub: boolean;
    restaurant_temp: Object;
    restaurant: Object;
    errors: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _httpServ: HttpService
    ) {}

    ngOnInit() {
        this.dub = false;
        this.restaurant = { name: '', cuisine: '' };
        this.restaurant = { name: true, cuisine: true };
        this._route.params.subscribe((params: Params) => this.getRestaurant(params.id));
    }

    getRestaurant(id: String) {
        const observable = this._httpServ.getRestaurant(id);
        observable.subscribe(doc => {
            // console.log(doc);
            const data = doc['item'];
            this.restaurant = {
                _id     : data['_id'],
                name    : data['name'],
                cuisine : data['cuisine']
            };
            this.restaurant_temp = this.restaurant;
            console.log('restaurant: ', this.restaurant_temp);
        });
    }

    onEdit(event: any) {
        event.preventDefault();
        // console.log(this.restaurant);
        const observable = this._httpServ.editRestaurant(this.restaurant);
        observable.subscribe(doc => {
            if (!doc['errors']) { return this._router.navigate(['restaurants','admin']); }
            if (doc['errors'].code === 11000)   { this.dub = true; }
            this.errors = doc['errors'];
            console.log(this.errors);
        });
    }

    onCancel() {
        return this._router.navigate(['restaurants','admin']);
    }

    onResetInfo (id: any) {
        event.preventDefault();
        this.restaurant = this.restaurant_temp;
        return this._router.navigate([`/restaurants/${id}/edit`]);
    }
}
