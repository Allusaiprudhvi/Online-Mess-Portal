import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {AuthGuard} from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentAllotComponent } from './student-allot/student-allot.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { InchargeHomeComponent } from './incharge-home/incharge-home.component';
import { InchargeMenuComponent } from './incharge-menu/incharge-menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminMessComponent } from './admin-mess/admin-mess.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { InchargeUpdateComponent } from './incharge-update/incharge-update.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentHomeComponent,
    StudentAllotComponent,
    StudentFeedbackComponent,
    StudentMenuComponent,
    InchargeHomeComponent,
    InchargeMenuComponent,
    UserProfileComponent,
    AdminHomeComponent,
    AdminFeedbackComponent,
    AdminMessComponent,
    AdminUserComponent,
    InchargeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
