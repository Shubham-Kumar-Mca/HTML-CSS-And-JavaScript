// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

import appendData from "./appendData.js"
let news = JSON.parse(localStorage.getItem("news"));


let container = document.getElementById("result");
let display = (element)=>{
    let img = document.createElement("img");
    img.src=element.urlToImage

    let h2Tag = document.createElement("h2");
    h2Tag.innerText = element.title

    let pTag = document.createElement("p");
    pTag.innerText = element.description;

    let divBox = document.createElement("div");
    divBox.setAttribute("class","news");

    divBox.append(img,h2Tag,pTag);
    container.append(divBox)
}
display(news);
