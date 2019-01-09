import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InchargeServiceService } from '../incharge-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incharge-home',
  templateUrl: './incharge-home.component.html',
  styleUrls: ['./incharge-home.component.css']
})
export class InchargeHomeComponent  {

  isValidFormSubmitted = null;

  month_form:FormGroup;
  user_form:FormGroup;
  user={user_id:'',month:''};
  name;
  mail;
  mess;
  res;
  val;
  roll_no;
  user_det;
  constructor(private router :Router,private obj_ser:InchargeServiceService,private fb:FormBuilder) { 
  this.user.user_id=localStorage.getItem('token');
  this.get_mess(this.user);
  localStorage.setItem('isLoggedIn',"true");
  this.generate_form();
  this.getMonth();
  this.generate_form2();
this.user.month=this.val;
  }

  
  generate_form()
  {
             this.user_form=this.fb.group({
               user_id:['',Validators.required]
             });
  }

generate_form2()
{
  this.month_form=this.fb.group({
    month_b:['',Validators.required]
  });
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


logout(): void {
  console.log("Logout");
  localStorage.setItem('isLoggedIn', "false");
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

check2(obj)
{
  this.isValidFormSubmitted = false;
  if (this.user_form.invalid) {
     alert("please enter ROLL NO");
     return;
                }
  this.isValidFormSubmitted = true;
  obj.month=this.val;
  if(this.roll_no=='')
  {
    alert("please enter roll no");
    return;
  }

  obj.user_id=this.roll_no;
  
  this.obj_ser.update_bill(obj).subscribe(data=>{
    console.log(data);
  });
  alert("updated successfully");
  this.reload();

  this.router.navigate(['/incharge_home']);


  document.getElementById('update').style.display="none";


}
obj2;
check(obj)
{
  this.obj2=obj;
             this.isValidFormSubmitted = false;
                if (this.user_form.invalid) {
                   alert("please enter ROLL NO");
                   return;
                              }
               this.isValidFormSubmitted = true;
               obj.month=this.val;
               this.roll_no=obj.user_id;
               this.obj_ser.check_user(obj).subscribe(data=>{
               this.res=data;
               console.log(this.res.length);
               if(this.res.length!=0)
               {

               
     if(this.res[0].mess_name==this.name)
     {
         this.user_det=this.res;
     }
     else{
       alert("user does not belong to the mess");
       this.reload();
       this.router.navigate(['/incharge_home']);

         }
             }

             else{
               
               alert("user has not alloted any mess");
               this.reload();

             }
   });

     
}



reload()
{
  this.router.routeReuseStrategy.shouldReuseRoute=function(){return false;};
}

getMonth()

    {

        var CurrntMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

        var month = new Date();

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

    display()
{
  document.getElementById('update').style.display="block";
}
  
 

}
