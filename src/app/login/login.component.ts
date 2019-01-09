import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import {} from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

      loginform:FormGroup;
      result;
send;
email_form;
         constructor(private fb:FormBuilder,private ser_obj:MyServiceService,private route:Router,public authService:AuthService) {
                                      this.generate_email_form();
                                             }

                                             ngOnInit(){
                      this.loginform=this.fb.group({
                                        user_name:['',[Validators.required]],
                                        password:['',[Validators.required]],
                                        user_type:['',Validators.required]
                                                     });
                                                     this.authService.logout();
                              }

                             

                            generate_email_form()
                            {
                              this.email_form=this.fb.group({
                                email_id:['',Validators.required]
                              });
                            }
                            email(obj)
                            {
                                       this.ser_obj.email(obj).subscribe(data=>{
                                        /*if(data=="sent")
                                        {
                                               document.getElementById("message").innerHTML="Email is been sent at "+obj.email_id+" . Please check inbox "
                                        }*/
                                        console.log(data);
                                       });
                            }
            check_user(obj)
            {
              if(obj.user_type!='admin')
              {
             this.ser_obj.submit_login_data(obj).subscribe((data)=>{
                                                          console.log(data);
                                                          this.result=data;
                                                          if(this.result.status==0)
                                                          {
                                                            alert("USER DOES NOT EXIST");
                                                          }
                                                          if(this.result.status==2)
                                                          {
                                                            alert("Password doesnot match");
                                                          }
                                                          if(this.result.status==1)
                                                          {
                                                            if(obj.user_type=="student"){
                                                              localStorage.setItem('isLoggedIn', "true");
                                                               localStorage.setItem('token', obj.user_name);
                                                                  this.route.navigate(['/student_home']);
                                                            }
                                                            else{
                                                              if(obj.user_type=="incharge")
                                                              {
                                                                localStorage.setItem('isLoggedIn', "true");
                                                               localStorage.setItem('token', obj.user_name);
                                                                  this.route.navigate(['/incharge_home']);
                                                              }
                                                            }
                                                          }
                                                       });
            }

            else
            {
              if(obj.user_name=='admin' && obj.password=='omshiridisai')
                {
                  localStorage.setItem('isLoggedIn', "true");
                  localStorage.setItem('token', obj.user_name);
                  this.route.navigate(['/admin_home']);
                }
                else
                alert("Login details are wrong");
            }
          }
         
}
