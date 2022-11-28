// let arr = JSON.parse(localStorage.getItem("news"))||[];

let appendData = (data,container)=>{
    container.innerHTML = null

    data.forEach(element => {
        let divBox = document.createElement("div");
        divBox.setAttribute("class","news");

        let img = document.createElement("img");
        img.src=element.urlToImage

        let divContent = document.createElement("div");

        let h2Tag = document.createElement("h2");
        h2Tag.innerText = element.title

        let pTag = document.createElement("p");
        pTag.innerText = element.description;

        divContent.append(h2Tag,pTag)
        divBox.append(img,divContent);
        divBox.addEventListener("click",function(){
            localStorage.setItem("news",JSON.stringify(element))
            window.location.href = "news.html";   

        })
        container.append(divBox)
    });
}

export default appendData;