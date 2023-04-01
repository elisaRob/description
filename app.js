const contents=document.querySelectorAll(".content");
const navLink=document.querySelectorAll(".navLink");

navLink.forEach((nav,index)=>{
    nav.addEventListener("click",()=>{
        cacherToutesLesImages();
        effacerActive();

        contents[index].classList.add("show");
        nav.classList.add("active")
    })
})

function cacherToutesLesImages(){
    contents.forEach(content=>
        {
            content.classList.remove("show")
    })
}

function effacerActive(){
    navLink.forEach(nav =>{
        nav.classList.remove("active")
    })
}