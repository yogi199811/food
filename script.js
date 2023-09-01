var plate1 = document.querySelector("#plate1");
var plate5 = document.querySelector("#plate5");
var arrow1 = document.querySelector("#arrow");
var arrow2 = document.querySelector("#arrow2");

var h1 = document.querySelector("#h1")
var clutter = ""

var curser = document.querySelector("#curser")
window.addEventListener("mousemove",function(val){
    gsap.to("#curser",{
        x : val.clientX,
        y : val.clientY
    })
})

// var photo = document.querySelector("#photo");

// photo.addEventListener("mousemove",function(dets){
//     var dim = photo.getBoundingClientRect();

//     this.children[1].style.clipPath = `circle(18% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
// })

// photo.addEventListener("mouseleave",function(dets){
//     var dim = photo.getBoundingClientRect();

//     this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
// })

// plate gsap

plate1.addEventListener("mouseenter",()=>{
    arrow1.style.scale = 0 ;
    plate1.style.scale = 1.16;



})

plate1.addEventListener("mouseleave",()=>{
    arrow1.style.scale = 1 ;
    plate1.style.scale = 1;

    


})

plate5.addEventListener("mouseenter",()=>{
    arrow2.style.scale = 0 ;
    plate5.style.scale = 1.16;




})

plate5.addEventListener("mouseleave",()=>{
    arrow2.style.scale = 1 ;
    plate5.style.scale = 1;

    


})
gsap.to(".bar h1", {
    
    scrollTrigger: {
        trigger: "#page3",
        start: "top 70%",
        scrub: true,
        // markers: true,
        end: "top 40%",
        ease: Expo.easeInOut,

        
        
    },
    
    margin: "0px",
})

gsap.to("#secbar h3", {

    scrollTrigger: {
        trigger: "#page3",
        start: "top 30%",
        scrub: true,
        // markers: true,
        end: "top 0%",
        ease: Expo.easeInOut,
  
    },
    
    margin: "0px",
})

gsap.to(".thirdbar h1", {

    scrollTrigger: {
        trigger: "#page6",
        start: "top 70%",
        scrub: true,
        // markers: true,
        end: "top 40%",
        ease: Expo.easeInOut,
    },
    
    margin: "0px",  
})


gsap.to(".fourbar h3", {
    
    scrollTrigger: {
        trigger: "#page6",
        start: "top 30%",
        scrub: true,
        // markers: true,
        end: "top 0%",
        ease: Expo.easeInOut,
        
        
        
    },
    
    margin: "0px",
    

}) 





var vl = gsap.timeline({
    
    repeat : -1 ,
    ease : Power1,
    
})

var cl = gsap.timeline({

    repeat : -1 ,
    ease : Power1,
    
})


vl.to("#arrow",{
    
    duration : 0.6,
    y : 30
    
})

vl.to("#arrow",{
    duration : 0.6,
    
    y : 0

})


cl.to("#arrow2",{
    duration : 0.5,
    y : -30
    

    

})

cl.to("#arrow2",{
    duration : 0.5,
    y : 0
    
    
    
    
})

gsap.to("#plate1",{
    scrollTrigger : {
        trigger : "#plate1",
        start :  "top 100%",
        scrub : true,
        end:   "top -100%",
        ease : Expo,
        duration : 1
        
        
    },
    
    rotate: (window.innerHeight)
})

gsap.to("#plate2",{
    scrollTrigger : {
        trigger : "#plate2",
        start :  "top 120%",
        scrub : true,
        end:   "top -150%",
        ease : Expo,
        duration : 1
        
        
    },
    
    rotate: -(window.innerHeight)
})

gsap.to("#plate3",{
    scrollTrigger : {
        trigger : "#plate3",
        start :  "top 120%",
        scrub : true,
        end:   "top -150%",
        ease : Expo,
        duration : 1
        
        
    },
    
    rotate: (window.innerHeight)
})

gsap.to("#plate4",{
    scrollTrigger : {
        trigger : "#plate4",
        start :  "top 120%",
        scrub : true,
        end:   "top -150%",
        ease : Expo,
        duration : 1
        
        
    },
    
    rotate: (window.innerHeight)
})

gsap.to("#plate5",{
    scrollTrigger : {
        trigger : "#plate5",
        start :  "top 120%",
        scrub : true,
        end:   "top -150%",
        ease : Expo,
        duration : 1
        
        
    },
    
    rotate: -(window.innerHeight)
})

gsap.to("#plate6",{
    scrollTrigger : {
        trigger : "#plate6",
        start :  "top 120%",
        scrub : true,
        end:   "top -150%",
        ease : Expo,
        duration : 1      
    },
    
    rotate: -(window.innerHeight)
})

gsap.to("#page7 #imagee",{
    scrollTrigger : {
        trigger : "#page7",
        start :  "top top",
        scrub : true,
        end: "+=" + (window.innerHeight * 5),
        
        
    },
    
    rotate: 1000
})

gsap.to("#page7 #rframe", {

    scrollTrigger: {
        trigger: "#page7",
        start: "top 90%",
        scrub: 2,
        // markers: true,
        // end: "top 10%",
        end: "+=" + (window.innerHeight * 5),
  
    },
    
    top: "100%",
    // y : 100
})


gsap.to("#page7 #lframe", {
     scrollTrigger: {
        trigger: "#page7",
        start: "top 70%",
        scrub: 2,
        // markers: true,
        // end: "top 10%",
        
        end: "+=" + (window.innerHeight * 5),
          
    },
    
    top: "-100%",
    // y : 100
      
})


gsap.to("#page7 #cd",{
    scrollTrigger : {
        trigger : "#page7",
        start :  "top top",
        scrub : 2,
        pin : true,
        end: "+=" + (window.innerHeight * 5),
  
    },   
    scale : 3.5
})


gsap.to("#page8 #lol",{
    scrollTrigger : {
        trigger : "#lol",
        start :  "top 400",
        scrub : 2,
        // pin : true,
        end: "top -200",
        // markers : true,    
    },
    // duration : 6,
    rotate : -120,
    ease: Power1,
      
})

gsap.to(".fifthbar h1", {

    scrollTrigger: {
        trigger: "#page10",
        start: "top 40%",
        scrub: true,
        end: "top 10%",
        ease: Expo.easeInOut,    
    },
    top: "0%",
})

var tl = gsap.timeline({
    repeat : -1,
    delay : 3,
    ease : Expo.easeINOut,
})

tl.to("#finger",{
    // right : 0,
    x : -25,
    duration : 4, 
})

tl.to("#finger",{
    // right : "-3%",
    x: 0,
    duration : 2,
})

gsap.to(".colum h1", {
    scrollTrigger: {
        trigger: ".colum h1",
        start: "top 60%",
        scrub: true,
        // markers: true,
        end: "top 20%",
        ease: Expo.easeInOut,
    },
    padding: "0vw",
    
})

// h1.textContent.split("").forEach(function(dets){
    //     clutter += `<span>${dets}</span>`
    
// })

// h1.innerHTML = clutter
// var element =  document.querySelectorAll("#h1 span")
// for(let i=0;i<element.length;i++){
//     element[i].style.animationDelay = i*0.05 + 's'
// }




