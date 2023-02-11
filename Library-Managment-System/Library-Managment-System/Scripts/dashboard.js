// you can write your js code here

var BookDataFromLS = JSON.parse(localStorage.getItem("book-list")) || [];
var BookMarksData = JSON.parse(localStorage.getItem("bookmark-list")) || [];
var BuyListData = JSON.parse(localStorage.getItem("buy-list")) || [];
let count = document.getElementById("book-count")
count.innerText = BookDataFromLS.length;

displayTable(BookDataFromLS);

function displayTable(BookDataFromLS) {
    BookDataFromLS.forEach((element, index) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = element.Libraryname;

        let td2 = document.createElement("td");
        td2.innerText = element.bookAuthorName;

        let td3 = document.createElement("td");
        td3.innerText = element.bookDescription;

        let td4 = document.createElement("td");
        td4.innerText = element.bookNameAdded;

        let td5 = document.createElement("td");
        td5.innerText = element.bookCategory;

        let td6 = document.createElement("td");
        td6.innerText = "Buy";
        td6.style.backgroundColor = "green"
        td6.style.color = "white"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", ()=>BuyFun(element,index))

        let td7 = document.createElement("td");
        td7.innerText = "Added";
        td7.style.color = "white"
        td7.style.backgroundColor = "red"
        td7.style.cursor = "pointer"
        td7.addEventListener("click", ()=>AddedFun(element,index))

        let td8 = document.createElement("td");
        td8.innerText = element.bookPrice;

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        document.querySelector("tbody").append(tr);
        
    });
}

function BuyFun(element,index){
    BuyListData.push(element)
    localStorage.setItem("buy-list", JSON.stringify(BuyListData))
    let bookList  = BookDataFromLS.filter((item, i)=>i !== index)
    localStorage.setItem("book-list", JSON.stringify(bookList))
    window.location.reload()
}

function AddedFun(element,index){
    BookMarksData.push(element)
    localStorage.setItem("bookmark-list", JSON.stringify(BookMarksData))
    let book  = BookDataFromLS.filter((item, i)=>i !== index)
    localStorage.setItem("book-list", JSON.stringify(book))
    window.location.reload()
}