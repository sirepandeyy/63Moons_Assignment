import { AddEditComponent } from './add-edit/add-edit.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "users", component: UserComponent},
  {path:'userAddEdit',component:AddEditComponent},
  {path: "**", redirectTo:'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
