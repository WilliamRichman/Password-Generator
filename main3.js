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
