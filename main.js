// Type writer header
function typingEffect(element, speed) {
    let text= element.innerHTML;
    element.innerHTML="";
    var i= 0;
    var timer = setInterval(function() {
        if(i < text.length) {
            element.append(text.charAt(i))
            i++;
        }else {
            clearInterval(timer);
        }
    }, speed)

}
const title = document.querySelector("h1");
typingEffect(title, 100);

//Navbar function

const menuButton = document.querySelector(".button-container");
const closeButton = document.querySelector(".menu-close-button");
const navBar = document.querySelector("#main-navbar");
const navLink = document.querySelectorAll('.nav-link');

menuButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
    document.body.classList.toggle('inactive');
});


closeButton.addEventListener('click', () => {
    navBar.classList.remove('active');
    document.body.classList.toggle("inactive");
})

navLink.forEach((n) => n.addEventListener('click', () => {
    navBar.classList.remove('active');
    document.body.classList.toggle("inactive");
}));