let menu1 = document.querySelector("#menu1");
let home = document.querySelector("#home");
let menu2 = document.querySelector("#menu2");
let html = document.querySelector("#html");
let jvScrip = document.querySelector("#jvScrip");
let phpMysql = document.querySelector("#phpMysql");
let menu3 = document.querySelector("#menu3");
let setting = document.querySelector("#Setting");

menu1.addEventListener("click", ()=>{
  menu2.classList.remove("selected");
  jvScrip.classList.remove("selected");
  phpMysql.classList.remove("selected");
  html.classList.remove("selected");
  menu1.classList.add("selected");
  menu3.classList.remove("selected");
});

home.addEventListener("click", ()=>{
  menu2.classList.remove("selected");
  jvScrip.classList.remove("selected");
  phpMysql.classList.remove("selected");
  html.classList.remove("selected");
  menu1.classList.add("selected");
  menu3.classList.remove("selected");
});

menu2.addEventListener("click", ()=>{
  menu2.classList.add("selected");
  menu3.classList.remove("selected");
  menu1.classList.remove("selected");
});

html.addEventListener("click", ()=>{
  jvScrip.classList.remove("selected");
  phpMysql.classList.remove("selected");
  html.classList.add("selected");
  menu2.classList.add("selected");
  menu3.classList.remove("selected");
  menu1.classList.remove("selected");
});

jvScrip.addEventListener("click", ()=>{
  html.classList.remove("selected");
  phpMysql.classList.remove("selected");
  jvScrip.classList.add("selected");
  menu2.classList.add("selected");
  menu3.classList.remove("selected");
  menu1.classList.remove("selected");
});

phpMysql.addEventListener("click", ()=>{
  html.classList.remove("selected");
  jvScrip.classList.remove("selected");
  phpMysql.classList.add("selected");
  menu2.classList.add("selected");
  menu3.classList.remove("selected");
  menu1.classList.remove("selected");
});

menu3.addEventListener("click", ()=>{
  menu3.classList.add("selected");
  jvScrip.classList.remove("selected");
  phpMysql.classList.remove("selected");
  html.classList.remove("selected");
  menu1.classList.remove("selected");
  menu2.classList.remove("selected");
});

setting.addEventListener("click", ()=>{
  menu3.classList.add("selected");
  jvScrip.classList.remove("selected");
  phpMysql.classList.remove("selected");
  html.classList.remove("selected");
  menu1.classList.remove("selected");
  menu2.classList.remove("selected");
});

window.onload = function()
{
    do_validate();
};
 
function do_validate()
{
  menu1.classList.add("selected");
}

// document.getElementById("img1").addEventListener("mouseover", mouseOVer);
// document.getElementById("img1").addEventListener("mouseout", mouseOut);

// function mouseOVer() {
//   document.getElementById("img1_1").style.backgroundColor = "orange";
// }

// function mouseOut() {
//   document.getElementById("img1_1").style.backgroundColor = "blue";
// }

