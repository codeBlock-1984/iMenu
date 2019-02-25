
window.onload = () => {
   const signIn = document.getElementById("signIn-box");
   const login = document.getElementById("login-box");

    document.getElementById("regButton").onclick = () => {
      const email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
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
const switchDisplay = (hideMe, showMe) => {
  hideMe.style.display = "none";
  showMe.style.display = "block";
}


const userLoginButton = document.getElementById('loginButton');
userLoginButton.onclick = () => {
  const userLoginEmail = document.getElementById('loginEmail').value;
  const userLoginPassword = document.getElementById('loginPassword').value;

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
