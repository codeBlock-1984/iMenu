
window.onload = () => {
   const signIn = document.getElementById("signIn-box");
   const login = document.getElementById("login-box");
    // Validate email input and check that no field is empty
    document.getElementById("loginButton").onclick = () => {
      let email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
      if (document.getElementById("loginEmail").val() == '' || document.getElementById("loginPassword").val() == '') {
        alert("All fields are required!");
      } else if (!(document.getElementById("loginEmail").val()).match(email)) {
        alert("Please enter a valid email!");
      } else {
        alert("You have been successfully logged in!");
        document.getElementById("loginForm").reset();
      }
    }
    document.getElementById("regButton").onclick = () => {
      var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
      if (document.getElementById("regName").val() == '' || document.getElementById("regEmail").val() == '' || document.getElementById("regPassword").val() == '' || document.getElementById("regPhone").val() == '') {
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
