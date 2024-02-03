const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
let usernameString = "";
let passwordString = "";
let usernameSuccess = false;
let passwordSuccess = false;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    console.log(usernameSuccess + ", " + passwordSuccess)
    storeValues();
    console.log(usernameString + ", " + passwordString);
    if (usernameSuccess === true && passwordSuccess === true) {
        location.replace("../Profile/profile.html");
    }
});

function storeValues() {
    usernameString = username.value;
    passwordString = password.value;
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    
    if (usernameValue === '') {
        usernameSuccess = false;
    } else {
        usernameSuccess = true;
    }

    if (passwordValue === '') {
        passwordSuccess = false;
    } else {
        passwordSuccess = true;
    }
};

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }