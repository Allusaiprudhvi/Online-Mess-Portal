import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent  {
  isValidFormSubmitted = null;
res2;
  due_form:FormGroup;
  user_form:FormGroup;
  val;
user;
roll_no;
obj={month:'',user_id:''};
  constructor(private router:Router,private obj_ser:AdminServiceService,private fb:FormBuilder) { 
    localStorage.getItem('isLoggedIn') == "true"
  this.getMonth();

this.generate_form();
this.generate_form2();

  }

  generate_form()
  {
             this.user_form=this.fb.group({
               user_id:['',Validators.required]
             });
  }


  generate_form2()
  {
    this.due_form=this.fb.group({
      dues:['',Validators.required]
    });
  }

update_due(obj)
{
  this.isValidFormSubmitted = false;
  if (this.due_form.invalid) {
     alert("please update dues");
     return;
                }
  this.isValidFormSubmitted = true;
  if(this.roll_no=='')
  {
    alert("please enter roll no");
    return;
  }
 obj.user_id=this.roll_no;
  this.obj_ser.update_user_due(obj).subscribe(data=>{
    console.log(data);
    this.res2=data;
    if(this.res2.status==1)
    {
      alert("updated successfully");
      document.getElementById('update').style.display="none";
this.reload();
      this.router.navigate(['/admin_home']);

    }
  });

}

res4;
date;
update_month_bill()
{
  let obj={month:this.val};
  if(this.date<27&&this.date>5)
  {
    alert("Please Add the month bill from 27th of this month");
    return;
  }

 this.obj_ser.update_month(obj).subscribe(data=>{
   this.res4=data;
       if(this.res4.status==0)
       {
         alert("already updated");
       }
       else{
         alert("Previous MOnth bill added to dues Successfully");
       }
  });

}
reload()
{
  this.router.routeReuseStrategy.shouldReuseRoute=function(){return false;};
}
user_det(obj)
{
  this.roll_no=obj.user_id;
  this.isValidFormSubmitted = false;
  if (this.user_form.invalid) {
     alert("please enter ROLL NO");
     return;
                }
 this.isValidFormSubmitted = true;
  this.obj.month=this.val;
this.obj_ser.get_user_det(obj).subscribe(data=>{
  console.log(data);
  this.user=data;

});
}

logout(): void {
  console.log("Logout");
  localStorage.setItem('isLoggedIn', "false");
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}


display()
{
  document.getElementById('update').style.display="block";
}

getMonth()

    {

        var CurrntMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

        var month = new Date();
      this.date=month.getDate();
        var CrrntMonth = CurrntMonth[month.getMonth()];

        var span = document.createElement("span");

        span.style.color = "Blue";


        if(CrrntMonth=="January")
        this.val=1;
        if(CrrntMonth=="February")
        this.val=2;
        if(CrrntMonth=="March")
        this.val=3;
        if(CrrntMonth=="April")
        this.val=4;
        if(CrrntMonth=="May")
        this.val=5;
        if(CrrntMonth=="June")
        this.val=6;
        if(CrrntMonth=="July")
        this.val=7;
        if(CrrntMonth=="August")
        this.val=8;
        if(CrrntMonth=="September")
        this.val=9;
        if(CrrntMonth=="October")
        this.val=10;
        if(CrrntMonth=="November")
        this.val=11;
        if(CrrntMonth=="December")
        this.val=12;
        
        document.body.appendChild(span);    

    }
}
