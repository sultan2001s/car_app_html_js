/*scrollTop*/
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid"
    } else {
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


/*price*/
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price__img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.5) / 9) + 'px,' + ((event.clientY * 0.5) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".home");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.1 * window.pageYOffset) + 'px';
    })
});