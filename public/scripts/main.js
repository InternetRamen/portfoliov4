let b = new URL(document.location);
let search = b.searchParams;

let box = document.querySelector(".box");
if (search.get("fromPage")) {
    box.classList.add("norm");
    setTimeout(function () {
        box.classList.add("goBack");
    }, 200);
    window.history.pushState({}, document.title, b.pathname);
}


let hamburg = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-list");
function b() {
    hamburg.classList.toggle("is-active");
    menu.classList.toggle("active");
}

document.querySelectorAll(".a").forEach((element) => {
    element.addEventListener(
        "click",
        function (event) {
            box.classList.add("goOut");
            setTimeout(function () {
                document.location.href = element.href + "?fromPage=true";
            }, 500);
            event.preventDefault();
        },
        false
    );
});
