let options = {
    fullWidth: true,
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav', '.carousel');
    M.Sidenav.init(elems, {});
    var instances = M.Carousel.init(elems, options);
});
