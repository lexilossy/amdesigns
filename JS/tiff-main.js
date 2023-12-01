
const getSlider = document.querySelector(".inner");
const getProgress = document.querySelector(".progress");
const getSlides = document.querySelectorAll(".slide");
const getProg = document.querySelectorAll(".prog");

let currentSlide = 0;
let currentProg = currentSlide;

const nextButton = document.querySelector(".a-right");
const previousButton = document.querySelector(".a-left");

const nextSlide = () => {
  changeSlide(currentSlide + 1);
};


const previousSlide = () => {
  changeSlide(currentSlide - 1);
};



nextButton.addEventListener("click", nextSlide, false);
previousButton.addEventListener("click", previousSlide, false);

const changeSlide = (clicked) => {
  currentSlide = (clicked + getSlides.length) % getSlides.length;


  Array.from(getSlider.children).forEach((item) =>
    item.classList.remove("show")
  );

  Array.from(getProgress.children).forEach((item) =>
    item.classList.remove("progShow")
  );

  getSlides[currentSlide].classList.add("show");
  getProg[currentSlide].classList.add("progShow");
  getSlider.style.transform = `translateX(-${currentSlide / 0.03}%)`;
};


document.querySelectorAll('.prog').forEach((bullet, bulletIndex) => {
  bullet.addEventListener('click', () => {
      if (currentSlide !== bulletIndex) {
          changeSlide(bulletIndex);
      }
  })
})


setInterval(() => {
  nextSlide()
}, 5000);

const chat = () => {
  alert("Hi! 😸");
};

