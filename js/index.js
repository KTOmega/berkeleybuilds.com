var header;

function init() {
    header = document.getElementById("header");
    window.addEventListener('scroll', detectScroll);
}


function detectScroll(e) {
    var scrollTop = window.scrollY;
    if(scrollTop > 0) {
        header.classList.add("fade-in");
    }else{
        header.classList.remove("fade-in");
    }
}


init();
