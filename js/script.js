window.addEventListener('load', start);

//Ranges
let rangeColor1 = document.querySelector('#rangeColor1');
let rangeColor2 = document.querySelector('#rangeColor2');
let rangeColor3 = document.querySelector('#rangeColor3');

//Text
let textColor1 = document.querySelector('#textColor1');
let textColor2 = document.querySelector('#textColor2');
let textColor3 = document.querySelector('#textColor3');


function start(){
    rangeColor1.addEventListener('input', handleRangeValue1);
    rangeColor2.addEventListener('input', handleRangeValue2);
    rangeColor3.addEventListener('input', handleRangeValue3);
}

function handleRangeValue1(){
    let divCor1 = document.getElementById('divCor1');
    divCor1.style.backgroundColor = `rgb( ${rangeColor1.value} ,0 ,0 )`;

    textColor1.value = rangeColor1.value;
    colorRGB();
}

function handleRangeValue2(){
    let divCor2 = document.getElementById('divCor2');
    divCor2.style.backgroundColor = `rgb( 0, ${rangeColor2.value}, 0)`;

    textColor2.value = rangeColor2.value;
    colorRGB();
}

function handleRangeValue3(){
    let divCor3 = document.getElementById('divCor3');
    divCor3.style.backgroundColor = `rgb( 0, 0, ${rangeColor3.value} )`;

    textColor3.value = rangeColor3.value;
    colorRGB();
}

function colorRGB(){
    let divRGB = document.getElementById('divRGB');
    divRGB.style.backgroundColor = `rgb( ${rangeColor1.value} , ${rangeColor2.value} , ${rangeColor3.value} )`;
}
