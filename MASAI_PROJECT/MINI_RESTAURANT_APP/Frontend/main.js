function Register(event) {
    event.preventDefault()
    let singup_data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
    }
    singup_data = JSON.stringify(singup_data);

    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: 'POST',
        body: singup_data,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((responce) => {
        return responce.json();
    }).then((responce) => {
        console.log(responce);
    }).catch((err) => {
        console.log(err);
    });
}

function Login(event) {
    event.preventDefault();
    let login_data = {
        username: document.getElementById("username-1").value,
        password: document.getElementById("password-1").value
    }
    login_data1 = JSON.stringify(login_data);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: 'POST',
        body: login_data1,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((responce) => {
        return responce.json();
    }).then((responce) => {
        console.log(responce);
        getProfile(responce,login_data)
    }).catch((err) => {
        console.log(err);
    });
}

function getProfile({token},{username}){
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }).then((responce)=>{
        return responce.json();
    }).then((responce)=>{
        console.log(responce)
    }).catch((err)=>{
        console.log(err.message);
    })
}