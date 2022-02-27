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
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;


    if (passwordLength >= 300) {
        document.getElementById("password").style.fontSize = "6px";
    } else if (passwordLength >= 250) {
        document.getElementById("password").style.fontSize = "8px";
    } else if (passwordLength >= 200) {
        document.getElementById("password").style.fontSize = "10px";
    } else if (passwordLength >= 150) {
        document.getElementById("password").style.fontSize = "12px";
    } else if (passwordLength >= 100) {
        document.getElementById("password").style.fontSize = "14px";
    } else if (passwordLength >= 50) {
        document.getElementById("password").style.fontSize = "16px";
    }
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