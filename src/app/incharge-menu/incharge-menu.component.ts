import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InchargeServiceService } from '../incharge-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-incharge-menu',
  templateUrl: './incharge-menu.component.html',
  styleUrls: ['./incharge-menu.component.css']
})
export class InchargeMenuComponent {

  isValidFormSubmitted = null;

  mess_form:FormGroup;
  user={user_id:'',month:''};
  name;
  mail;
  mess;

  val;
  constructor(private router :Router,private obj_ser:InchargeServiceService,private fb:FormBuilder) { 
    this.user.user_id=localStorage.getItem('token');
    this.get_mess(this.user);
    localStorage.setItem('isLoggedIn',"true");
    this.generate_form();
  
    }
 
 generate_form(){
this.mess_form=this.fb.group({
  mm:['',[Validators.required]],
  ma:['',[Validators.required]],
  me:['',[Validators.required]],
  tum:['',[Validators.required]],
  tua:['',[Validators.required]],
  tue:['',[Validators.required]],
  wm:['',[Validators.required]],
  wa:['',[Validators.required]],
  we:['',[Validators.required]],
  thm:['',[Validators.required]],
  tha:['',[Validators.required]],
  the:['',[Validators.required]],
  fm:['',[Validators.required]],
  fa:['',[Validators.required]],
  fe:['',[Validators.required]],
  sm:['',[Validators.required]],
  sa:['',[Validators.required]],
  se:['',[Validators.required]],
  sum:['',[Validators.required]],
  sua:['',[Validators.required]],
  sue:['',[Validators.required]],
});
 }

menu_det(obj)
{
  this.isValidFormSubmitted = false;
  if (this.mess_form.invalid) {
     alert("please fill the details");
     return;
                }
 this.isValidFormSubmitted = true;
  obj.mess_name=this.name;
  this.obj_ser.menu_det(obj).subscribe(data=>{
         console.log(data);
  });
  alert("Form Submitted Successfuully");
  this.router.navigate(['/incharge_home']);

}


logout(): void {
  console.log("Logout");
  localStorage.setItem('isLoggedIn', "false");
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}


get_mess(obj)
{
this.obj_ser.mess_name(obj).subscribe(data=>{
this.mess=data;
console.log(data);
this.name=this.mess[0].mess_name;
this.mail=this.mess[0].email_id;
}) ;
}

}
