import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  isValidFormSubmitted = null;
  status;
  feed_form:FormGroup;
  res;
  dues;
  name;
  user_name;
  obj={user_id:''};


  constructor(private router:Router,private obj_ser:MyServiceService,private fb:FormBuilder) {
    this.user_name=localStorage.getItem('token');
      this.obj.user_id=this.user_name; 
      this.get_user_due();
      localStorage.setItem('isLoggedIn',"true");
    this.generate_form();
                                                                         }





    generate_form()
    {
      this.feed_form=this.fb.group({
        name:['', [Validators.required]],
        mess_name:['', [Validators.required]],
        month:['', [Validators.required]],
        room:['', [Validators.required]],
        mobile_no:['', [Validators.required]],
        fa:['', [Validators.required]],
        duration:['', [Validators.required]],
        type:['', [Validators.required]],
        f1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f3: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f4: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f5: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f6: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f7: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f8: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f9: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        f10: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        cont:['',[Validators.required]]

      });
    }
               get_user_due()
                {
    this.obj_ser.user_due(this.obj).subscribe(data=>{
      this.res=data;
      this.dues=this.res.due;
      this.name=this.res.name;
                                            });
                }


 check()
 {
   if(this.dues<0)
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


   feedback(obj1)
   {
     this.isValidFormSubmitted = false;
     if (this.feed_form.invalid) {
       alert("please fill the details");
        return;
     }
     this.isValidFormSubmitted = true;
     obj1.user_id=this.user_name;
     this.obj_ser.submit_feedback(obj1).subscribe(data=>{
       console.log(data);
        this.status=data;
        if(this.status==0){
          alert("Already given FeedBack");
          this.router.navigate(['student_home']);

        }
        else{
          alert("FeedBack Submitted Successfully ");
          this.router.navigate(['student_home']);

        }
     });
   }
}
