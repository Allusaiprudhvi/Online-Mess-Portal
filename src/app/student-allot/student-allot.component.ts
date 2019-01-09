import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-student-allot',
  templateUrl: './student-allot.component.html',
  styleUrls: ['./student-allot.component.css']
})
export class StudentAllotComponent  {
  allot_form:FormGroup;
  isValidFormSubmitted = null;
val;
date;
  res2;
     p_mess;
     msg;
    mess;
  user_name;
    dues;
      res;
       obj={user_id:""};
       name;
       allot_stat;
       message="";
vac_mess=new Array();
       constructor(private router: Router,public authService:AuthService,private obj_ser:MyServiceService,private fb:FormBuilder,private route2:Router) {

    this.user_name= localStorage.getItem('token');
    this.obj.user_id=this.user_name;
                               this.getMonth();
                                     this.get_user_due();
                                   
                                     this.generate_form();
                                     this.get_vacancy_mess();
                                                                         }
                                                                         

generate_form()
{
  this.allot_form=this.fb.group({
    mess_name:['',[Validators.required]],
    month:['',[Validators.required]],
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
logout(): void {
   // console.log("Logout");
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }





  
get_vacancy_mess()
{
  this.obj_ser.mess_info().subscribe(data=>{
   this.mess=data;
   let i=0;
   for(let index in this.mess)
   {
         if((this.mess[index].mess_capacity-this.mess[index].total)>0)
         {
           this.vac_mess[i]=this.mess[index].mess_name;
           console.log(this.vac_mess[i]);
         }
         i++;
   }
   console.log(this.vac_mess);

  });
}

allot_mess(obj2)
            {
              
     this.isValidFormSubmitted = false;
     if (this.allot_form.invalid) {
       alert("please fill the details");
        return;
     }
     this.isValidFormSubmitted = true;
     
    /* if(this.date<27&&this.date>5)
           {
             alert("Allotment opens from 27th of this month");
             return;
           }*/
         obj2.user_name=this.user_name;
              this.obj_ser.submit_allotment(obj2).subscribe((data)=>{
                console.log(data);
                   this.allot_stat=data;
                  
                   if(this.allot_stat.status==0){
                      alert("MESS IS ALREADY ALLOTED")
                      this.router.navigate(['/student_home']);

                   }
                   else
                   {
                      alert("ALLOTED MESS SUCCESSFULLY");
                      this.router.navigate(['/student_home']);
                   }
              });
              

            }
         
   
getMonth()

{

    var CurrntMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

    var month = new Date();

    var CrrntMonth = CurrntMonth[month.getMonth()];
    var d=month.getDate();
    this.date=d;
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