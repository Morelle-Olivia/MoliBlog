import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {MyBlogsComponent} from "./pages/my-blogs/my-blogs.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {ConnectComponent} from "./pages/connect/connect.component";

const routes: Routes = [
  {
    path: 'web/home',
    component: LandingPageComponent,
  },
  {
    path: 'web/my-blogs',
    component: MyBlogsComponent,
  },
  {
    path: 'web/about-me',
    component: AboutMeComponent,
  },
  {
    path: 'web/connect',
    component: ConnectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
