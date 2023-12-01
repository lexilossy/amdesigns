const circle = document.getElementById('circle');
const circleStyle = circle.style;

document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    circleStyle.top = `${ e.clientY - circle.offsetHeight/2 }px`;
    circleStyle.left = `${ e.clientX - circle.offsetWidth/2 }px`;
  });
}); 

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
  toggleActions: "play restart restart resume",
  scroller: ".container",
  markers: true,
});

let tl1 = gsap.timeline({ scrollTrigger: ".screen1" });
let tl2 = gsap.timeline({ scrollTrigger: ".screen2" });
let tl3 = gsap.timeline({ scrollTrigger: ".screen3" });
let tl4 = gsap.timeline({ scrollTrigger: ".screen4" });
let tl5 = gsap.timeline({ scrollTrigger: ".screen5" });
let tl6 = gsap.timeline({ scrollTrigger: ".screen6" });
let tl7 = gsap.timeline({ scrollTrigger: ".screen7" });



tl1
  .to(".screen1", {
    duration: 1.5})
  .fromTo(".title", { scale: 1, y: 50}, {duration: 1, scale: 1.01, y: 0 }, ".2");


ScrollTrigger.create({
  trigger: ".screen2",
  start: "0 100%",
  end: "bottom top",
  duration: "4",
  scrub: "true",
  onEnter: () => {tl1.to(".title", { ease: "slow(0.7, 0.7, false)", yPercent: -10 }, ".1"),
    tl1.to(".plant1", { ease: "slow(0.7, 0.7, false)", yPercent: 5},".1" ),
    tl1.to(".plant2", { ease: "slow(0.7, 0.7, false)", yPercent: 10 },".1"),
    tl1.to(".plants_fg", { ease: "slow(0.7, 0.7, false)",yPercent: 15 },".1"),
    tl2.from(".txt", { duration: "2.5",ease: "slow(0.7, 0.7, false)",opacity: "0"},".5"),
    tl2.to(".txt", { duration: "1",ease: "slow(0.7, 0.7, false)",opacity: "0"},"3.5"),
    tl2.fromTo(".kitty_basics", {duration: "1", yPercent: 20,ease: "slow(0.7, 0.7, false)",}, {scale: 1.3, yPercent: 40 },"4"),
    tl2.fromTo(".txtt", { duration: "1",opacity: "0", yPercent: 0},{ ease: "slow(0.7, 0.7, false)", yPercent: -250, opacity: "1",},"4")},

  onEnterBack: () => {tl1.to(".title", { ease: "slow(0.7, 0.7, false)", yPercent: -10 }, ".1"),
  tl1.to(".plant1", { ease: "slow(0.7, 0.7, false)", yPercent: 5},".1" ),
  tl1.to(".plant2", { ease: "slow(0.7, 0.7, false)", yPercent: 10 },".1"),
  tl1.to(".plants_fg", { ease: "slow(0.7, 0.7, false)",yPercent: 15 },".1"),
  tl2.from(".txt", { duration: "2.5",ease: "slow(0.7, 0.7, false)",opacity: "0"},".5"),
  tl2.to(".txt", { duration: "1",ease: "slow(0.7, 0.7, false)",opacity: "0"},"3.5"),
  tl2.fromTo(".kitty_basics", {duration: "1", yPercent: 20,ease: "slow(0.7, 0.7, false)",}, {scale: 1.3, yPercent: 40 },"4"),
  tl2.fromTo(".txtt", { duration: "1",opacity: "0", yPercent: 0},{ ease: "slow(0.7, 0.7, false)", yPercent: -250, opacity: "1",},"4")},
});





tl3
  .to(".screen3", {
    start: "0 100%",
    end: "bottom top",
    duration: "2.5",
    scrub: "true",})
  .fromTo(".this_is_plant", { ease: "slow(0.7, 0.7, false)", xPercent: 100 }, {duration: "1.5", ease: "slow(0.7, 0.7, false)", xPercent: 0 },".4")
  .fromTo(".this_is_cat", {ease: "slow(0.7, 0.7, false)", xPercent: -100 },{ duration: "1.5", ease: "slow(0.7, 0.7, false)", xPercent: 0 }, ".4")
  .from(".gradient_pg3", { ease: "slow(0.7, 0.7, false)", opacity:0 },"1")
  .from(".sun_text", { ease: "slow(0.7, 0.7, false)", opacity:0 },"2")
  .to(".text_page3", { ease: "slow(0.7, 0.7, false)", opacity:0 },"1.5");


tl4
  .to(".screen4",{
    start: "0 100%",
    end: "bottom top",
    duration: "25",
    scrub: "true"
  })
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"3")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60},"4.5")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -80},"6")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60}, "7.5")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"9")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -20},"10.5")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: 0},"12")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -20},"13.5")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"15")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60}, "16.5")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -80},"18")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60},"19.5")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"21")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -20},"22.5")
  .to(".plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: 0},"24");


  tl5
  .to(".screen5",{
    start: "0 100%",
    end: "bottom top",
    duration: "25",
    scrub: "true"
  })
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -20}, "1.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"3")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60},"4.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -80},"6")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60}, "7.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"9")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -20},"10.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: 0},"12")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -20},"13.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"15")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60}, "16.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -80},"18")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -60},"19.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -40},"21")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: -20},"22.5")
  .to(".toxic_plants_row", {ease: "slow(0.7, 0.7, false)", xPercent: 0},"24");


  
tl6
  .to(".screen6", {
    duration: 2.5})
    .fromTo(".tpr", { yPercent: 100, scale: "1"}, { yPercent:-220, scale: ".7"},"2")
    .fromTo(".pg_6_cat",{ scale: "1.6"}, { yPercent: 10, scale: ".8"},"2");


tl7
  .to(".screen7", {
    duration: 3})
    .fromTo(".page_7 h1", { opacity: ".1"}, { duration: "1", opacity: "1" }, ".5")
    .fromTo(".footer h1", { opacity: "1"}, { opacity: "1" }, ".5")
  .fromTo(".footer_cat", { y: 0 }, { y: 180}, "1.5");


