import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InchargeServiceService } from '../incharge-service.service';
import * as jspdf from 'jspdf'; 
 
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-incharge-update',
  templateUrl: './incharge-update.component.html',
  styleUrls: ['./incharge-update.component.css']
})
export class InchargeUpdateComponent {

  obj2={n:"",month:""};

  isValidFormSubmitted = null;
  u;
  b;
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
  this.getMonth();
  this.generate_form2();
this.user.month=this.val;
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
  this.obj2.month=this.val;
  this.obj2.n=this.name;
  this.obj_ser.check_user2(this.obj2).subscribe(data=>{
    this.res=data;
    console.log(this.res.length);
   
});

  
  }) ;
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

pdf.save('Mess_Users.pdf'); // Generated PDF

});
}


logout(): void {
  console.log("Logout");
  localStorage.setItem('isLoggedIn', "false");
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
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

    display(u,b)
{
  this.u=u;
  this.b=b;
  document.getElementById('update').style.display="block";
}
  
 

}
