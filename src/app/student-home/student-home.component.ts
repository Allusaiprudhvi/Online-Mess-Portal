import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent
{ 
  allot_form:FormGroup;
    mess;
  user_name;
     dues;
      res;
       obj={user_id:""};
       name;
  constructor(private route:ActivatedRoute,private router: Router,public authService:AuthService,private obj_ser:MyServiceService,private fb:FormBuilder,private route2:Router) {

    this.user_name= localStorage.getItem('token');
    this.obj.user_id=this.user_name;
                                     this.get_user_due();
                                     this.get_mess_details();
                                    localStorage.setItem('isLoggedIn',"true");
                                                                         }
           



 get_user_due()
                  { 
                   this.obj_ser.user_due(this.obj).subscribe(data=>{
                       console.log(data);
                       this.res=data;
                      this.dues=this.res.due;
                      this.name=this.res.name;
                       console.log(this.dues);      

                    });                            
                  
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

logout(): void {
    console.log("Logout");
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

get_mess_details()
                      {
                        this.obj_ser.mess_info().subscribe((data)=>{
                                console.log(data);
                                       this.mess=data;
                                for(let index in this.mess){
                                                    let value=this.mess[index];
                                                       this.mess[index].vacancy=value.mess_capacity-value.total;
                                                    }
                        
                        });

                      } 



}
