let getData = async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
    return data.articles;
}

export default getData;