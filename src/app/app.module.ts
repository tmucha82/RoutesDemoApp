import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RoutesDemoApp} from './app.component';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'contact', component: ContactComponent},
  // {path: 'contactus', redirectTo: 'contact'},
];

@NgModule({
  declarations: [
    RoutesDemoApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RoutesDemoApp]
})
export class AppModule {
}
