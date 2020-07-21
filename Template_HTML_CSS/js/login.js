function validate()
{
  var name=document.forms["myform"]["uname"].value;
  var password=document.forms["myform"]["psw"].value;
  if(document.getElementById('login').innerHTML="Login")
  {
    if(name=="Raj" && password=="7507")
   {
     document.getElementById("p1").innerHTML="Welcome" + " "+name+" ...</h2>";
     document.getElementById('id01').style.display='none';
     document.getElementById("login").innerHTML="LogOut";
     document.getElementById("signin").style.display='none';
     document.getElementById("cart").style.display='block';
     return false;
   }
   else
   {
      alert("Check Your Password Or Username...");
      return false;
   }
  }
} 

function check()
{
  if(document.getElementById("login").innerHTML=="LogOut")
  {
    document.getElementById("p1").innerHTML=" ";
    document.getElementById('id01').style.display='none';
    document.getElementById("login").innerHTML="Login";
    document.getElementById("signin").style.display='block';
  }
  else
  {
    document.getElementById('id01').style.display='block';
  }
}