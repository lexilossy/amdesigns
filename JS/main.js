
document.getElementById('scrollHome').addEventListener('click', function (e) {
  e.preventDefault(); 
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollAbout').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Scroll smoothly to the target div
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollProjects').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Scroll smoothly to the target div
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollContact').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Scroll smoothly to the target div
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
  toggleActions: "play resume restart reset",
  scroller: "body",
  markers: true,

});

let tl1 = gsap.timeline({ scrollTrigger: ".section1" });
let tl2 = gsap.timeline({ scrollTrigger: ".section2"});
let tl3 = gsap.timeline({ scrollTrigger: ".section3" });
let tl4 = gsap.timeline({ scrollTrigger: ".section4" });




tl1
  .from("#leftShadow", { scale: 0.8, xPercent: -3, yPercent: 1, rotate: "-10deg", duration: .6 }, ".4")
  .from("#leftBack", { scale: 0.8, xPercent: -5, yPercent: 3, rotate: "-10deg", duration: .6 }, ".4")
  .from("#leftMiddle", { scale: 0.8, xPercent: -10, yPercent: 5, rotate: "-10deg", duration: .7 }, ".3")
  .from("#leftFrontMiddle", { scale: 0.8, xPercent: -15, yPercent: 7, rotate: "-10deg", duration: .8 }, ".2")
  .from("#leftFront", { scale: 0.8, xPercent: -20, yPercent: 10, rotate: "-10deg", duration: .8 }, ".2")

  .from("#rightShadow", { scale: 0.8, xPercent: 3, yPercent: 1, rotate: "10deg", duration: .6 }, ".4")
  .from("#rightBack", { scale: 0.8, xPercent: 5, yPercent: 3, rotate: "10deg", duration: .6 }, ".4")
  .from("#rightMiddle", { scale: 0.8, xPercent: 10, yPercent: 10, rotate: "10deg", duration: .7 }, ".3")
  .from("#rightFront", { scale: 0.8, xPercent: 15, yPercent: 7, rotate: "10deg", duration: .8 }, ".2")

  .to(".home p", { color: "#A3F514" }, "0.1")
  .to(".about p", { color: "#79BDC0" }, "0.1")
  .to(".projects p", { color: "#79BDC0" }, "0.1")
  .to(".contact p", { color: "#79BDC0" }, "0.1")
  
  .from(".self-image", { scale: 0.8}, {ease: "circ.out", scale: 1, duration: 2 }, ".1");


tl2
  // .to(".section2", {})
  // .fromTo(".name-hide", { display: 'block'}, { display: 'none'}, "0")
  // .fromTo(".name-show", { display: 'none'}, { display: 'block'}, "0");
  .set(".name-hide", { start: "0 80%", end: "0 bottom", display: 'none'})
  .set(".name-show", { start: "0 80%", end: "0 bottom", display: 'block'})

  .to(".home p", { start: "0 80%", end: "0 bottom", color: "#79BDC0" }, "0.1")
  .to(".about p", { start: "0 80%", end: "0 bottom", color: "#A3F514" }, "0.2")
  .to(".projects p", {  start: "0 80%", end: "0 bottom", color: "#79BDC0" }, "0.1")
  .to(".contact p", { start: "0 80%", end: "0 bottom", color: "#79BDC0" }, "0.1");
      
      // ScrollTrigger.create({
      //   trigger: ".section2",
      //   backgroundColor: "purple",
      //   start: "0 80%",
      //   end: "0 bottom",
      //   onEnter: () => {
      //   .set(".name-hide", { display: 'none'}),
      //   .set(".name-show", { display: 'block'})
      //   },
      //   onEnterBack: () => {
      //     .set(".name-hide", {display: 'none'}),
      //     .set(".name-show", {display: 'block'})
      //     },
      //     onLeave: () => {
      //       .set(".name-show", {display: 'none'}),
      //       .set(".name-hide", {display: 'block'})
      //       },
      //       onLeaveBack: () => {
      //         .set(".name-show", {display: 'none'}),
      //         .set(".name-hide", {display: 'block'})
      //         }
      // });
     
tl3
      // .to(".section3", { start: "0 80%", end: "0 bottom" })

  .set(".name-show", { start: "0 0", end: "bottom bottom", display: 'none'})
  .set(".name-hide", { start: "0 0", end: "bottom bottom", display: 'block'})
  

  .to(".home p", { color: "#79BDC0" }, "0.1")
  .to(".about p", { color: "#79BDC0" }, "0.1")
  .to(".projects p", { color: "#A3F514" }, "0.2")
  .to(".contact p", { color: "#79BDC0" }, "0.1");


tl4
  .to(".section4", { start: "0 80%", end: "0 bottom"})
  .set(".name-show", { start: "0 0", end: "bottom bottom", display: 'none'})
  .set(".name-hide", { start: "0 0", end: "bottom bottom", display: 'block'})
  
  .to(".home p", { color: "#79BDC0" }, "0.1")
  .to(".about p", { color: "#79BDC0" }, "0.1")
  .to(".projects p", { color: "#79BDC0" }, "0.1")
  .to(".contact p", { color: "#A3F514" }, "0.2");


     




const leftShadow= document.getElementById('leftShadow');
const leftShadowStyle = leftShadow.style;
const rightShadow = document.getElementById('rightShadow');
const rightShadowStyle = rightShadow.style;

const leftLeafBack = document.getElementById('leftBack');
const leftLeafBackStyle = leftLeafBack.style;
const rightLeafBack = document.getElementById('rightBack');
const rightLeafBackStyle = rightLeafBack.style;

const leftLeafMiddle = document.getElementById('leftMiddle');
const leftLeafMiddleStyle = leftLeafMiddle.style;
const rightLeafMiddle = document.getElementById('rightMiddle');
const rightLeafMiddleStyle = rightLeafMiddle.style;

const leftLeafFrontMiddle = document.getElementById('leftFrontMiddle');
const leftLeafFrontMiddleStyle = leftLeafFrontMiddle.style;
const leftLeafFront = document.getElementById('leftFront');
const leftLeafFrontStyle = leftLeafFront.style;
const rightLeafFront = document.getElementById('rightFront');
const rightLeafFrontStyle = rightLeafFront.style;


document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    leftShadowStyle.top = `${(e.clientY /1000) * -1}%`;
    leftShadowStyle.left = `${ (e.clientX /1000) * -1 }%`;
    leftLeafBackStyle.top = `${(e.clientY /750) * -1}%`;
    leftLeafBackStyle.left = `${ (e.clientX /750) * -1 }%`;
    leftLeafMiddleStyle.top = `${ (e.clientY /500) * -1}%`;
    leftLeafMiddleStyle.left = `${(e.clientX /500) * -1 }%`;
    leftLeafFrontMiddleStyle.top = `${ (e.clientY /250) * -1}%`;
    leftLeafFrontMiddleStyle.left = `${(e.clientX /250) * -1 }%`;
    leftLeafFrontStyle.top = `${ (e.clientY /100) * -1}%`;
    leftLeafFrontStyle.left = `${(e.clientX /100) * -1 }%`;

    rightShadowStyle.top = `${(e.clientY /1000) * -1 }%`;
    rightShadowStyle.right = `${ (e.clientX /1000)}%`;
    rightLeafBackStyle.top = `${(e.clientY /750) * -1 }%`;
    rightLeafBackStyle.right = `${ (e.clientX /750)}%`;
    rightLeafMiddleStyle.top = `${ (e.clientY /500) * -1 }%`;
    rightLeafMiddleStyle.right = `${(e.clientX /500)}%`;
    rightLeafFrontStyle.top = `${ (e.clientY /100) * -1 }%`;
    rightLeafFrontStyle.right = `${(e.clientX /100)}%`;

    
    // leftLeafBackStyle.top = `${ (e.clientY /20) * -1}px`;
    // leftLeafBackStyle.left = `${(e.clientX /20) * -1 }px`;
    // rightLeafBackStyle.top = `${ (e.clientY /10) * -1}px`;
    // rightLeafBackStyle.left = `${(e.clientX /10)}px`;
    // leftLeafMiddleStyle.top = `${ (e.clientY /5) }px`;
    // leftLeafMiddleStyle.left = `${(e.clientX /5) * -1 }px`;
    // rightLeafMiddleStyle.top = `${ e.clientY /10 -100}px`;
    // rightLeafMiddleStyle.left = `${ e.clientX /10 -100}px`;
    // leftLeafFrontMiddleStyle.top = `${ (e.clientY /5) }px`;
    // leftLeafFrontMiddleStyle.left = `${(e.clientX /5) * -1 }px`;
    // leftLeafFrontStyle.top = `${ (e.clientY /5) }px`;
    // leftLeafFrontStyle.left = `${(e.clientX /5) * -1 }px`;
    // rightLeafFrontStyle.top = `${ e.clientY /10 -100}px`;
    // rightLeafFrontStyle.left = `${ e.clientX /10 -100}px`;
    
  });
}); 
