function add (a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(num1, choice, num2){
    if(choice == "*"){
        return multiply(num1,num2);
    }
    else if(choice == "/"){
        return divide(num1,num2);
    }
    else if(choice == "+"){
        return add(num1,num2);
    }
    else if(choice == "-"){
        return subtract(num1-num2);
    }

}

function nextnum(a){
    if(a=='*' || a=='/' || a=='+' || a == '-'){
        
    }
}

const outputs = document.getElementById("Output");

function input(a){
    outputs.value += a;
}

function clear_screen(){
    outputs.value = "";
}

function Finish(){
    try{
        outputs.value = eval(outputs.value);
    }
    catch(error){
        outputs.value = "Error";
    }
}