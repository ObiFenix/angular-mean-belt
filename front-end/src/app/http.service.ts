import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  // Services Configured for Restaurant App
  getRestaurants ()     { return this._http.get('/api/restaurants');                            }
  getRestaurant (id)    { return this._http.get(`/api/restaurants/${id}`);                      }
  getReviews (id)       { return this._http.get(`/api/reviews/${id}`);                          }
  addRestaurant (item)  { return this._http.post('/api/restaurants', item);                     }
  addReview (item, id)  { return this._http.post(`/api/reviews/${id}/new`, item);               }
  editRestaurant (item) { return this._http.patch(`/api/restaurants/${item._id}/update`, item); }
  deleteRestaurant (id) { return this._http.get(`/api/restaurants/${id}/delete`);               }
}
