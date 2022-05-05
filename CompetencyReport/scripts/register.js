function User(fName,lName,email,age,address,color,phone,payment,password){
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.age = age;
    this.address = address;
    this.color = color;
    this.phone = phone;
    this.payment = payment;
    this.password = password;
}

function submitForm(event) {
    event.preventDefault();

    let fName = $("#txtFname").val();
    let lName = $("#txtLname").val();
    let email = $("#txtEmail").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let color = $("#txtColor").val();
    let phone = $("#txtPhone").val();
    let payment = $("#txtPayment").val();
    let password = $("#txtPassword").val();

    let user = new User(fName,lName,email,age,address,color,phone,payment,password);
    console.log(user);
    clearInputs();
    saveUser(user);
    window.location.replace("../users.html");
}

function clearInputs(){
    $("input").val("");
}

