// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// import getData from "./fetch.js";

import appendData from "./appendData.js"


let container = document.getElementById("results");

async function xyz(){
    const url = `https://masai-api.herokuapp.com/news?q=${localStorage.getItem("query")}`;
    let res = await fetch(url);
    let data = await res.json();
    appendData(data.articles,container);
    // getData(url).then((res)=>{
    //     appendData(res.articles,container);

    // })
}
xyz()