document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav', '.carousel');
    M.Sidenav.init(elems, {});
    var instances = M.Carousel.init(elems, options);
});

let options = {
    fullWidth: true,
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});