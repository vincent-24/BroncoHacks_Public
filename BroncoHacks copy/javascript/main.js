const form = document.getElementById('form');
const emailAddress = document.getElementById('emailAddress');
const username = document.getElementById('username');
const password = document.getElementById('password');
let emailString = "";
let usernameString = "";
let passwordString = "";
let emailSuccess = false;
let usernameSuccess = false;
let passwordSuccess = false;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    console.log(emailSuccess + ", " + usernameSuccess + ", " + passwordSuccess)
    storeValues();
    console.log(emailString + ", " + usernameString + ", " + passwordString);
    if (emailSuccess === true && usernameSuccess === true && passwordSuccess === true) {
        createUser();
        window.open("../templates/login.html");
    }
});

function createUser() {
    const user = [
        {
            emailAddress_: emailString,
            username_: usernameString,
            password_: passwordString
        }
    ];

    const tileKeys = Object.keys(user[0]);
    const refinedUser = [];
    refinedUser.push(tileKeys);

    user.forEach(item => {
        refinedUser.push(Object.values(item))  
    });

    let csvContent = '';

    refinedUser.forEach(row => {
        csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
    const objUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', objUrl);
    link.setAttribute('download', 'File.csv');
    console.log(link);

    downloadLink(link);
}

function downloadLink(link) {
    const downloadFile = (file) => {
        
    }
}

function storeValues() {
    emailString = emailAddress.value;
    usernameString = username.value;
    passwordString = password.value;
}

const validateInputs = () => {
    const emailAddressValue = emailAddress.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (emailAddressValue === '') {
        emailSuccess = false;
    } else {
        emailSuccess = true;
    }

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