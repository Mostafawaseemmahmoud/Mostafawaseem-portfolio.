let page  = document.querySelector(".landing-page")
let h2  = document.querySelector(".h2")
let images = ["_1.jpg" , "_2.jpg" , "_3.jpg" , "_4.jpg" , "_5.jpg"   ]
let myh2  = ["Html" , "we are front end" , "Css" , "Java Script"]


setInterval(function mostafa() {
    let random = Math.floor(Math.random() * images.length)
    let random1 = Math.floor(Math.random() * myh2.length)


    page.style.backgroundImage = 'url("../images/' + images[random] +'")';
    h2.innerHTML = myh2[random1]
    

},3000)






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

let set =  document.querySelector(".settings")
let login = document.querySelector("._ii")
let cen = document.querySelector(".cen") 

set.onclick = function (){
    login.style.display = "flex"
    cen.style.display = "flex"
}

cen.onclick = function () {
    login.style.display = "none"
    cen.style.display = "none"
}

console.log(set)
console.log(login)

login.onclick = function () {
    window.location.replace("../log/log.html")
} 

let box1  = document.querySelector(".box1")
let box2  = document.querySelector(".box2")
let box3  = document.querySelector(".box3")

box1.onclick = function () {
    location.replace("https://podcasts-app.netlify.app/")
}

box2.onclick = function () {
    location.replace("https://m-pets.netlify.app/")
}


box3.onclick = function () {
    location.replace("https://iphone-shops.netlify.app/")
}