import { SearchFeildComponent } from './search-feild/search-feild.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ServerComponentComponent } from './sample/server-component/server-component.component';
const routes: Routes = [
  { path: "search-field", component: SearchFeildComponent },
  { path:"server",component:ServerComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
