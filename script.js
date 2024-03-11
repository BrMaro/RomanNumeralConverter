const inputElement = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output")
const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

function largestNumberLessThan(number) {
    let lessThan = 0
    for (let key in romanNumerals){
        if (number > parseInt(key)){
            lessThan = parseInt(key);
        } else {
            // console.log("Returning Phase: ",lessThan,key,number);
            return lessThan;
        }
    }
}

const separatePlaceValues = (num) => {
    let numArr = [...num].reverse();
    let separatedNumArr = numArr.map((element,index)=>{
            return element + "0".repeat(index);
        }
    )
    return separatedNumArr.reverse();
}


const checkInputValue = () => {
    console.log("Clicked")
    if (inputElement.value.trim()  === ""){
        let result = "Please enter a valid number";
        output.textContent = result;
    } else if (parseInt(inputElement.value)===-1){
        let result = "Please enter a number greater than or equal to 1";
        output.textContent = result;
    } else if(parseInt(inputElement.value)>=4000){
        let result = "Please enter a number less than or equal to 3999";
        output.textContent = result;
    } else{
        console.log("Converting....")
        convertToRoman();
    }
}

const convertToRoman = () => {
    let result=""
    let num = inputElement.value;
    let numArr = [...separatePlaceValues(inputElement.value)];
    console.log(`Convert ${num} to roman numbers`);
    console.log(numArr);
    // console.log(largestNumberLessThan(num))
    for(let i of numArr){
        if (romanNumerals.hasOwnProperty(i)){
            result += romanNumerals[i];
        } else if(parseInt(i) === 0){
            continue;
        } else {
            if (parseInt(i) > parseInt("5" + "0".repeat(String(i).length-1))){
                console.log(romanNumerals[parseInt("5" + "0".repeat(String(i).length-1))]);
                result += romanNumerals[(String(parseInt("5" + "0".repeat(String(i).length-1))))]
            }else{
                result += romanNumerals[(String(parseInt("1" + "0".repeat(String(i).length-1))))]
            }

            while (true){
                const numToSubtract = parseInt("1" + "0".repeat(String(i).length-1))
                i = parseInt(i) - numToSubtract;
                result += romanNumerals[numToSubtract];
                
                console.log(i,numToSubtract,result);
                if (romanNumerals.hasOwnProperty(String(i))){
                    break;
                }
            }
        }
    }
    output.textContent = result;

}

convertButton.addEventListener('click',checkInputValue);
    

