//For Williams Number Generator 
//Link to charcode http://www.net-comber.com/charset.html
//lower case a-z is 97 to 122
//upper case is 65 to 90
//0-9 is 48 to 57


function getlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getupper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


console.log(getnumber());