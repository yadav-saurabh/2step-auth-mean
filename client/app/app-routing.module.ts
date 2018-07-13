import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CommonService } from './service/common.service';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'user',component: UserComponent},
  {path:'home',component: HomeComponent,canActivate:[CommonService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
