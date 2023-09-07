const x=document.getElementsByClassName("container2");
const y=document.getElementById("asdf");
const z=document.getElementById("close");
y.addEventListener("click", ()=>{
    x.classList.add("asdf");
});
z.addEventListener("click", ()=>{
    x.classList.remove("asdf");
});