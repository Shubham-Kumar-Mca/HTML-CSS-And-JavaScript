document.querySelector("form").addEventListener("submit", dsaRevision);
let queArr = JSON.parse(localStorage.getItem("setData"))||[];
displayData(queArr);

function dsaRevision(event) {
    event.preventDefault();
    let tableObj = {
        queTitle: document.querySelector("#title").value,
        queLink: document.querySelector("#link").value,
        seletDefi: document.querySelector("#difficulty").value
    }
    queArr.push(tableObj);
    displayData(queArr);
    localStorage.setItem("setData",JSON.stringify(queArr))
}

function displayData(queArr){
    document.querySelector("tbody").innerHTML = "";
    queArr.forEach(element => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = element.queTitle;

        let td2 = document.createElement("td");
        td2.innerText = element.queLink;

        let td3 = document.createElement("td");
        td3.innerText = element.seletDefi;

        let td4 = document.createElement("td");
        if(element.seletDefi=="Medium" || element.seletDefi=="Hard"){
            td4.innerText = "Yes";
        }else{
            td4.innerText = "No";
        }


        tr.append(td1,td2,td3,td4)
        document.querySelector("tbody").append(tr)
    });

    
}
