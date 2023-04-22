let btn1 = document.querySelector(".up");
let _1 = document.querySelector("._0");
let _2 = document.querySelector("._1");
let _3 = document.querySelector("._2");

window.onscroll = function() {
  console.log(this.scrollY);
  if (window.scrollY >= 800.3333129882812) {
    console.log("Done");
    _1.style.width = "240px";
    _2.style.width = "120px";
    _3.style.width = "20%";
    btn1.style.display = "block";
    btn1.style.right = "20px";
  } else {
    btn1.style.right = "-10px";
    _1.style.width = "0";
    _2.style.width = "0";
    _3.style.width = "0";
  }
};

btn1.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};

let menuBtn = document.querySelector(".menu");
let ul = document.querySelector(".ul");

menuBtn.onclick = function() {
  ul.classList.toggle("display");
};

let __1 = document.querySelector(".__1");
let __2 = document.querySelector(".__2");
let __3 = document.querySelector(".__3");
let __4 = document.querySelector(".__4");
let __5 = document.querySelector(".__5");
let __6 = document.querySelector(".__6");

__1.onclick = function() {
  window.location.replace("./css,html emplate 1/index.html");
};

__2.onclick = function() {
  window.location.replace("./first customer (portfolio)/index.html");
};
__3.onclick = function() {
  window.location.replace("./my new portfolio/index.html");
};

__4.onclick = function() {
  window.location.replace("./html css template 2/index.html");
};

__5.onclick = function() {
  window.location.replace("./my portfolio/index.html");
};

__6.onclick = function() {
  window.location.replace("./new design/index.html");
};

let closeBtn = document.querySelector(".close-btn");
let welcomeDiv = document.querySelector(".welcome-div");
let checkBox = document.querySelector(".check-box");

closeBtn.onclick = function() {
  welcomeDiv.style.display = "none";
  setTimeout(() => {
    checkBox.style.display = "block";
    welcomeDiv.style.display = "block";
    console.log("done");
  }, 2000);
};

checkBox.onclick = function() {
  welcomeDiv.style.display = "none";
};

setTimeout(() => {
  welcomeDiv.style.display = "block";
  console.log("done");
}, 5000);

loader = document.querySelector(".loader");
header = document.querySelector("header");
main = document.querySelector("main");
skills = document.querySelector(".skills");
products = document.querySelector(".products");
about = document.querySelector(".about-us");
contact = document.querySelector(".container")


setTimeout(() => {
  loader.style.display = "none";
  header.style.display = "flex";
  main.style.display = "block";
  skills.style.display = "block";
  products.style.display = "block";
  about.style.display = "block"
  contact.style.display = "block"
  
}, 5000);
