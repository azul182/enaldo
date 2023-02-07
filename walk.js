let enaldo = document.querySelector("#enaldo")
let html = document.querySelector("html")

function move(e){
    enaldo.style.top = (e.pageY - enaldo.width / 2) + "px"
    enaldo.style.left = (e.pageX - enaldo.width / 2)+ "px"
}

html.addEventListener("mousemove",move)

