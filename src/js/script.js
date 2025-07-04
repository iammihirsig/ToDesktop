const navDialog = document.querySelector("#nav-dialog");

// Hamburger Menu Handler
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

// Companies Lists Scroll Handler
const initialTranslateLTR = 48;
const initialTranslateRTL = 36;

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
const line4 = document.querySelector("#line4");

setupIntersectionObserver(line1, true, 0.2);
setupIntersectionObserver(line2, false, 0.2);
setupIntersectionObserver(line3, true, 0.2);
setupIntersectionObserver(line4, false, 1);

// FAQs Controls
const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddId = element.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddId);
    const ddArrowIcon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    ddArrowIcon.classList.toggle("-rotate-180");
  });
});
