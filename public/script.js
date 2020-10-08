var myNav = document.querySelector('.scroll');
var myNav2 = document.querySelector('.scroll2');
var content = document.querySelector('.content');
    
window.onscroll = function () {    
    if (window.pageYOffset > 20) {
        
        content.style.height = '80px';

        if (myNav != null) {
            myNav.classList.add("nav-colored");
            myNav.style.height = '80px';
        } 

        if (myNav2 != null) {
            myNav2.classList.add("nav-colored");
            myNav2.style.height = '80px';
        }  
    } 
    else {

        content.style.height = '120px';

        if (myNav != null) {
            myNav.classList.remove("nav-colored");
            myNav.style.height = '120px';
        } 

        if (myNav2 != null) {
            myNav2.classList.remove("nav-colored");
            myNav2.style.height = '120px';
        }  
    }
};


