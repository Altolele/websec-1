function calculator() {
    let value1 = parseFloat(document.getElementById('val1').value);
    let value2 = parseFloat(document.getElementById('val2').value);
    let operations = document.getElementById('operation').value;
    if(isNaN(value1) || isNaN(value2)){
        alert('Please, enter the values in the fields');
        return;
    }
    document.getElementById('val1').oninvalid = function(event) {
        event.target.setCustomValidity('allo ');
    }
    let result, res1, res2;
    res1 = document.getElementById('res1');
    res2 = document.getElementById('res2');
    switch(operations){
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if(Math.abs(value2) < Number.EPSILON){
                alert('You can not divide by zero');
                return;
            }
            result = value1 / value2;
            break;
    }
    res1.innerHTML = res2.innerHTML;
    res2.innerHTML = `${value1} ${operations} ${value2} = ${result}`;
}