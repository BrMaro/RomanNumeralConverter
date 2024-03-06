const inputElement = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output")

const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const checkInputValue = () => {
    if (parseInt(inputElement.value ) === ""){
        alert("Please enter a valid number");
    } else if (parseInt(inputElement.value)>=0){
        alert("Please enter a number greater than or equal to 1");
    } else if(parseInt(inputElement.value)>=4000){
        alert("Please enter a number less than or equal to 3999")
    } else{
        convertToRoman();
    }
}

const convertToRoman = () => {
    const result=""
    
    for(let symbol in romanNumerals){
        while(num >= romanNumerals[symbol])
            result+=symbol;
            num -= romanNumerals[symbol];
    }
    output.textContent+=result;
}

    

