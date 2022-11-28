document.querySelector("form").addEventListener("submit", myFunction);
let getUserData = JSON.parse(localStorage.getItem("userData")) || [];
let x = 1;

function myFunction(event) {
    event.preventDefault()

    let isTrue = 0;
    let Email = document.querySelector("#email").value;
    let Password = document.querySelector("#password").value;

    getUserData.forEach(element => {
        let EmailPri = element.Email;
        let PasswordPri = element.Password;

        if (EmailPri == Email && PasswordPri == Password) {
            isTrue = true;
        }
    });

    if (isTrue) {
        alert("Login Successfully")
        window.location.href="index.html";
        
    } else {
        alert("invalid Credentials")
        
    }


}