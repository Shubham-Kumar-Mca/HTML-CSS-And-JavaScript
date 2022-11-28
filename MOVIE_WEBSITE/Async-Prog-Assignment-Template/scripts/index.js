let MOVIEDEtailsStore = JSON.parse(localStorage.getItem("movies")) || [];

displayData(MOVIEDEtailsStore)
function slideShow(){
    let container = document.getElementById("slideshow");
    let i = 0;
    setInterval(function(){
        let images = MOVIEDEtailsStore[i].Images;

        if(i==MOVIEDEtailsStore.length-1){
            i = 0
            
        }
        let img = document.createElement("img");
        img.src = images;
        container.innerHTML = null;
        container.append(img)
        i++;
    },2000)    
}
slideShow()

document.getElementById("sort_lh").addEventListener("click",sortHigh)
function sortHigh(){
    MOVIEDEtailsStore.sort(function(a,b){
        return +b.IMD_Rating - +a.IMD_Rating;
    });
    displayData(MOVIEDEtailsStore)
}

document.getElementById("sort_hl").addEventListener("click",sortLow)
function sortLow(){
    MOVIEDEtailsStore.sort(function(a,b){
        return +a.IMD_Rating - +b.IMD_Rating;
    });
    displayData(MOVIEDEtailsStore)
}


function displayData(MOVIEDEtailsStore){
    document.getElementById("movies").innerHTML = ""
    MOVIEDEtailsStore.forEach(element => {
        let divBox = document.createElement("div");

        let img = document.createElement("img");
        img.src = element.Images;

        let h2Tag  = document.createElement("h2");
        h2Tag.innerText = element.Name;

        let p1Tag  = document.createElement("p");
        p1Tag.innerText = `Release Date :- ${element.Release_Date}`;
        
        let p2Tag  = document.createElement("p");
        p2Tag.innerText = `IMD Rating :- ${element.IMD_Rating}`;

        let btn = document.createElement("button");
        btn.innerText = "Book Now"

        divBox.append(img,h2Tag,p1Tag,p2Tag,btn)

        document.getElementById("movies").append(divBox)

    });
}
