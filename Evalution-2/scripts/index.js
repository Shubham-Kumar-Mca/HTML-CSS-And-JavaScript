//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit", displatTable);

let ProductData = JSON.parse(localStorage.getItem("data")) || [];


function displatTable(event) {
    event.preventDefault();

    let productDetails = {
        Brand: document.querySelector("#product_brand").value,

        Name: document.querySelector("#product_name").value,

        Price: document.querySelector("#product_price").value,

        Image: document.querySelector("#product_image").value
    }

    
    ProductData.push(productDetails)
    localStorage.setItem("data", JSON.stringify(ProductData))
    window.location.reload()



}