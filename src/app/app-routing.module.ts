import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ServerComponentComponent } from './sample/server-component/server-component.component';
const routes: Routes = [
  { path:"server",component:ServerComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
