const timeToSting = (time)=>{
    let str = "";
    let flag = false;
    time = time / 1000;
    if(time >= 3600){
        let temp = Math.floor(time / 3600);
        if(temp == 1){
            str = str + `${temp} hour`;
        }else{
            str = str + `${temp} hour`;
        }
        time = time % 3600;
        flag = true;
    }
    if(time >= 60){
        if(flag){
            str = str + " ";
        }
        let temp = Math.floor(time / 60);
        if(temp == 1){
            str = str + `${temp} minutes`;
        }else{
            str = str + `${temp} minutes`;
        }
        time = time % 60;
        flag = true;
    }
    if(time >= 1){
        if(flag){
            str = str + " ";
        }
        let temp = Math.floor(time);
        if(temp == 1){
            str = str + `${temp} seconds`;
        }else{
            str = str + `${temp} seconds`;
        }
    }
    return str;
    
}
console.log(`${timeToSting(3800000)}`);