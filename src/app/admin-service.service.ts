import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http_obj:HttpClient) { }

get_user_det(obj)
{
  return this.http_obj.post("http://localhost:500/admin_user_det",obj).pipe(map(res=>res));
}
update_user_due(obj)
{
  return this.http_obj.post("http://localhost:500/update_user_due",obj).pipe(map(res=>res));
}

mess_info()
{
  return this.http_obj.get("http://localhost:500/admin_mess_info").pipe(map(res=>res));
}

add_mess(obj)
{
  return this.http_obj.post("http://localhost:500/add_mess",obj).pipe(map(res=>res));
}

edit_mess(obj)
{
  return this.http_obj.post("http://localhost:500/edit_mess",obj).pipe(map(res=>res));
}

delete_mess(obj)
{
  return this.http_obj.post("http://localhost:500/delete_mess",obj).pipe(map(res=>res));
}

feedback(obj)
{
  return this.http_obj.post("http://localhost:500/admin_feedback",obj).pipe(map(res=>res));
}
get_user_det2()
{
  return this.http_obj.get("http://localhost:500/admin_user_det2").pipe(map(res=>res));
}
delete_user(obj)
{
  return this.http_obj.post("http://localhost:500/delete_user",obj).pipe(map(res=>res));
}

insert_user_det(obj)
{
  return this.http_obj.post("http://localhost:500/add_user",obj).pipe(map(res=>res));
}

update_month(obj)
{
  return this.http_obj.post("http://localhost:500/update_month_bill",obj).pipe(map(res=>res));

}
}
