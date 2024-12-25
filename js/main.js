/* const bouleImg = document.querySelector(".boule-img");
const bouleText = document.querySelector("#boule-text");
const osetLogoWhite = document.querySelector("#oset-logo-white");
const osetDark = document.querySelector("#oset-images");

document.addEventListener("DOMContentLoaded", function () {
  let initialPosition = window.innerWidth - 80;
  let minPosition = 100;
  let scroll500 = 500; // Point at which bouleText reaches full opacity and bouleImg stops moving
  let scroll700 = 700;
  let scroll900 = 900; // Point at which bouleImg and bouleText reach zero opacity
  let scroll1300 = 1300;
  let scroll1400 = 1400; // Point at which osetLogoWhite reaches zero opacity and osetDark reaches full opacity

  function handleScroll() {
    let scrollY = window.scrollY;
    let newPosition = initialPosition - scrollY * 0.5;

    // Ensure newPosition stays within the minPosition and initialPosition range
    newPosition = Math.max(newPosition, minPosition);

    // Stop moving bouleImg at 500px scroll
    if (scrollY <= scroll500) {
      newPosition = Math.min(newPosition, initialPosition);
      bouleImg.style.left = newPosition + "px";
    }

    // Calculate the opacity for bouleText based on scroll position
    let textOpacity = Math.min(scrollY / scroll500, 1);
    bouleText.style.opacity = textOpacity;

    // Calculate the opacity for bouleImg and bouleText based on scroll position
    if (scrollY > scroll700 && scrollY <= scroll900) {
      let fadeOutOpacity = 1 - (scrollY - scroll700) / (scroll900 - scroll700);
      bouleImg.style.opacity = fadeOutOpacity;
      bouleText.style.opacity = fadeOutOpacity;
    } else if (scrollY > scroll900) {
      bouleImg.style.opacity = "0";
      bouleText.style.opacity = "0";
    } else if (scrollY <= scroll700) {
      bouleImg.style.opacity = "1";
      if (scrollY < scroll500) {
        bouleText.style.opacity = textOpacity;
      }
    }

    // // Calculate the opacity for osetLogoWhite based on scroll position
    // if (scrollY > scroll1300 && scrollY <= scroll1400) {
    //   let logoFadeOutOpacity = 1 - ((scrollY - scroll1300) / (scroll1400 - scroll1300));
    //   osetLogoWhite.style.opacity = logoFadeOutOpacity;
    // } else if (scrollY > scroll1400) {
    //   osetLogoWhite.style.opacity = "0";
    // } else if (scrollY <= scroll1300) {
    //   osetLogoWhite.style.opacity = "1";
    // }

    // Calculate the opacity for osetDark based on scroll position
    if (scrollY > scroll1300 && scrollY <= scroll1400) {
      let darkFadeInOpacity =
        (scrollY - scroll1300) / (scroll1400 - scroll1300);
      osetDark.style.opacity = darkFadeInOpacity;
    } else if (scrollY > scroll1400) {
      osetDark.style.opacity = "1";
    } else if (scrollY <= scroll1300) {
      osetDark.style.opacity = "0";
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}); */

document.addEventListener("DOMContentLoaded", function () {
  let thrifty = document.getElementById("thrifty");

  thrifty.addEventListener("click", handleClick);

  function handleClick() {
    window.location.href = "/thrifty.html";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let boule = document.getElementById("boule-img");

  boule.addEventListener("click", handleClick);
  function handleClick() {
    window.location.href = "/boule.html";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let oset = document.getElementById("oset");

  oset.addEventListener("click", handleClick);
  function handleClick() {
    window.location.href = "/oset.html";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.hamburger-menu');

  hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
  });
});

const link = document.querySelector("drwnout-link");


