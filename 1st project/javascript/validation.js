function vald() { 
    var name = document.input["RegForm"]["Name"]; 
    var email = document.input["RegForm"]["Email"]; 
    var password = document.input["RegForm"]["password"]; 

    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (password.value == "") { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 

    return true; 
} 