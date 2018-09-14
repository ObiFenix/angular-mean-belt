import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ----------------------------------------------------- [ JTF Restaurant ]
import { HomeComponent } from './restaurant_watcher/dashboard/home.component';
import { AdminComponent } from './restaurant_watcher/admin/admin.component';
import { AddComponent } from './restaurant_watcher/add/add.component';
import { EditComponent } from './restaurant_watcher/edit/edit.component';
import { ShowReviewComponent } from './restaurant_watcher/reviews/showreview/showreview.component';
import { AddReviewComponent } from './restaurant_watcher/reviews/addreview/addreview.component';


const routes: Routes = [
  // Restaurants
  { path: 'restaurants', component: HomeComponent },
  { path: 'restaurants/admin', component: AdminComponent },
  { path: 'restaurants/new', component: AddComponent },
  { path: 'restaurants/:id', component: ShowReviewComponent },
  { path: 'restaurants/:id/new', component: AddReviewComponent },
  { path: 'restaurants/:id/edit', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: 'restaurants' },
  { path: '**', redirectTo: 'restaurants'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
