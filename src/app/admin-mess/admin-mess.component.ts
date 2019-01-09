import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-mess',
  templateUrl: './admin-mess.component.html',
  styleUrls: ['./admin-mess.component.css']
})
export class AdminMessComponent  {
  isValidFormSubmitted = null;
a;
b;
c;
d;
e;
f;
g;

mess_form:FormGroup;  
e_mess_form:FormGroup;
mess;
  constructor(private router:Router,private obj_ser:AdminServiceService ,private fb:FormBuilder) {
              this.generate_form();
              this.mess_info();
   }
generate_form()
{
  this.mess_form=this.fb.group({
          mess_name:['',Validators.required],
          mess_type:['',Validators.required],
          mess_capacity:['',Validators.required],
          incharge_id:['',Validators.required],
          password:['',Validators.required],
          p2:['',Validators.required],
          phone_no:['',Validators.required],
          email_id:['',Validators.required]
  });
}
generate_form2()
{
  this.e_mess_form=this.fb.group({
          mess_name:['',Validators.required],
          mess_type:['',Validators.required],
          mess_capacity:['',Validators.required],
          incharge_id:['',Validators.required],
          password:['',Validators.required],
          p2:['',Validators.required],
          phone_no:['',Validators.required],
          email_id:['',Validators.required]
  });
}
add_mess(obj)
{
  this.isValidFormSubmitted = false;
  if (this.mess_form.invalid) {
     alert("please fill the details");
     return;
                }
 this.isValidFormSubmitted = true;
  if(obj.p2!=obj.password)
  {
   alert("Password Does not Match");
   return;
  }
   this.obj_ser.add_mess(obj).subscribe(data=>{
    console.log(data);
    this.reload();
  this.router.navigate(['/admin_mess']);
  });
}



edit_mess(obj)
{
  
  if(obj.p2!=obj.password)
  {
   alert("Password Does not Match");
   return;
  }
  if(obj.mess_name=="")
    obj.mess_name=this.a;

    if(obj.mess_type=="")
    obj.mess_type=this.b;

    if(obj.mess_capacity=="")
    obj.mess_capacity==this.c;

    if(obj.email_id=="")
    obj.email_id=this.e;

    if(obj.incharge_id=="")
    obj.incharge_id=this.d;

    if(obj.phone_no=="")
     obj.phone_no=this.f;

   this.obj_ser.edit_mess(obj).subscribe(data=>{
    console.log(data);
    this.reload();
  this.router.navigate(['/admin_mess']);
  });
}




delete_mess(obj)
{
 let bol= confirm("are you sure of deleting");
if(bol)
{
  this.obj_ser.delete_mess(obj).subscribe(data=>{
    console.log(data);
    this.reload();
    this.router.navigate(['/admin_mess']);
  
  });

}
else{
  return;
}
}

 mess_info()
 {
   this.obj_ser.mess_info().subscribe(data=>{
     console.log(data);
       this.mess=data;
   });
 }


 
display()
{
  document.getElementById('enter').style.display="block";
}

display2(obj)
{
  this.a=obj.mess_name;
  this.b=obj.mess_type;
  this.c=obj.mess_capacity;
  this.d=obj.incharge_id;
  this.e=obj.email_id;
  this.f=obj.phone_no;
  document.getElementById('e_enter').style.display="block";
}

reload()
{
  this.router.routeReuseStrategy.shouldReuseRoute=function(){return false;};
}

logout(): void {
  console.log("Logout");
  localStorage.setItem('isLoggedIn', "false");
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

}
