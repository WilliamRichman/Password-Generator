//Dom elements  = sults
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolstEl = document.getElementById('symbolst');
const generateEl = document.getElementById('generate');
const clipEl = document.getElementById('clip');





const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getSymbols
};

generateEl.addEventListener('click', () => {
    const length1 = lengthEl.value;

    console.log(length);
});

//Generator function 
//net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getSymbols() {
    return String.fromCharCode(Math.floor(Math.random() * 9) + 33)
}

console.log(getSymbols());