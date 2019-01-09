import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  {
      val;
     res2;
     res3;
     p_mess;
     msg;
    mess;
  user_name;
  pas_form;
    dues;
      res;
       obj={user_id:"",month:''};
       name;
       message="";
       month_bill;
vac_mess=new Array();
       constructor(private router: Router,private obj_ser:MyServiceService,private fb:FormBuilder,private route2:Router) {
this.getMonth();
      this.obj.month=this.val;
    this.user_name= localStorage.getItem('token');
    this.obj.user_id=this.user_name;
                                     this.get_user_due();
                                   this.pre_mess();
                                   this.generate_pas_form();
                        }
                                                                         check()
                                                                         {
                                                                           if(this.dues>0)
                                                                           {
                                                                           alert("Please clear your dues to allot");
                                                                             this.router.navigate(['student_home']);
                                                                           }
                                                                           else{
                                                                             this.router.navigate(['student_allot']);
                                                                           }
                                                                         }

generate_pas_form()
{
  this.pas_form=this.fb.group({
    old:['',Validators.required],
    new:['',Validators.required],
    new1:['',Validators.required]
  });
}

update_password(obj)
{
  obj.user_id=this.user_name;
  if(obj.new!=obj.new1)
  {
    alert("Passwords doesn't match");
  return;
  }
  this.obj_ser.check_password(obj).subscribe(data=>{
    this.res3=data;
    if(this.res3.status==0)
    {
      alert("Incorrect Password");
      return;
    }
    this.obj_ser.update_password(obj).subscribe(data=>{
      console.log(data);
      alert("Password Updated Successully");
      this.reload();
      this.router.navigate(['/user_profile']);

    });
  });
}
 get_user_due()
                  { 
                   this.obj_ser.user_due(this.obj).subscribe(data=>{
                       //console.log(data);
                       this.res=data;
                      this.dues=this.res.due;
                      this.name=this.res.name;
                       console.log(this.dues);      

                    });                            
                  
                  }

          
reload()
{
  this.router.routeReuseStrategy.shouldReuseRoute=function(){return false;};
}
logout(): void {
   // console.log("Logout");
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }





 
pre_mess()
{
 this.obj_ser.pre_mess(this.obj).subscribe(data=>{
   this.res2=data;
   if(this.res2.length>0)
    {
  this.msg="MESS IS NOT ALLOTED";
   }
   for(let index in this.res2)
   {
     console.log(this.res2[index].month);
     console.log(this.val);
        if(this.res2[index].month==this.val)
            {
             this.p_mess=this.res2[index].mess_name;
            this.month_bill=this.res2[index].month_bill;
             }
   }

                                                  }); 

   

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
  

}
