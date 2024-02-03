const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    location.replace("../Loading/loading.html");
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }