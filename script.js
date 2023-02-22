function displayNumber(num){
    result.value+=num;
    console.log(num);
}
function clearbox() {
    result.value=""
}
function evaluateExpression() {
    result.value=eval(result.value)
}
function removelastItem(){
    result.value=result.value.slice(0,-1)
}