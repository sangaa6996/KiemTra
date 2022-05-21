import { LaptopDetailComponent } from './laptop/laptop-detail/laptop-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { LaptopComponent } from './laptop/laptop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './laptop/laptop-detail/edit/edit.component';

const routes: Routes = [
  {
    path: "laptops", component: LaptopComponent,
    children:[
      // { path: '', component: RecipeStartComponent },
      { path: 'new', component: EditComponent},
      { path: ':id', component: LaptopDetailComponent},
      { path: ':id/edit', component: EditComponent},
    ]
  },
  { path: "customers", component: CustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
