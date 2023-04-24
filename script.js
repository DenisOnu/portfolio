//toggle icon navbar
//declare navigation bar variables
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  //toggle close icon
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll functions
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
      var top = window.scrollY;
      var offset = sec.offsetTop - 150;
      var height = sec.offsetHeight;
      var id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
      };
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //navbar remove on click or scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


//typing effect on landing page using typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Illustrator', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}