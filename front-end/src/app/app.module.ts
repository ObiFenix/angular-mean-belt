import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './restaurant_watcher/add/add.component';
import { EditComponent } from './restaurant_watcher/edit/edit.component';
import { HomeComponent } from './restaurant_watcher/dashboard/home.component';
import { AdminComponent } from './restaurant_watcher/admin/admin.component';
import { AddReviewComponent } from './restaurant_watcher/reviews/addreview/addreview.component';
import { ShowReviewComponent } from './restaurant_watcher/reviews/showreview/showreview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AddComponent,
    EditComponent,
    AddReviewComponent,
    ShowReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
