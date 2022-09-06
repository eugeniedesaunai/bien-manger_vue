document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
    var instances = M.Carousel.init(elems);

});

let options = {
    fullWidth: true,
    indicators: true,
    padding: 100,
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
    scrollToTopButton();
});


function scrollToTopButton() {
    let bouton = document.querySelector('.bouton');

    bouton.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
}
window.onscroll = function () {
    if (scrollY >= 200) {
        document.getElementById('backToTop').style.visibility = "visible";
    } else {
        document.getElementById('backToTop').style.visibility = "hidden";
    }
};
