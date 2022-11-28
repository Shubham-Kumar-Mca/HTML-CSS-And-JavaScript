const textCalculator = (income,saving)=>{
    let tax = 0

    //No tax
    if(income<=250000){
        tax = 0

        //10% tax
    }else if(income<=500000){
        saving = saving / 2;
        income = income - saving;
        tax = (income * 10) / 100;

        //20% tax
    }else if(income<=1000000){
        saving = (saving * 30) / 100;
        income = income - saving;
        tax = (income * 20) / 100;
        
        //30% tax
    }else if(income>1000000){
        saving = (saving * 10) / 100;
        income = income - saving;
        tax = (income * 30) / 100;
    }
    return tax;
}
console.log(`tax is :-  ${textCalculator(300000,50000)}`);