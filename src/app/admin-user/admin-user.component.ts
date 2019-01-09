import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jspdf from 'jspdf'; 
 
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {

  isValidFormSubmitted = null;
 res;
  user;
  user_form:FormGroup;
  constructor(private router:Router,private obj_ser:AdminServiceService,private fb:FormBuilder) { 

    this.user_det();  
    this.generate_form();

  }

  public captureScreen()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft=imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', ''); // A4 size page of PDF
var position = 0;
var last;
heightLeft -= pageHeight;

          while (heightLeft >= 0) {

            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.addPage();
             last=position;
            position = heightLeft - imgHeight;


            heightLeft -= pageHeight;
          }
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);

pdf.save('MYPdf.pdf'); // Generated PDF

});
}


    generate_form()
    {
     this.user_form=this.fb.group({
                      user_id:['',Validators.required],
                      name:['',Validators.required],
                      password:['',Validators.required],
                      p2:['',Validators.required],
                      email_id:['',Validators.required],
                      phone_no:['',Validators.required]
     });
    }

    insert(obj)
    {
      
     this.isValidFormSubmitted = false;
     if (this.user_form.invalid) {
       alert("please fill the details");
        return;
                                }
     this.isValidFormSubmitted = true;
    
     this.obj_ser.insert_user_det(obj).subscribe(data=>{
      this.user=data;
      console.log(data);
      this.res=data;
      if(this.res.status==1)
      {
         alert("Successfully Enrolled");
         this.reload();
         this.router.navigate(['/admin_user']);
      }
     else{
           alert("User Already Exists");
           this.reload();
           this.router.navigate(['/admin_user']);
     }

    })

    }
  user_det()
  {
    this.obj_ser.get_user_det2().subscribe(data=>{
      this.user=data;
      console.log(data);
    })
  }



  delete_user(obj)
  {
   let bol= confirm("are you sure of deleting");
  if(bol)
  {
    this.obj_ser.delete_user(obj).subscribe(data=>{
      console.log(data);
      this.reload();
      this.router.navigate(['/admin_user']);
    
    });
  
  }
  else{
    return;
  }
  }
   
display()
{
  document.getElementById('enter').style.display="block";
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
