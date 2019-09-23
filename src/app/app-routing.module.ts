import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellListComponent } from './well-list/well-list.component';


const routes: Routes = [
  { path: 'wells', component: WellListComponent, },
  { path: '', redirectTo: 'wells', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
