let options = {
    fullWidth: true,
    padding: 100
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav', '.carousel');
    M.Sidenav.init(elems, {});
    scrollToTopButton();
    var instances = M.Carousel.init(elems, options);

});



function scrollToTopButton() {
    let bouton = document.querySelector('.bouton');

    bouton.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);
        });
    })
}