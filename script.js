

let id=(id)=> document.getElementById(id);

let classes=(clas)=> document.getElementsByClassName(clas);

let username=id("username"),
    email=id("email"),
    password=id("password"),
    confirmpassword=id("confirmpassword"), 
    form=id("btn"),

    errormsg=classes("error");
    failicon=classes("fail-icon"),
    successicon=classes("success-icon");


    
   

    let engine=(id,serial,message)=>{

     if(id.value.trim()==="")
     {
        console.log(username.value.trim())
        errormsg[serial].innerHTML=message;
        id.style.border="2px solid red";
        
        // icons
        failicon[serial].style.opacity='1';
        successicon[serial].style.opacity='0';
     }
     else{
        errormsg[serial].innerHTML="";
        id.style.border="2px solid green";


        // icons
        failicon[serial].style.opacity='0';
        successicon[serial].style.opacity='1';
     }

    }

    

    let eng=(id,serial,message,mess)=>{

      if( (id.value.trim()===""))
      {
         errormsg[serial].innerHTML=message;
         id.style.border="2px solid red";
         
 
         // icons
         failicon[serial].style.opacity='1';
         successicon[serial].style.opacity='0'; 
      }

       else if( password.value !== confirmpassword.value){

         errormsg[serial].innerHTML=mess;
         id.style.border="2px solid red";
         console.log(password.value)
         console.log(confirmpassword.value)
        
         
         // icons
         failicon[serial].style.opacity='1';
         successicon[serial].style.opacity='0';
         
      }
   
      else{  
         console.log(password.value)
         console.log(confirmpassword.value)
         errormsg[serial].innerHTML="";
         id.style.border="2px solid green";
         // icons
         failicon[serial].style.opacity='0';
         successicon[serial].style.opacity='1'; 
      }
 
     }


    form.addEventListener("submit",(event)=>{
      event.preventDefault();

      
      engine(username,0,"username can't be blank");
      engine(email,1,"Email can't be blank");
      // engine(password,2,"Password can't be blank");
      // engine(confirmpassword,3,"confirmpassword can't be blank");
      eng(password,2,"Password can't be blank","password does't match");
      eng(confirmpassword,3,"confirmpassword can't be blank","confirmpassword does't match");

  })

   