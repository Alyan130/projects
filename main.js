const menu=document.getElementById("menu");
const slider=document.querySelector(".slider");
const cross=document.getElementById("cross");

menu.addEventListener("click",()=>{
    slider.classList.toggle("show");
    menu.style.display="none";
    cross.style.display="inline";
});

cross.addEventListener("click",()=>{
    slider.classList.toggle("show");
    menu.style.display="inline";
    cross.style.display="none";
})