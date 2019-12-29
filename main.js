//generate 
function generate() {
    //set password length and complex
    let complex = document.getElementById('inbox').value;

    //password values 
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()=+?";

    let password = "";

    for (var i = 0; i <= complex; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to text box
    document.getElementById('display').value = password;
}

//set default length to 8
document.getElementById('length').innerHTML = "Enter: Length";


//function to set length to slider inbox
document.getElementById('inbox').oninput = function () {
    if (document.getElementById('inbox').value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("inbox").value;
    }
    else {
        document.getElementById("Length").innerHTML = "Length: 1";
    }
}

//copy to clipboard 
function clip() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Copied to Clipboard Asshole ")
}