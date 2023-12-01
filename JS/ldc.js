const cursor = document.getElementById('cursor');
const cursorStyle = cursor.style;

document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    cursorStyle.top = `${ e.clientY - cursor.offsetHeight/2 }px`;
    cursorStyle.left = `${ e.clientX - cursor.offsetWidth/2 }px`;
  });
}); 


  gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause restart reverse",
  scroller: ".container",
});

let tl1 = gsap.timeline({ scrollTrigger: ".one" });
let tl2 = gsap.timeline({ scrollTrigger: ".two" });
let tl3 = gsap.timeline({ scrollTrigger: ".three" });
let tl4 = gsap.timeline({ scrollTrigger: ".four" });
let tl5 = gsap.timeline({ scrollTrigger: ".five" });
let tl6 = gsap.timeline({ scrollTrigger: ".six" });
let tl7 = gsap.timeline({ scrollTrigger: ".seven" });
let tl8 = gsap.timeline({ scrollTrigger: ".eight" });
let tl9 = gsap.timeline({ scrollTrigger: ".nine" });


tl1
  .to(".one", {
  duration: 4})
    .fromTo(".mid", { scale: 3, y: 100}, {duration: 1, scale: 1, y: 0 }, "1")
    .fromTo(".main1", { opacity: 0}, {duration: 1, opacity: 1}, "1.5")
    .fromTo(".lost", { opacity: 0}, {duration: 1, opacity: 1}, "1.5")
    .to(".para_1", {duration:2, opacity:0 },"3");

tl2
  .to(".two", {
  duration: 4})
    .fromTo(".a", { scale: 3, y: 100}, {duration: 1, scale: 1, y: 100,opacity: 0 }, "1")
    .fromTo(".bg2", { opacity:1}, { opacity: 0 }, ".9")
    .fromTo(".p2", { opacity: 0}, {duration: 1, opacity: 1}, "1.5")
    .fromTo(".f", { opacity: 0}, {duration: 1,scale: 2,y: 10, opacity: 1,color: "#6F2323",}, "1.5");

tl3
  .to(".three", {
  duration: 2})
      .to(".d", {duration: 1, opacity: .5,color: "#000000"},".5");

tl4
  .to(".four", {
  duration: 1,})
    .to(".rep", {opacity: 0,repeat: -1, yoyo: true}, ".2");

tl5
  .to(".five", {
  duration: 1,})
    .fromTo(".h", {scale: 1.2, repeat: -1, yoyo: true},{duration: .5, scale: 1.3, repeat: -1, yoyo: true});

tl6
  .to(".six", {
  duration: 3,})
    .to(".up", {duration: 2,y: -100,repeat: -1, yoyo: true}, "1")
    .to(".right", {duration: 2,x: 200,repeat: -1, yoyo: true}, "1.5");
  
tl7
  .to(".seven", {
  duration: 3,})
    .to(".para_7", {rotate:(-5)}, "1")
    .to(".para_7", {rotate:(2)}, "2");
    
tl8
  .to(".eight", {
  duration: 1,})
    .fromTo(".para_8", {scale: .7, repeat: -1, yoyo: true},{duration: 2.5, scale: 1.5, repeat: -1, yoyo: true,opacity:1});

tl9
  .to(".nine", {
  duration: 4})
  .to(".p9", { opacity:0 },"3")
  .to(".yet", {duration: 2, y:-100 },"3.5");