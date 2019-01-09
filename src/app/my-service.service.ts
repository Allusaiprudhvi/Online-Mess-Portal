import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http_obj:HttpClient) {
   }


 email(obj)
 {
  return this.http_obj.post("http://localhost:500/send",obj).pipe(map(res=>res)); 
 
 }
  submit_login_data(obj){
                              return this.http_obj.post("http://localhost:500/user_login",obj).pipe(map(res=>res)); 
                       }
                         
  user_due(obj)
                     {
                                return this.http_obj.post("http://localhost:500/user_due",obj).pipe(map(res=>res));
                     }
                     pre_mess(obj)
                     {
                      return this.http_obj.post("http://localhost:500/pre_mess",obj).pipe(map(res=>res)); 

                     }
  mess_info()
  {
    
    return this.http_obj.get("http://localhost:500/get_mess_data").pipe(map(res=>res));

  }
   
  submit_allotment(obj)
  {
    return this.http_obj.post("http://localhost:500/allot_mess",obj).pipe(map(res=>res)); 
  }

  submit_feedback(obj)
  {
    return this.http_obj.post("http://localhost:500/insert_feed",obj).pipe(map(res=>res));
  }

  menu_info(obj)
  {
    return this.http_obj.post("http://localhost:500/menu",obj).pipe(map(res=>res));
  }

  check_password(obj)
  {
    return this.http_obj.post("http://localhost:500/check_password",obj).pipe(map(res=>res));

  }
  update_password(obj)
  {
    return this.http_obj.post("http://localhost:500/update_password",obj).pipe(map(res=>res));
 
  }
  }
