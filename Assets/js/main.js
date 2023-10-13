// Header Scroll
let nav = document.querySelector(".navbar");
window = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolle");
    }else{
        nav.classList.remove("header-scrolle");
    }
}

// navbar hide
let navBar =document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach("function(e)");{
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
}