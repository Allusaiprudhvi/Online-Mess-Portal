import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent {

  mess_form:FormGroup;
  menu;
  mess;
  obj={user_id:""};
       name;
       user_name;
       res;
       dues;
       mess_name;
  constructor(private router: Router,private obj_ser:MyServiceService,private fb:FormBuilder) {

    this.user_name= localStorage.getItem('token');
    this.obj.user_id=this.user_name;
                                     this.get_user_due();
                                     this.get_mess_details();                            
                                     this.generate_form();
     this.get_menu({mess_name:'A'});
                                    }
                                                    
generate_form()
{
  this.mess_form=this.fb.group({mess_name:['']});
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
  // console.log("Logout");
   localStorage.setItem('isLoggedIn', "false");
   localStorage.removeItem('token');
   this.router.navigate(['/login']);
 }

 get_menu(obj)
 {
this.obj_ser.menu_info(obj).subscribe(data=>{
this.menu=data;
this.mess_name=obj.mess_name;
});
 }

 
get_mess_details()
{
  this.obj_ser.mess_info().subscribe((data)=>{
          console.log(data);
                 this.mess=data;
         
  
  });

}

}
