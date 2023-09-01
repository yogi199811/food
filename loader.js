function loader(){
    document.addEventListener("readystatechange",function(){
        if(this.readyState === "complete"){
            document.querySelector("#loader").style.height = "0%"
            document.querySelector("#loader").style.top = "100%"
        }
    })

}

loader();

gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		toArray = s => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG'),
		allEll = toArray('.ell'),
		colorArr = ['#359EEE', '#FFC43D','#EF476F','#03CEA4']

let colorInterp = gsap.utils.interpolate(colorArr);

gsap.set(mainSVG, {
	visibility: 'visible'
})

function animate (el, count) {
	let tl = gsap.timeline({
	defaults: {
		ease: 'sine.inOut'
	},
		repeat: -1
});
	gsap.set(el, {
		opacity:1- count/(allEll.length),
		stroke: colorInterp(count/(allEll.length))
	})

	tl.to(el, {
	attr: {
		ry: `-=${count*2.3}`,
		rx: `+=${count*1.4}`
	},
	ease: 'sine.in'
})
.to(el, {
	attr: {
		ry: `+=${count*2.3}`,
		rx: `-=${count*1.4}`
	},
	ease: 'sine'
})
.to(el, {
	duration: 1,
	rotation: -180,
	transformOrigin: '50% 50%'
}, 0).timeScale(0.5)
}
allEll.forEach((c, i) => {
	gsap.delayedCall(i/(allEll.length-1), animate, [c, i+1])
})
gsap.to('#aiGrad', {
	duration: 4,
	delay: 0.75,
	attr: {
		x1: '-=300',
		x2: '-=300'
	},
	scale: 1.2,
	transformOrigin: '50% 50%',
	repeat: -1,
	ease: 'none'
})
 gsap.to('#ai', {
	duration: 1,
	scale: 1.1,
	transformOrigin: '50% 50%',
	repeat: -1,
	yoyo: true,
	ease: 'sine.inOut'
}) 




var photo = document.querySelector("#lside");

var photo2 = document.querySelector("#rside");

photo.addEventListener("mousemove",function(dets){
    var dim = photo.getBoundingClientRect();

    this.children[1].style.clipPath = `circle(18% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
	curser.style.opacity = 0
})

photo.addEventListener("mouseleave",function(dets){
    var dim = photo.getBoundingClientRect();

    this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
	curser.style.opacity = 1

})



photo2.addEventListener("mousemove",function(dets){
    var dim = photo2.getBoundingClientRect();

    this.children[1].style.clipPath = `circle(18% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
	curser.style.opacity = 0
})

photo2.addEventListener("mouseleave",function(dets){
    var dim = photo2.getBoundingClientRect();

    this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
	curser.style.opacity = 1

})