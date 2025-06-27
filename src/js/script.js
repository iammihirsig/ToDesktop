const navDialog = document.querySelector("#nav-dialog");

// Hamburger Menu Handler
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

// Companies Lists Scroll Handler
const initialTranslateLTR = 0;
const initialTranslateRTL = 0;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    console.log(element, isIntersecting);
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");

setupIntersectionObserver(line1, true, 0.2);
setupIntersectionObserver(line2, false, 0.2);
setupIntersectionObserver(line3, true, 0.2);
