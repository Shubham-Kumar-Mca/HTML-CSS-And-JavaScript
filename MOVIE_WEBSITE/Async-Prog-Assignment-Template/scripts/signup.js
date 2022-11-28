document.querySelector("form").addEventListener("submit", myFunction);
let Singup = JSON.parse(localStorage.getItem("userData")) || [];
let x = 1;


function myFunction(event) {
    event.preventDefault();
    let objData = {
        Name: document.querySelector("#name").value,
        Contact: document.querySelector("#contact").value,
        Email: document.querySelector("#email").value,
        Password: document.querySelector("#password").value
    };



    if (objData.Name == "") {
        document.getElementById("nameError").innerText = "Please Fill Your Name";
        document.getElementById("nameError").style.color = "red";
        x = 0
    } else {
        document.getElementById("nameError").innerText = ""
        x = 1
    }

    if (objData.Contact == "") {
        document.getElementById("contactError").innerText = "Please Fill Contact Details";
        document.getElementById("contactError").style.color = "red";
        x = 0
    } else if (objData.Contact.length > 10 || objData.Contact.length < 10) {
        document.getElementById("contactError").innerText = "Contact Details Should be 10 digits";
        document.getElementById("contactError").style.color = "red";
        x = 0
    } else {
        objData.Contact = Number(objData.Contact)
        document.getElementById("contactError").innerText = ""
        x = 1
    }

    if (objData.Email == "") {
        document.getElementById("emailError").innerText = "Please Fill Your Email Id";
        document.getElementById("emailError").style.color = "red";
        x = 0
    } else {
        document.getElementById("emailError").innerText = ""
        x = 1
    }

    if (objData.Password == "") {
        document.getElementById("passwordError").innerText = "Please Fill Your Password";
        document.getElementById("passwordError").style.color = "red";
        x = 0
    } else if (objData.Password.length < 5) {
        document.getElementById("passwordError").innerText = "Password Should be grater than 5 digits";
        document.getElementById("passwordError").style.color = "red";
        x = 0
    } else {
        document.getElementById("passwordError").innerText = ""
        x = 1
    }


    if (x) {
        Singup.push(objData);
        localStorage.setItem("userData", JSON.stringify(Singup))
        window.location.href="login.html";
        return true
    } else {
        return false
    }

}