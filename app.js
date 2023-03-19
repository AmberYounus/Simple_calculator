function getNumber(digit){
    var result = document.getElementById('result')
   result.value += digit;
}
function clearResult(){
    var result = document.getElementById('result');
    result.value = " ";
}
function getResult(){
    var result = document.getElementById('result');
    result.value =eval(result.value)
}

function cleanScreen(){
    var result = document.getElementById('result');
    result.value = result.value.slice(0,-1);
} 