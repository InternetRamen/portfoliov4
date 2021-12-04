let itemList = document.querySelector(".main-list")
let title = document.querySelector(".title")
let h2 = document.querySelector(".subtitle")

let nav = document.querySelector(".nav")
nav.classList.add("home")

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, ms);
    })
}
async function a() {
    await delay(300);
    title.classList.remove("slide-right")
    await delay(200);
    h2.classList.remove("slide-right");
    await delay(200);
    for (let item of itemList.children) {
        await delay(100)
        item.classList.remove("slide-in")
    } 

}
a()

