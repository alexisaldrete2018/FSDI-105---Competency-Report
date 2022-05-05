const STORE_KEY = "users";

function saveUser(user){
    let oldData = readUsers();
    oldData.push(user);
    let val =JSON.stringify(oldData);
    localStorage.setItem("users", val)
}

function checkUser(loginUser){
    let users = readUsers();
    let login = false;
    users.forEach(user => {
        if(user.email === loginUser.email && user.password === loginUser.password){
            login = true;
        } 
    });

    if (login){
        alert("Welcome");
        window.location.replace("../users.html");
    } else {
        alert("Wrong User or password. Please try again");   
    }
}

function readUsers(){
    let data = localStorage.getItem(STORE_KEY);
    if(!data){
        return[];
    } else {
        let list = JSON.parse(data);
        return list;
    }
}
