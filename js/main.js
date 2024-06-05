const bouleImg = document.querySelector('.boule-img');
const bouleText = document.querySelector('#boule-text');

document.addEventListener("DOMContentLoaded", function() {
  let initialPosition = window.innerWidth - 80;
  let minPosition = 100;
  let scroll500 = 500; // Point at which bouleText reaches full opacity and bouleImg stops moving
  let scroll700 = 700;
  let scroll1000 = 900; // Point at which bouleImg and bouleText reach zero opacity

  function handleScroll() {
    let scrollY = window.scrollY;
    let newPosition = initialPosition - scrollY * 0.5;

    // Ensure newPosition stays within the minPosition and initialPosition range
    newPosition = Math.max(newPosition, minPosition);

    // Stop moving bouleImg at 500px scroll
    if (scrollY <= scroll500) {
      newPosition = Math.min(newPosition, initialPosition);
      bouleImg.style.left = newPosition + 'px';
    }

    // Calculate the opacity for bouleText based on scroll position
    let textOpacity = Math.min(scrollY / scroll500, 1);
    bouleText.style.opacity = textOpacity;

    // Calculate the opacity for bouleImg and bouleText based on scroll position
    if (scrollY > scroll700 && scrollY <= scroll1000) {
      let fadeOutOpacity = 1 - ((scrollY - scroll700) / (scroll1000 - scroll700));
      bouleImg.style.opacity = fadeOutOpacity;
      bouleText.style.opacity = fadeOutOpacity;
    } else if (scrollY > scroll1000) {
      bouleImg.style.opacity = "0";
      bouleText.style.opacity = "0";
    } else if (scrollY <= scroll700) {
      bouleImg.style.opacity = "1";
      if (scrollY < scroll500) {
        bouleText.style.opacity = textOpacity;
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
