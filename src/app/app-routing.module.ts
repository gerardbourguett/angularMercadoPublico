import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VermasComponent } from './vermas/vermas.component';

const routes: Routes = [
{ 
  path: '',
  component:HomeComponent,
  pathMatch: 'full'
},
{
  path: 'detalle/:variable',
  component:VermasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }