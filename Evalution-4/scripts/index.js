// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// import getData from "./fetch.js";

import appendData from "./appendData.js"


let container = document.getElementById("results");

let query = document.getElementById("search_input");
query.addEventListener("keypress",(ele)=>{
    if(ele.keyCode == 13){
        localStorage.setItem("query",query.value)

        window.location.href = "./search.html"
    }
})

document.querySelector("#in").addEventListener("click",async()=>{
    cSearch("in")
})

document.querySelector("#ch").addEventListener("click",async()=>{
    cSearch("ch")
})
document.querySelector("#us").addEventListener("click",async()=>{
    cSearch("us")
})
document.querySelector("#uk").addEventListener("click",async()=>{
    cSearch("uk")
})
document.querySelector("#nz").addEventListener("click",async()=>{
    cSearch("nz")
})

let cSearch = async (id)=>{
    const url = `https://masai-api.herokuapp.com/news/top-headlines?country=${id}`;
    let res = await fetch(url);
    let data = await res.json();
    appendData(data.articles,container)
    console.log(data);
    // getData(url).then((res)=>{
    //     appendData(res.articles,container)

    // })
}

cSearch("in")









