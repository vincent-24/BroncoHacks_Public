const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    location.replace("../Hobbies/hobbies.html");
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }