// you can write your js code here

var BookListDataFromLS = JSON.parse(localStorage.getItem("buy-list")) || [];
displayTable(BookListDataFromLS);

function displayTable(BookListDataFromLS) {
    BookListDataFromLS.forEach((element, index) => {
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
        td6.innerText = element.bookPrice;

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
        
    });
}