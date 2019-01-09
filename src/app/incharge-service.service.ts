import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InchargeServiceService {

  constructor(private http_obj:HttpClient) { }



menu_det(obj)
{
  return this.http_obj.post("http://localhost:500/menu_insert",obj).pipe(map(res=>res));
}
  mess_name(obj)
  {
    return this.http_obj.post("http://localhost:500/incharge_mess",obj).pipe(map(res=>res));

  }

  update_bill(obj)
  {
    return this.http_obj.post("http://localhost:500/update_bill",obj).pipe(map(res=>res));
  }
  check_user(obj)
  {
    return this.http_obj.post("http://localhost:500/user_details",obj).pipe(map(res=>res));

  }
  check_user2(obj)
  {
    return this.http_obj.post("http://localhost:500/user_details2",obj).pipe(map(res=>res));

  }
}
