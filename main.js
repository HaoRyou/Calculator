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

function operate(num1,choice, num2){
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