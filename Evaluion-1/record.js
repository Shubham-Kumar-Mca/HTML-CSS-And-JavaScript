// fill in javascript code here

document.querySelector("form").addEventListener("submit",myFunction);
function myFunction(event){
    event.preventDefault()
    
    let name = document.querySelector("#name").value;
    let EmpId = document.querySelector("#employeeID").value;
    let Department = document.querySelector("#department").value;
    let Experience = document.querySelector("#exp").value;
    let Email = document.querySelector("#email").value;
    let Mobile_Number = document.querySelector("#mbl").value;
    
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = name;

    let td2 = document.createElement("td");
    td2.innerText = EmpId;

    let td3 = document.createElement("td");
    td3.innerText = Department;

    let td4 = document.createElement("td");
    td4.innerText = Experience;

    let td5 = document.createElement("td");
    td5.innerText = Email;

    let td6 = document.createElement("td");
    td6.innerText = Mobile_Number;

    let td7 = document.createElement("td");
    if(Experience>5){
        td7.innerText = "Senior";
    }else if(Experience>=2 && Experience<=5){
        td7.innerText = "Junior";
    }else{
        td7.innerText = "Fresher";
    }
    let td8 = document.createElement("td");
    td8.innerText = "DELETE";
    td8.style.backgroundColor = "red";
    td8.style.cursor = "pointer";

    td8.addEventListener("click",deleFun)
    function deleFun(){
        tr.remove();
    }


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)



    document.querySelector("tbody").append(tr);
}