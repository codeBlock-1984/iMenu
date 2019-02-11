
window.onload = () => {
   const signIn = document.getElementById("signIn-box");
   const login = document.getElementById("login-box");
    // Validate email input and check that no field is empty
    /*
    document.getElementById("loginButton").onclick = () => {
      let email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
      if (document.getElementById("loginEmail").value() == '' || document.getElementById("loginPassword").val() == '') {
        alert("All fields are required!");
      } else if (!(document.getElementById("loginEmail").val()).match(email)) {
        alert("Please enter a valid email!");
      } else {
        alert("You have been successfully logged in!");
        document.getElementById("loginForm").reset();
      }
    }
    */
    document.getElementById("regButton").onclick = () => {
      var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
      if (document.getElementById("regName").value == '' || document.getElementById("regEmail").value == '' || document.getElementById("regPassword").value == '' || document.getElementById("regPhone").value == '') {
        alert("All fields are required!");
      } else if (!(document.getElementById("regEmail").val()).match(email)) {
        alert("Please enter a valid email!");
      } else {
        alert("Account creation successful. You can now login!");
        document.getElementById("regForm").reset();
        switchDisplay(signIn, login);
      }
    }
    // Switch to sign up form
    document.getElementById("signup").onclick = () => {
      switchDisplay(login, signIn);
    }
    // Switch to login form
    document.getElementById("signin").onclick = () => {
      switchDisplay(signIn, login);
    };

}
// function for toggling between login and signup
function switchDisplay(hideMe, showMe) {
  hideMe.style.display = "none";
  showMe.style.display = "block";
}


var userLoginButton = document.getElementById('loginButton');
userLoginButton.addEventListener('click', userLogin);

function userLogin(){
var userLoginEmail = document.getElementById('loginEmail').value;
var userLoginPassword = document.getElementById('loginPassword').value;

if(userLoginEmail =='' || userLoginPassword ==''){
    alert('Both Fields are required!');
  } else {
    userLoginEmail.toLowerCase();
    userLoginPassword.toLowerCase();
    if(userLoginEmail == 'admin@admin.com' && userLoginPassword == 'admin2019'){
      document.getElementById('loginForm').submit();
    } else {
      alert('Incorrect details supplied!');
    }
  }
}
