let span = document.querySelector(".mult-text")


span.onclick = function play  () {


    setTimeout(span.innerHTML = ("html css j's developer"), 7000);

}






let btn = document.querySelector(".up")

window.onscroll = function () {
    if (scrollY >= 600) {

        btn.style.display = "block"
    }else {
        btn.style.display = "none"
    }
}


btn.onclick = function () {
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    })
}



// Responsive


let mynav = document.querySelector(".navbar")

let mybtn  = document.getElementById("menu")



mybtn.onclick  = function () {

    mynav.style.display = "grid";
}


// if (mynav.style.display = "grid") {

//     mybtn.onclick  = function () {

//         mynav.style.display = "grid";
//     }
    



// }else {
    
//     mybtn.onclick  = function () {

//     mynav.style.display = "none";
// }

// }
//second rs

 
// mybtn.onclick = function () {
//     mynav.classList.toggle("h")
// }