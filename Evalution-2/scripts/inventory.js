let ProductDataFromLS = JSON.parse(localStorage.getItem("data")) || [];

displayTable(ProductDataFromLS);

function displayTable(ProductDataFromLS){
    
    ProductDataFromLS.forEach((element,index) => {
        let divBox = document.createElement("div");

        let img = document.createElement("img");
        let image = element.Image;
        img.setAttribute("src",image);

        let h2Tag = document.createElement("h2");
        h2Tag.innerText = element.Brand;
        h2Tag.style.textAlign = "center"
        h2Tag.style.marginTop = "15px"

        let p1Tag = document.createElement("p");
        p1Tag.innerText = element.Name;
        p1Tag.style.marginTop = "10px";
        p1Tag.style.fontSize = "18px";
        p1Tag.style.fontFamily = "sans-serif";
        p1Tag.style.textAlign = "center";

        let p2Tag = document.createElement("p");
        p2Tag.innerText = `Price :- ${element.Price}`;
        p2Tag.style.marginTop = "8px";
        p2Tag.style.fontSize = "18px";
        p2Tag.style.fontFamily = "sans-serif";
        p2Tag.style.textAlign = "center";

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.style.padding = "10px 20px";
        btn.style.fontSize = "20px";
        btn.style.marginTop = "30px";
        btn.style.marginLeft = "90px"
        btn.style.border = "none";
        btn.style.backgroundColor = "#db3545";
        btn.style.cursor = "pointer";
        btn.addEventListener("click",function(index){
            removeCard(index)
        })

        divBox.append(img,h2Tag,p1Tag,p2Tag,btn)

        document.querySelector("#products_data").append(divBox)

    });
    
}

//Remove Card
function removeCard(index){
    ProductDataFromLS.splice(index,1);
    localStorage.setItem("data",JSON.stringify(ProductDataFromLS));
    window.location.reload();
}



