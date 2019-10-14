import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeminaryComponent } from './seminary/seminary.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: '', component: SeminaryComponent},
  {path: 'adding', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
