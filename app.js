// Sign In

function SignupPage() {
  console.log("Hello");
  window.location.href = "./signup.html";
}
function Login() {
  var user_email = document.getElementById("user_email").value;
  var user_pass = document.getElementById("user_pass").value;
  console.log(user_email, user_pass);
  if (
    user_email == "muhammadhuzaifa9582@gmail.com" &&
    user_pass == "huzaifa295"
  ) {
    window.location.href = "./home.html";
  }
  if (!user_email || !user_pass) {
    alert("Please fill required fields");
    return;
  }
  if (user_pass != "huzaifa295") {
    var user_pass = (document.getElementById("user_pass").style.border =
      "1px solid red");
    var user_pass = (document.getElementById("user_pass").placeholder =
      "Wrong passward!");
    var user_pass = (document.getElementById("user_pass").value = "");
    var user_pass = document.getElementById("user_pass").classList.add("error");
  } else {
    var user_pass = (document.getElementById("user_pass").style.border =
      "1px solid gray");
    var user_pass = (document.getElementById("user_pass").placeholder =
      "Enter your passward");
  }
  if (user_email != "muhammadhuzaifa9582@gmail.com") {
    var user_email = (document.getElementById("user_email").style.border =
      "1px solid red");
    var user_email = (document.getElementById("user_email").placeholder =
      "Invalid email address");
    var user_email = (document.getElementById("user_email").value = "");
    var user_email = document
      .getElementById("user_email")
      .classList.add("error");
  } else {
    var user_email = (document.getElementById("user_email").style.border =
      "1px solid gray");
    var user_email = (document.getElementById("user_email").placeholder =
      "Enter your email address");
  }
}

// SignUp

function OnSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  console.log(name, email, pass);
  if (!name || !email || !pass) {
    alert("Please fill required fields");
    return;
  }
  var email_check = email.indexOf("@gmail.com");
  if (email_check == -1) {
    var email = (document.getElementById("email").style.border =
      "1px solid red");
    var email = (document.getElementById("email").placeholder =
      "Invalid email address");
    var email = (document.getElementById("email").value = "");
    var email = document.getElementById("email").classList.add("error");
  } else {
    var email = (document.getElementById("email").style.border =
      "1px solid gray");
    var email = (document.getElementById("email").placeholder =
      "Enter your email address");
  }
  if (pass.length < 4) {
    var pass = (document.getElementById("pass").style.border = "1px solid red");
    var pass = (document.getElementById("pass").placeholder =
      "Passward must be contains 4 digits");
    var pass = (document.getElementById("pass").value = "");
    var pass = document.getElementById("pass").classList.add("error");
  } else {
    var pass = (document.getElementById("pass").style.border =
      "1px solid gray");
    var pass = (document.getElementById("pass").placeholder =
      "Enter your passward");
  }
  // if(email_check==-1 && pass.length<4){
  //     var email= document.getElementById('email').style.border='1px solid red'
  //     var email= document.getElementById('email').placeholder='Invalid email address'
  //     var email= document.getElementById('email').value=''
  //     var email= document.getElementById('email').classList.add('error')

  //     var pass= document.getElementById('pass').style.border='1px solid red'
  //     var pass= document.getElementById('pass').placeholder='Passward must be contains 4 digits'
  //     var pass= document.getElementById('pass').value=''
  //     var pass= document.getElementById('pass').classList.add('error')
  // }
  if (!(email_check == -1) && !(pass.length < 4)) {
    window.location.href = "./home.html";
  }
}
