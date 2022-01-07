function displayNum(num){
    result.value+=num;
}

function clearBox(){
    result.value="";
}

function evaluateExpression(){
    /*
    let currentValue=result.value;
    let res = eval(currentValue);
    result.value=res;
    */
   result.value=eval(result.value);
}

function deleteFun(){
    let currentValue = String(result.value); // Converting number to string, because slice is a method of string
    let currentValueLength = currentValue.length;
    // console.log(currentValue);
    result.value = currentValue.slice(0,currentValueLength-1);    
}