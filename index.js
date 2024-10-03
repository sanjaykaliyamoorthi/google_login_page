
function bb(){
    var a="nanthini"
    var b="123456"
    var c=document.getElementById("in1").value;
     var d=document.getElementById("in2").value;
    var e=document.getElementById("hh"); 
    var f=document.getElementById("hh2");
    var h=document.getElementById("ca1")
    if (a===c) {
       
         document.getElementById("in1").style.border="2px solid green"
       
    }
    else{
       e.style.color="red"
       e.innerHTML="! your username is invalid"
       document.getElementById("in1").style.border="2px solid red"
       h.style.border="10px soild red"
    }


    if (b===d ) {
        document.getElementById("in2").style.border="2px solid green"
           
        
    } else {
       f.style.color="red"
       f.innerHTML="! your password is invalid"
       document.getElementById("in2").style.border="2px solid red"
     
    }

}  



// }
