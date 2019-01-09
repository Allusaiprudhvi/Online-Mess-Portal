import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AuthGuard } from './auth.guard';
import { StudentAllotComponent } from './student-allot/student-allot.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { InchargeHomeComponent } from './incharge-home/incharge-home.component';
import { InchargeMenuComponent } from './incharge-menu/incharge-menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMessComponent } from './admin-mess/admin-mess.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { InchargeUpdateComponent } from './incharge-update/incharge-update.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'student_home',component:StudentHomeComponent,canActivate: [AuthGuard]},
{path :'student_allot',component:StudentAllotComponent,canActivate: [AuthGuard]},
{path:'student_feedback',component:StudentFeedbackComponent,canActivate:[AuthGuard]},
{path:'student_menu',component:StudentMenuComponent,canActivate:[AuthGuard]},
{path:'incharge_home',component:InchargeHomeComponent,canActivate:[AuthGuard]},
{path:'incharge_menu',component:InchargeMenuComponent,canActivate:[AuthGuard]},
{path:'user_profile',component:UserProfileComponent,canActivate:[AuthGuard]},
{path:'admin_home',component:AdminHomeComponent,canActivate:[AuthGuard]},
{path:'admin_mess',component:AdminMessComponent,canActivate:[AuthGuard]},
{path:'admin_feedback',component:AdminFeedbackComponent,canActivate:[AuthGuard]},
{path:'admin_user',component:AdminUserComponent,canActivate:[AuthGuard]},
{path:'incharge_update',component:InchargeUpdateComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
