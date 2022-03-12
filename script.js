var password = document.getElementById("password");
var psswrd_range_slider;
var psswrd_limit;
var passwordLength = 50;


window.onload = (event) => {
    console.log('hello world');
    psswrd_range_slider = document.getElementById("psswrd_range_slider");
    psswrd_limit = document.getElementById("psswrd_limit");


    psswrd_range_slider.addEventListener("input", OutputPsswrdLimit);
    function OutputPsswrdLimit() {
        psswrd_limit.innerHTML = psswrd_range_slider.value;
        passwordLength = psswrd_range_slider.value;
    }


    generatePsswrd(passwordLength);

};

/* Function to generate combination of password */
function generatePsswrd(passwordLength) {
    console.log(passwordLength);
    var chars;
    var default_chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var custom_chars;
    var password = "";
    var psswrd_lowercase = "abcdefghijklmnopqrstuvwxyz";
    var psswrd_numbers = "0123456789";
    var psswrd_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var psswrd_symbols = "!@#$%^&*()";


    // Need event listenser to set checked and unchecked atrribute.

    var include_lowercase = document.getElementById("psswrd_lowercase").checked;
    var include_uppercase = document.getElementById("psswrd_uppercase").checked;
    var include_numbers = document.getElementById("psswrd_numbers").checked;
    var include_symbols = document.getElementById("psswrd_symbols").checked;

    if ((include_lowercase = true) && (include_uppercase = true) && (include_numbers = true) && (include_symbols = true)) {
        chars = default_chars;
    }
    else () => {
        // return custom_chars;
        return default_chars;
    }



    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;

    // just in-case if i use <textarea> in HTML
    // if (passwordLength >= 300) {
    //     document.getElementById("password").style.fontSize = "12px";
    // } else if (passwordLength >= 250) {
    //     document.getElementById("password").style.fontSize = "14px";
    // } else if (passwordLength >= 200) {
    //     document.getElementById("password").style.fontSize = "16px";
    // } else if (passwordLength >= 150) {
    //     document.getElementById("password").style.fontSize = "18px";
    // } else if (passwordLength >= 100) {
    //     document.getElementById("password").style.fontSize = "20px";
    // } else if (passwordLength >= 50) {
    //     document.getElementById("password").style.fontSize = "22px";
    // }
}


function copyPsswrd() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}