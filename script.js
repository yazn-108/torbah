"use strict";
// hidden nav bar after on scroll
const header = document.querySelector("header");
const headroom = new Headroom(header);
headroom.init();
// menu on phones
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
});
document.addEventListener("scroll", () => menu.classList.remove("open"));
// add animation on scroll
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) =>
      entry.target.classList.toggle("start-animation", entry.isIntersecting)
    );
  }, { root: null, rootMargin: "0px" }
);
document.querySelectorAll(".it-has-animation").forEach((e) => observer.observe(e));
// animation of numbers
let revenuesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (entry) => entry.isIntersecting && startCount(entry.target)
    );
  },
  {
    root: null,
    rootMargin:
      window.innerWidth <= 640 ? "0px 0px -90px 0px" : "0px 0px -400px 0px",
  }
);
document.querySelectorAll(".revenues .pour-cent").forEach((e) => revenuesObserver.observe(e));
const startCount = (e) => {
  const counter = setInterval(() => {
    if (+e.textContent < e.dataset.pour_cent) {
      e.textContent++;
    } else {
      clearInterval(counter);
    }
  }, 1000 / e.dataset.pour_cent);
};
// remove loading page
document.onreadystatechange = () => {
  if (document.readyState === "complete")
    document.querySelector(".loading-page").style.display = "none";
};
//
const linkButton = document.querySelectorAll(".link-button");
linkButton.forEach((e) => {
  e.addEventListener("click", (e) => {
    document.querySelector(e.currentTarget.dataset.go_to).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// auto scroll
const scrollButton = document.querySelector(".scroll-button");
const aboutSection = document.querySelector(".system-solutions");
scrollButton.addEventListener("click", () => {
  const distanceToScroll = aboutSection.offsetTop;
  const speed = 2;
  const scrollInterval = setInterval(function () {
    window.scrollBy(0, speed);
    if (window.pageYOffset >= distanceToScroll) {
      clearInterval(scrollInterval);
    }
    document.addEventListener("click", () => clearInterval(scrollInterval));
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", function () {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        clearInterval(scrollInterval);
      }
      lastScrollY = currentScrollY;
    });
  }, 16);
});
