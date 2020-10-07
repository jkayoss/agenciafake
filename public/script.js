var myNav = document.querySelector('.scroll');
window.onscroll = function () { 
    var content = document.querySelector('.content')
    if (window.pageYOffset > 20) {
        myNav.classList.add("nav-colored");
        content.style.height = '80px';
        myNav.style.height = '80px';
    } 
    else {
        myNav.classList.remove("nav-colored");
        content.style.height = '120px';
        myNav.style.height = '120px';
    }
};