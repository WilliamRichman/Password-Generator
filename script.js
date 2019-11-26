
//form data
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const specialEl = document.getElementById('special');
const numberEl = document.getElementById('number');
const generateEl = document.getElementById('generate');
const clipEl = document.getElementById('clip');


const randomFunct = {
    lower: getlower,
    upper: getupper,
    number: getnumber,
    special: getSpcChat
};
//Generate event listener 
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasSpecial = specialEl.checked;
    const hasNumber = numberEl.checked;


    resultEl.innerText = generatePassword(
        length,
        hasLower,
        hasUpper,
        hasSpecial,
        hasNumber
    );
});

//copy password to clipboard
clipEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password Copied to Clipboard!');
})

//Generate password function
function generatePassword(length, lower, upper, number, special) {
    //1. Init pw var
    //2. filter out unchecked types
    //3. loop over the length call generator function for yeach type
    //4. add final password to the password var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + special;

    const typesArr = [{ lower }, { upper }, { number }, { special }].filter; (item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.array.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunct[funcName]();
        });
    }


    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}


// All of these will be inclosed in a master function 
//For Williams Number Generator 
//Link to charcode http://www.net-comber.com/charset.html
//lower case a-z is 97 to 122
//upper case is 65 to 90
//0-9 is 48 to 57
//Special Characters 33 to 42 did not include them all 


function getlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getupper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function getSpcChat() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}


