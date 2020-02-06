function validation(){  
var name=document.form1.name.value;
var password=document.form1.password.value;

if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;
  }else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false; 
}
}