

    var email= document.getElementById("email").Value;
    var form=docment.getElementById("form")
var pass= document.getElementById("pass")Value;
var error= document.getElementById("error");
var text=..;

 form.addEventListener('submit' ,function(event)){

 }
 function formvalidate{
    if( email.indexof("@")==-1){
        text="entar valid email"
    error.innerHTML = text;
    return fales;
    }
    
    else if(pass.value < 8){
        text="entar less 8 "
        error.innerHTML=text;
        return fales;
    }
    
    else{
        alert("Done")
    }
 }





