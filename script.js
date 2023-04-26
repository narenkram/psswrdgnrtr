// Variables
var password = document.getElementById("password");
var psswrd_range_slider;
var psswrd_limit;
var passwordLength = 50;

// Event Listeners
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

// Function to generate password
function generatePsswrd(passwordLength, options = {}) {
    console.log(passwordLength);
    var chars = '';
    var default_chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var custom_chars = '';
    var password = "";
    var psswrd_lowercase = "abcdefghijklmnopqrstuvwxyz";
    var psswrd_numbers = "0123456789";
    var psswrd_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var psswrd_symbols = "!@#$%^&*()";

    // Set default values for options
    options = {
        include_lowercase: true,
        include_uppercase: true,
        include_numbers: true,
        include_symbols: true,
        start_with_letter_only: false,
        no_similar_characters: true,
        no_duplicate_characters: true,
        ...options
    };


    // Update options based on user's input
    options.include_lowercase = document.getElementById("psswrd_lowercase").checked;
    options.include_uppercase = document.getElementById("psswrd_uppercase").checked;
    options.include_numbers = document.getElementById("psswrd_numbers").checked;
    options.include_symbols = document.getElementById("psswrd_symbols").checked;
    options.start_with_letter_only = document.getElementById("psswrd_letter_start").checked;
    options.no_similar_characters = document.getElementById("psswrd_no_similar").checked;
    options.no_duplicate_characters = document.getElementById("psswrd_no_duplicate").checked;

    if (options.include_lowercase) {
        custom_chars += psswrd_lowercase;
    }
    if (options.include_uppercase) {
        custom_chars += psswrd_uppercase;
    }
    if (options.include_numbers) {
        custom_chars += psswrd_numbers;
    }
    if (options.include_symbols) {
        custom_chars += psswrd_symbols;
    }

    // Add first letter if startWithLetter option is true
    if (options.start_with_letter_only) {
        chars = psswrd_lowercase + psswrd_uppercase;
        var firstLetterRandomNumber = Math.floor(Math.random() * psswrd_uppercase.length);
        password += psswrd_uppercase.charAt(firstLetterRandomNumber);
    }

    // Remove similar characters
    if (options.no_similar_characters) {
        custom_chars = custom_chars.replace(/[iIlLoO0]/g, "");
        chars = chars.replace(/[iIlLoO0]/g, "");
    }

    // Remove duplicates
    if (options.no_duplicate_characters) {
        custom_chars = [...new Set(custom_chars)].join("");
        chars = [...new Set(chars)].join("");
    }

    // Use default characters if no custom characters are selected
    if (custom_chars.length > 0) {
        chars += custom_chars;
    } else {
        chars = default_chars;
    }

    // Generate password
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);
    }

    document.getElementById("password").value = password;

    // Function to handle start_with_letter_only option
    function handleStartWithLetterOnly() {
        var start_with_letter_only = document.getElementById("psswrd_letter_start");
        var include_lowercase = document.getElementById("psswrd_lowercase");
        var include_uppercase = document.getElementById("psswrd_uppercase");

        if (start_with_letter_only.checked) {
            // Disable include_lowercase and include_uppercase options
            include_lowercase.checked = false;
            include_uppercase.checked = false;
            include_lowercase.disabled = true;
            include_uppercase.disabled = true;

            // Change color to red
            include_lowercase.parentNode.style.color = "red";
            include_uppercase.parentNode.style.color = "red";
        } else {
            // Enable include_lowercase and include_uppercase options
            include_lowercase.checked = true;
            include_uppercase.checked = true;
            include_lowercase.disabled = false;
            include_uppercase.disabled = false;

            // Reset color to default
            include_lowercase.parentNode.style.color = "black";
            include_uppercase.parentNode.style.color = "black";
        }
    }

    // Attach event listener to start_with_letter_only option
    document.getElementById("psswrd_letter_start").addEventListener("change", handleStartWithLetterOnly);


}


// Allowing user to copy password to clipboard
function copyPsswrd() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

// Function to change tooltip text
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}