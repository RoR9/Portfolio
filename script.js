
const nav=document.querySelector(".navbar")
const navL=nav.offsetTop
 
function fixnav(){
if(window.pageYOffset>navL){
    nav.classList.add("fixed")
}
else{
    nav.classList.remove("fixed")
}

}

window.addEventListener("scroll",fixnav)

//Scroll Animation
const animItems=document.querySelectorAll("._anim_items")

if(animItems.length>0){
    window.addEventListener("scroll",animOnScroll);
    function animOnScroll(){
        for(let i=0;i<animItems.length;i++){
            const animItem=animItems[i]
            const animItemHeight=animItem.offsetHeight;
            const animItemOffset=offset(animItem).top;
    
    
            const animStart=4;// Coefficient to regulate start of the animation

            let animItemPoint=window.innerHeight-animItemHeight/animStart
           
            if(animItemHeight>window.innerHeight){
                animItemPoint=window.innerHeight-window.innerHeight/animStart
            }
            
              
            if((pageYOffset>animItemOffset - animItemPoint) && pageYOffset<(animItemOffset + animItemHeight) ){
             animItem.classList.add("_active")
            }
            else{
                if(!animItem.classList.contains("_anim-no-hide")){//adding extra class in html for animating just 1 time
                animItem.classList.remove("_active")
            }
            }
        }
    }


function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
setTimeout(()=>{
    animOnScroll()
},300)

}



const showAllBtn=document.querySelector(".show-all-btn")
const hideElements=document.querySelectorAll("._hide")

showAllBtn.addEventListener("click",function(e){
     e.preventDefault()
    hideElements.forEach(hideElement=>hideElement.classList.toggle("_hide"))
    hideElements.forEach(hideElement=>hideElement.classList.toggle("_show"))
    showAllBtn.classList.toggle("_show")
    if(showAllBtn.classList.contains("_show")){
        showAllBtn.innerHTML=`Hide all`
        showAllBtn.href="#welcome-section"
    }
    else{
        showAllBtn.innerHTML=`Show all<span class="icon">></span>`
        showAllBtn.href=""

    }
   
})

//Menu Burger
const menuBurger=document.querySelector(".header_burger")
const navMenu=document.querySelector(".nav-bar-elements")
const body=document.querySelector("body")
const links=document.querySelectorAll(".nav-bar-elements")

menuBurger.addEventListener("click",function(){
    menuBurger.classList.toggle("active")
    navMenu.classList.toggle("active")
    body.classList.toggle("lock")
})

links.forEach(link=>link.addEventListener("click",function(e){
    
    
        if(e.target.parentElement.parentElement.classList.contains("active")){
            menuBurger.classList.remove("active")
            navMenu.classList.remove("active")
            body.classList.remove("lock")
        }
    
}))



