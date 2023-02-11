// you can write your js code here

var BookMarksDataFromLS = JSON.parse(localStorage.getItem("bookmark-list")) || [];
displayTable(BookMarksDataFromLS);

function displayTable(BookMarksDataFromLS) {
    BookMarksDataFromLS.forEach((element, index) => {
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
        td5.innerText = element.bookPrice;

        let td6 = document.createElement("td");
        td6.innerText = "Remove";
        td6.style.color = "white"
        td6.style.backgroundColor = "red"
        td6.style.cursor = "pointer"
        td6.style.fontWeight = "bold"
        td6.style.fontSize = "18px"
        td6.addEventListener("click", () => RemoveFunc(element, index))

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr);

    });
}

function RemoveFunc(element, index) {
    const filterData = BookMarksDataFromLS.filter((_, i) => i !== index)
    localStorage.setItem("bookmark-list", JSON.stringify(filterData));
    window.location.reload()
}