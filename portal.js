var express = require('express');
var mysql=require('mysql');
var app = express();
var nodemailer = require("nodemailer");
var xlsx = require('node-xlsx');
var obj = xlsx.parse(__dirname+ '/list.xlsx'); // parses a file
var body_parser=require('body-parser');NODE_TLS_REJECT_UNAUTHORIZED="false";const tls = require('tls');
const fs = require('fs');


var connection=mysql.createConnection({
host:'127.0.0.1',
user:'root',
password:'omshiridisai',
database:'online_mess_portal',
multipleStatements:'true',
port : 3300
});
connection.connect((err)=>{
    console.log(err);
});




app.use(body_parser.json());
app.use(body_parser.urlencoded({
     extended:true
}));

//Middleware function to log request protocol
app.use(
              function(req, res, next){
         //website u wish to allow to connect
res.setHeader('Access-Control-Allow-Origin','*');
//request methods you to allow
res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
//request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers','X-Required-With,content-type');
res.setHeader('Access-Control-Allow-Credentials',true);
        next();
});


/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/

var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: "allusaiprudhvi111gmail.com",
        pass: "omshiridisai@999"
    }
});
var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
    res.sendfile('index.html');
});
app.post('/send',function(req,res){
    console.log(req.body);
        rand=Math.floor((Math.random() * 100) + 54);
    host="http://127.0.0.1";
    link="http://"+"http://127.0.0.1"+"/verify?id="+rand;
    mailOptions={
        to : "allusaiprudhvi111@gmail.com",
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

app.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
    console.log("Domain is matched. Information is from Authentic email");
    if(req.query.id==rand)
    {
        console.log("email is verified");
        res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
    }
    else
    {
        console.log("email is not verified");
        res.end("<h1>Bad Request</h1>");
    }
}
else
{
    res.end("<h1>Request is from unknown source");
}
});

/*--------------------Routing Over----------------------------*/


/*
var d=obj;
e=d[0].data;
console.log(e);
var c=0;
var f='';
e.forEach(v=> {
if(c%11==0)
{
f="A";
}
if(c%11==1)
{
f="B";
}
if(c%11==2)
{
f="C";
}
if(c%11==3)
{
f="D";
}
if(c%11==4)
{
f="E";
}
if(c%11==5)
{
f="F";
}
if(c%11==6)
{
f="G";
}
if(c%11==7)
{
f="IH";
}
if(c%11==8)
{
f="LH";
}
if(c%11==9)
{
f="PG1";
}
if(c%11==10)
{
f="PG2";
}
c++;

    connection.query("insert into Allotment(user_id,month,mess_name,month_bill) values(?,9,?,0)",[v[1],f],function(err,rows,fields){
                 if(err)
                 throw err;


    });
    
});
*/
app.post('/user_login',function(req,res){
  //   console.log(req.body);
          if(req.body.user_type=='student'){
              connection.query('select * from User where user_id=?  ',[req.body.user_name],function(err,rows,fields){
                                                if(err)
                                                throw err;
                                                c=rows;
    //                                            console.log(JSON.stringify(c[0]));
                                                if(c[0]==undefined)
                                                 {
                                                     res.send({status:0});
                                                 }
                                                 else{
                                                    connection.query('select * from User where password=? AND user_id=?  ',[req.body.password,req.body.user_name],function(err,rows,fields){
                                                           d=rows;   
                                                        if(d[0]==undefined)                                      
                                                   res.send({status:2});
                                                        else
                                                        res.send({status:1});
                                                    });
                                                    }
                                                
                                                
                                                    });

                                                }
                                                if(req.body.user_type=='incharge'){
                                                    connection.query('select * from Incharge where incharge_id=?  ',[req.body.user_name],function(err,rows,fields){
                                                        if(err)
                                                        throw err;
                                                        c=rows;
                                                        console.log(JSON.stringify(c[0]));
                                                        if(c[0]==undefined)
                                                         {
                                                             res.send({status:0});
                                                         }
                                                         else{
                                                            connection.query('select * from Incharge where password=? AND incharge_id=?  ',[req.body.password,req.body.user_name],function(err,rows,fields){
                                                                   d=rows;   
                                                                if(d[0]==undefined)                                      
                                                           res.send({status:2});
                                                                else
                                                                res.send({status:1});
                                                            });
                                                            }
                                                        
                                                        
                                                            });
                                      
                                                                                      }


                                });



app.post('/user_due',function(req,res){
    console.log(req.body);
                          connection.query("select dues,name from User where user_id=?",[req.body.user_id],function(err,rows,fields){
                              if(err)
                               throw err;
                               console.log(rows);
                               let a=rows;
                               
                               res.send({due:a[0].dues,name:a[0].name});
                          });
});
app.get('/get_mess_data',function(req,res){
connection.query('select Mess.mess_name,mess_type,mess_capacity,total from Mess left join (select mess_name,count(*) as total from (select * from allotment where month=10) as t2 group by mess_name  ) as t1 on t1.mess_name=Mess.mess_name ;',function(err,rows,fields){
  if(err)
  throw err;
  console.log(rows);
  let a=rows;
  res.send(a);
                    })

});
//connection.query('select count(*)')
let b;
app.post('/pre_mess',function(req,res){
    connection.query('select * from Allotment where user_id=? ',[req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
        res.send(rows);
    });
});
app.post('/allot_mess',function(req,res){
 
    connection.query('select * from Allotment where user_id=? and month=?',[req.body.user_name,req.body.month],function(err,rows,fields){
        if(err)
        throw err;
        console.log(rows);
        let a=rows;
        
        if(a.length==0)
    {
        
    
 connection.query('insert into Allotment values(?,?,?,0,0)',[req.body.user_name,req.body.month,req.body.mess_name],function(err,fields){
        if(err)
        throw err;
        res.send({status:1});
    });
}
else
res.send({status:0});

        
        
    });
    

});
app.post('/check_password',function(req,res){
    connection.query('select * from user where user_id=?',[req.body.user_id],function(err,rows,fields){
        console.log(req.body);

      if(err)
      throw err;
      let a=rows;
      if(a[0].password!=req.body.old)
      {
          res.send({status:0});
      }
      else{
          res.send({status:1});
      }
    });
});
app.post('/update_password',function(req,res){
    connection.query('update user set password=? where user_id=?',[req.body.new,req.body.user_id],function(err,rows,fields){
        console.log(req.body);
        if(err)
        throw err;
        res.send({status:1});
    });
});
app.post('/insert_feed',function(req,res){
    console.log(req.body);

    connection.query('select * from feedback where user_id=? and month=?',[req.body.user_id,req.body.month],function(err,rows,fields){
        if(err)
        throw err;
        console.log(rows);
        let a=rows;
        
        if(a.length==0)
    {
        
    
 connection.query('insert into feedback values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.user_id,req.body.name,req.body.mess_name,req.body.month,req.body.room,req.body.mobile_no,req.body.fa,req.body.duration,req.body.type,req.body.f1,req.body.f2,req.body.f3,req.body.f4,req.body.f5,req.body.f6,req.body.f7,req.body.f8,req.body.f9,req.body.f10,req.body.cont],function(err,fields){
        if(err)
        throw err;
        res.send({status:1});
    });
}
else
res.send({status:0});

        
        
    });
});

app.post('/menu',function(req,res){

    connection.query("select * from menu where mess_name=?",[req.body.mess_name],function(err,rows,fields){
        if(err)
        throw err;
        let a=rows;
        res.send(a);
        
    });
});


app.post('/incharge_mess',function(req,res){
    connection.query("select * from Incharge where incharge_id=?",[req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
        let a=rows;
        res.send(a);
        
    });
});



app.post('/user_details',function(req,res){

    connection.query("select user.user_id,month,mess_name,month_bill,name from user inner join allotment on user.user_id=allotment.user_id where user.user_id=? and month=?",[req.body.user_id,req.body.month],function(err,rows,fields){
        if(err)
        throw err;
        let a=rows;
        res.send(a);
        
    });
});

app.post('/user_details2',function(req,res){

console.log(req.body);
connection.query("select * from user inner join allotment on user.user_id=allotment.user_id where mess_name=? and month=?",[req.body.n,req.body.month],function(err,rows){
  if(err)
  throw err;
  
res.send(rows)

});
});
app.post('/menu_insert',function(req,res){

 res.send({status:1});
            connection.query("delete  from menu where mess_name=? ",[req.body.mess_name],function(err,rows,fields){
                if(err)
                throw err;                
            });
    
connection.query("insert into menu values(?,'monday',?,?,?)",[req.body.mess_name,req.body.mm,req.body.ma,req.body.me],function(err,rows,fields){
    if(err)
    throw err;

});

connection.query("insert into menu values(?,'tuesday',?,?,?)",[req.body.mess_name,req.body.tum,req.body.tua,req.body.tue],function(err,rows,fields){
    if(err)
    throw err;

});

connection.query("insert into menu values(?,'wednesday',?,?,?)",[req.body.mess_name,req.body.wm,req.body.wa,req.body.we],function(err,rows,fields){
    if(err)
    throw err;

});

connection.query("insert into menu values(?,'thursday',?,?,?)",[req.body.mess_name,req.body.thm,req.body.tha,req.body.the],function(err,rows,fields){
    if(err)
    throw err;

});

connection.query("insert into menu values(?,'friday',?,?,?)",[req.body.mess_name,req.body.fm,req.body.fa,req.body.fe],function(err,rows,fields){
    if(err)
    throw err;

});

connection.query("insert into menu values(?,'saturday',?,?,?)",[req.body.mess_name,req.body.sm,req.body.sa,req.body.se],function(err,rows,fields){
    if(err)
    throw err;

});

connection.query("insert into menu values(?,'sunday',?,?,?)",[req.body.mess_name,req.body.sum,req.body.sua,req.body.sue],function(err,rows,fields){
    if(err)
    throw err;

});

});

app.post('/update_bill',function(req,res){
    console.log(req.body);
    connection.query('update allotment set month_bill=? where user_id=? and month=? ',[req.body.month_b,req.body.user_id,req.body.month],function(err,rows,fields){
        if(err)
        throw err;
        res.send({status:1});
    });
});

app.post('/admin_user_det',function(req,res){

    connection.query('select * from user where user_id=?',[req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
        res.send(rows);
    });
});


app.post('/update_user_due',function(req,res){

    connection.query('update  user set dues=? where user_id=?',[req.body.dues,req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
        res.send({status:1});
    });
});

app.get('/admin_mess_info',function(req,res){
    
    connection.query('select mess.mess_name,mess_capacity,mess_type,incharge_id,email_id,phone_no from incharge inner join mess where incharge.mess_name=mess.mess_name',function(err,rows,fields){
        if(err)
        throw err;
        res.send(rows);
    });
});
app.post('/add_mess',function(req,res){
   connection.query('insert into mess values(?,?,?)',[req.body.mess_name,req.body.mess_type,req.body.mess_capacity],function(err,rows,fields){
        if(err)
        throw err;
    
    });
    connection.query('insert into incharge values(?,?,?,?,?)',[req.body.incharge_id,req.body.password,req.body.mess_name,req.body.email_id,req.body.phone_no],function(err,rows,fields){
        if(err)
        throw err;
    
    });
    res.send({status:1});
    
});
app.post('/edit_mess',function(req,res){
    console.log(req.body);
    connection.query('update  mess set mess_type=?, mess_capacity=? where mess_name=? ',[req.body.mess_type,req.body.mess_capacity,req.body.mess_name],function(err,rows,fields){
        if(err)
        throw err;
    
    });
    connection.query('update incharge set password=?,email_id=?,phone_no=? where incharge_id=?',[req.body.password,req.body.email_id,req.body.phone_no,req.body.incharge_id],function(err,rows,fields){
        if(err)
        throw err;
    
    });
    res.send({status:1});
    
});
app.post('/delete_mess',function(req,res){
    connection.query('delete from mess where mess_name=?',[req.body.mess_name],function(err,rows,fields){
        if(err)
        throw err;
    
    });
    connection.query('delete from incharge where incharge_id=?',[req.body.incharge_id],function(err,rows,fields){
        if(err)
        throw err;
    
    });
    res.send({status:1});
    
});

app.post('/admin_feedback',function(req,res){

     connection.query('select * from feedback where mess_name=?',[req.body.mess_name],function(err,rows,fields){
         if(err)
         throw err;
         res.send(rows);
     });

});

app.post('/',function(req,res){

    connection.query('update  user set dues=? where user_id=?',[req.body.dues,req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
        res.send({status:1});
    });
});


app.get('/admin_user_det2',function(req,res){

    connection.query('select * from user',[req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
        res.send(rows);
    });
});

app.post('/delete_user',function(req,res){
    connection.query('delete from user where user_id=?',[req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
    
    });
   
    res.send({status:1});
    
});


app.post('/add_user',function(req,res){

    connection.query('select * from user where user_id=?',[req.body.user_id],function(err,rows,fields){
        if(err)
        throw err;
          let a=rows;
          console.log(rows);
        if(a.length>0)
        res.send({status:0});
        else{
            connection.query('insert into user values(?,?,?,0,?,?)',[req.body.user_id,req.body.name,req.body.password,req.body.phone_no,req.body.email_id],function(err,rows,fields){
                if(err)
                {
                throw err;
                    
            }
                res.send({status:1});
            });
        }
    });
   
});

app.post('/update_month_bill',function(req,res){
console.log(req.body)

connection.query('select user.user_id,month_bill,added,dues from user inner join  (select * from allotment where month=?)as t1 on t1.user_id=user.user_id;',[req.body.month-1],function(err,rows,fields){
if(err)
throw err;
    console.log(rows);
let a=rows;
console.log(a.length);
let c=0;
for(let i=0;i<a.length;i++)
    {
        
        if(a[i].added==0)
          {
        a[i].dues=a[i].dues+a[i].month_bill;
        a[i].added=1;
        connection.query("update user set dues=? where user_id=?",[a[i].dues,a[i].user_id],function(err,rows,fields){
            if(err)
            throw err;
        });
        connection.query("update allotment set added=? where user_id=?",[a[i].added,a[i].user_id],function(err,rows,fields){
            if(err)
            throw err;
        });
           }
           else{
               c=1;
           }
           
     }
     if(c==1)
     {
         res.send({status:0});
     }
     else 
     res.send({status:1});
    
});
});

app.listen(500,'0.0.0.0',()=>{
    console.log('server is reddy');
});

