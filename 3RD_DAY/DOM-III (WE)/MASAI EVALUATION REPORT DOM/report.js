// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks


document.querySelector("form").addEventListener("submit",masaiEvalutionReport);
function masaiEvalutionReport(event){
    event.preventDefault();

    let Image = document.querySelector("#image").value;
    let pic = document.createElement("img");
    pic.setAttribute("src",Image);
    let Name = document.querySelector("#name").value;
    let Batch = document.querySelector("#batch").value;
    let DSA = document.querySelector("#dsa").value;
    let Skillathon = document.querySelector("#cs").value;
    let Coding = document.querySelector("#coding").value;
    

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.append(pic);
    let td2 = document.createElement("td");
    td2.innerText = Name
    let td3 = document.createElement("td");
    td3.innerText = Batch
    let td4 = document.createElement("td");
    td4.innerText = DSA
    let td5 = document.createElement("td");
    td5.innerText = Skillathon
    let td6 = document.createElement("td");
    td6.innerText = Coding
    let td7 = document.createElement("td");
    let obtained_score = Number(DSA) + Number(Skillathon) + Number(Coding);
    let percentage = (obtained_score/30)*100;
    td7.innerText = percentage.toFixed(3)
    let td8 = document.createElement("td");
    if(percentage>50){
        td8.innerText = "Regular";
        td8.style.backgroundColor = "green"
    }else{
        td8.innerText = "Async";
        td8.style.backgroundColor = "red"
    }
    let td9 = document.createElement("td");
    td9.innerText = "DELETE"
    td9.style.backgroundColor = "red"
    td9.addEventListener("click",myFun);
    function myFun(){
        tr.remove();
    }

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    document.querySelector("tbody").append(tr)
}
