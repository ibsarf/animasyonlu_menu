const btnToggle=document.getElementById("toggle");
const nav=document.getElementById("nav");
console.log(btnToggle);

btnToggle.addEventListener("click",()=>{
    console.log("tıklandı");
    nav.classList.toggle("active")
})
