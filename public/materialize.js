document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
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