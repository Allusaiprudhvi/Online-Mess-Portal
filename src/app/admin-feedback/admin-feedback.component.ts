import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent {

feedback_form:FormGroup;
mess;
feedback;
mess_name;
  constructor(private router:Router,private obj_ser:MyServiceService,private obj_ser2:AdminServiceService,private fb:FormBuilder) {
    this.generate_form();
    localStorage.setItem('isLoggedIn',"true");

    this.get_mess_details();
  }

  generate_form()
{
  this.feedback_form=this.fb.group({mess_name:['']});
}     

get_feedback(obj)
 {
   this.mess_name=obj.mess_name;
  localStorage.setItem('isLoggedIn',"true");

    this.obj_ser2.feedback(obj).subscribe((data)=>{
      console.log(data);
      this.feedback=data;
    });
 }
get_mess_details()
{
  
  this.obj_ser.mess_info().subscribe((data)=>{
          console.log(data);
                 this.mess=data;
         
  
  });

}

  logout(): void {
    console.log("Logout");
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}
