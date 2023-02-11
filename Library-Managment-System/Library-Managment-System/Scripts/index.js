// you can write your js code here
document.querySelector("form").addEventListener("submit", getData);


function getData(event) {
    event.preventDefault();

    let objLibrary = {
        Libraryname: document.querySelector("#name").value,
        bookAuthorName: document.querySelector("#author").value,
        bookDescription: document.querySelector("#desc").value,
        bookNameAdded: document.querySelector("#added").value,
        bookCategory: document.querySelector("#category").value,
        bookPrice: document.querySelector("#price").value,
    }
    var BookData = [];
    BookData = JSON.parse(localStorage.getItem("book-list")) || []
    console.log(BookData);
    BookData.push(objLibrary);

    localStorage.setItem("book-list", JSON.stringify(BookData));
    window.location.reload()

}