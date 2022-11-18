import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {MyBlogsComponent} from "./pages/my-blogs/my-blogs.component";

const routes: Routes = [
  {
    path: 'web/home',
    component: LandingPageComponent,
  },
  {
    path: 'web/my-blogs',
    component: MyBlogsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
