let b = new URL(document.location)
let search = b.searchParams;

let box = document.querySelector(".box")
if (search.get("fromPage")) {
    box.classList.add("norm");
    setTimeout(function () {
        box.classList.add("goBack");
    }, 1);
    window.history.pushState({}, document.title, b.pathname);
} 


function open(url) {
    box.classList.add("goOut")
    setTimeout(function() {
        document.location.href = url + "?fromPage=true";
    }, 1000)
    
}


