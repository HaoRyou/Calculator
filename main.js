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