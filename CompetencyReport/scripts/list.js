function displayUsers(users){
    users.forEach(user => {

        tableBody = $('#usersTable tbody');
        tableBody.append("<tr><td>"+user.fName+"</td><td>"+user.lName+"</td><td>"+user.email+"</td><td>"+user.age+"</td><td>"+user.address+"</td><td>"+user.color+"</td><td>"+user.phone+"</td><td>"+user.payment+"</td><td>"+user.password+"</td></tr>");
    });
}

function init(){
    console.log("listing users");
    let users=readUsers();
    displayUsers(users);
}

window.onload=init;