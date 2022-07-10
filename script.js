
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

