let megaImgDiv = document.querySelector(".mega-Img");
let megaImgPic = document.createElement("img");
megaImgDiv.append(megaImgPic);
megaImgPic.src = "photo/megamenu.png";
megaImgPic.style.cssText = "width: 100%;";
// const observer = new ResizeObserver((entries) => {
//   const respoWidth = entries[megaImgDiv].contentrect.width;
//   console.log(respoWidth);
// })
// megaImgDiv.style.display = respoWidth < 768 ? 'none' : 'block';
// console.log(document.body.width);

// Landing Zone
// Background color animation
// let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
// let colorParts = [];

// for (i = 0; i < 6; i++) {
//   colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
// }
// ;
// let finalColor = `#${colorParts.join("")}`;
// console.log(finalColor)
// let landing = document.querySelector(".landing");
// landing.style.backgroundColor = finalColor;

// Start Creating ScrollUp Button
let scrBtn = document.createElement("button");
scrBtn.className = "scroll-Up";
// Scroll button icon
let scrIcon = document.createElement("i");
scrIcon.style.fontSize = "18px";

scrBtn.style.cssText =
  "background-color: var(--main-color); color: white; width: 30px; height: 30px; padding: 5px; border-radius: 5px; border: none; position: fixed; bottom: 20px; right: 20px; cursor: pointer; display: none; z-index: 100;";
scrIcon.className = "fa-solid fa-chevron-up";
// Append btn to document
scrBtn.append(scrIcon);
document.body.prepend(scrBtn);

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Our Skills animat
let skillsSction = document.querySelector(".our-skills");
let skillSpans = document.querySelectorAll(".skills-bar>span");

let statSec = document.querySelector(".stats");
let nums = document.querySelectorAll("span.records-count");
let started = false;

window.onscroll = function () {
  // Skills section animate width
  if (window.scrollY >= skillsSction.offsetTop - 200) {
    skillSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // Start stats number animat
  if (window.scrollY >= statSec.offsetTop - 20) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  // Scrollup btn display
  if (window.scrollY >= 600) {
    // console.log(`Scrolling Value Is ${window.scrollY}`);
    scrBtn.style.display = "block";
  } else {
    scrBtn.style.display = "none";
  }
};

scrBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Event Section Animation Start

let countDownDate = new Date("Nov 21, 2023 23:59:59").getTime();
// console.log(countDownDate);
let counter = setInterval(() => {
  // Get date now
  let dateNow = new Date().getTime();
  //Find the diffrance between our countDowDate and Date Now
  let dateDiff = countDownDate - dateNow;
  // Get time units & Using Math.floor to return Inmteger value
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  document.querySelector(".secondes").innerHTML =
    secondes < 10 ? `0${secondes}` : secondes;
}, 1000);
// Event Section Animation End

// Swiper Start
let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  // slidesPerGroup: 3,
  loop: true,
  fade: true,
  grabCursor: true,
  centerSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
