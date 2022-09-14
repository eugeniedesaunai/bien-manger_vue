document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
}, { passive: true });

let options = {
    fullWidth: true,
    indicators: true,
    padding: 100,
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, options);
}, { passive: true });