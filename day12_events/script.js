/**
 * Monday, June 17: events in JS
 * Jenny Burdier
 */
//oneclick event//
//Step 1: find and save the element that we want to apply an event//
let btn1 = document.querySelector(".btn1")
//Step 2: bound the click event to btn1//
btn1.onclick = function(){
    alert("Hey There!")
}

//onmouseover and onmouseout//
document.querySelector(".linkqcc").onmouseout = ()=>{
    alert("QCC LINK WAS TOCHED")
}

//change color div//
//Stqep 1: collect and save the elements//
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")
btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomcolor()
})


//change the background color of element 'colorcontainer'//
//random picks a number from 0 to 255 color tones//
let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return` rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
}
//===================================Practice!======================================================//
//collect the three buttons//

//Stqep 1: collect and save the elements//




//add click event to each button to change the background color to olive and orange respecti//

//reset the background to white color//




//===============================Events Object======================================================//
//collect the button//
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
//swicth text content 'btnpressme' button from 'press me' to 'Button was pressed'//
    if(e.target.textContent === "Press Me!"){
        e.target.textContent = "Button was pressed"
    }
    else{
        e.target.textContent = "Press Me!"
    }
    //toggle between class'btnpressme' and 'btnactive'//
    e.target.classList.togggle("btnactive")
})

/*remove an item from a list*/
let listfruits = document.querySelector("#listfruits")
listfruits.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() ==="li"){
        event.target.remove()
    }
})

/*prevent defualt of an event*/
let visitqcc = document.querySelector(".visitqcc")
visitqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC website is off! Try later")
})

//SCROLL PICTURES L/R//

/**Scroll Events */
let content = document.querySelector("#content")
let btnscrollright = document.querySelector(".btnscrollright")
btnscrollright.addEventListener("click", function(){
    window.scrollBy(100,0)
})
/**slice photo gallery */
let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallerycontainer")

btnleft.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})

btnright.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})

/**to top */
const gotop = document.querySelector(".gotop")

window.addEventListener("scroll", function(){
    let pxtop = window.scrollY;
    if(pxtop>=300){
        gotop.style.display="block"
    }
    else{
        gotop.style.display ="none"
    }
})