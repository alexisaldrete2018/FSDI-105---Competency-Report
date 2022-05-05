function LoginUser(email,password){
    this.email = email;
    this.password = password;
}

function submitLoginForm(event) {
    event.preventDefault();

    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();

    let loginUser = new LoginUser(email,password);

    clearInputs();
    checkUser(loginUser);

    // window.location.replace("../users.html");
}

function clearInputs(){
    $("input").val("");
}

