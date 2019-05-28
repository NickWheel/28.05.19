// let a = document.getElementById("value1").value;
// let b = document.getElementById("value2").value;


// function addValues() {
//     let res = a + b;
//     console.log(res);
//     document.getElementById('show_area').value = res;
// }
// function minusValues() {
//     let res = a - b;
//     console.log(res);
//     document.getElementById('show_area').value = res;
// }

// function getElement() {
//     console.log(res);
//     document.getElementById('show_area').value = res;
// }

let value1 = '';
let value2 = '';
let totalvalue = 0;

function addValue(xox) {
    value1 += xox;
    let textarea = document.getElementById("showArea");
    textarea.value += xox;
}

function getValue() {
    let textarea = document.getElementById("showArea");
    textarea.value = eval(value1);
    value1 = 0;
}


