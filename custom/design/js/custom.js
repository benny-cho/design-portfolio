//ScrollMagic - Adds is-visible class to elements when they are scrolled into view//
//Add the class .scroll-animation to a div to trigger//

document.addEventListener("DOMContentLoaded", function () {

    if (sessionStorage.length == 0 && document.querySelector('html').classList.contains('homepage')) {
        loadingAnimation();
    }

    if (!document.querySelector('html').classList.contains('homepage')) {
        document.querySelector('nav').classList.add('scrolled');
    }

    if (typeof ScrollMagic === "undefined") {
        console.error("ScrollMagic did not load.");
        return;
    }

    const controller = new ScrollMagic.Controller();
    const animationElements = document.querySelectorAll(".scroll-animation");

    animationElements.forEach(function (element) {
        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.88,
            reverse: true
        })
        .setClassToggle(element, "is-visible")
        .addTo(controller);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    if (!nav) return;

    if (document.querySelector('html').classList.contains('homepage')) {
        function updateNav() {
            nav.classList.toggle("scrolled", window.scrollY >= 100);
        }
    
        window.addEventListener("scroll", updateNav);
        updateNav();
    }

});




function loadingAnimation() {
    
    document.querySelector('body').classList.add('hold');
    document.querySelector('.hp-banner-image').classList.add('loaded');
    document.querySelector('.loading-animation').classList.add('loaded');
    document.querySelector('nav').classList.remove('loaded');
    
    setTimeout(() => {
        document.querySelector('.hp-banner-image').classList.remove('loaded');
        document.querySelector('.loading-animation').classList.remove('loaded');
        document.querySelector('body').classList.remove('hold');
    }, 5000);
    setTimeout(() => {
        document.querySelector('nav').classList.add('loaded');
    }, 6500);
    
    sessionStorage.setItem('hasRun', 'true');

}

