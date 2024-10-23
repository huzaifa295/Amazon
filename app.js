// Sign In 

function SignupPage(){
    console.log("Hello")
    window.location.href='./signup.html'
}
function Login(){
    var user_email= document.getElementById('user_email').value
    var user_pass= document.getElementById('user_pass').value
    console.log(user_email,user_pass)
    if(!user_email || !user_pass){
        alert("Please fill required fields")
    }
    if(user_email=='muhammadhuzaifa9582@gmail.com' && user_pass=='huzaifa295'){
        window.location.href='./home.html'
    }else{
        alert("Incorrect email and passward")
    }
}

// SignUp 

function OnSubmit(){
    var name= document.getElementById('name').value
    var email= document.getElementById('email').value
    var pass= document.getElementById('pass').value
    console.log(name,email,pass)
    if((!name || !email || !pass)){
        alert("Please fill required fields")
        return
    }
    var email_check=email.indexOf("@gmail.com")
    if(email_check==-1){
        alert("Invalid email")
        return
    }
    // pass= pass.length
    console.log(pass)
    if(pass.length<4){
        alert("Passward must be contains 4 digits")
        return
    }
    if(!(email_check==-1) && !(pass<4)){
        window.location.href='./home.html'
    }
}