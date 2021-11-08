const scrollElementRight = document.querySelectorAll(".friend__img__leader");
let greeting = document.querySelector(".greeting__team");
let description = document.querySelector(".description p");
let friends = document.querySelectorAll(".friend");

const elementInView = (element, dividend = 1) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (element) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = (elements) => {
  elements.forEach((element) => {
    if (elementInView(element, 1.25)) {
      displayScrollElement(element);
    } else if (elementOutofView(element)) {
      hideScrollElement(element);
    }
  });
};

const partlyOpacity = (element, radius) => {
  let scroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  element.style.opacity = Math.max(0, Math.min(1, -scroll / radius + 2));
};

const itemOnHover = (elements) => {
  elements.forEach((element) => {
    if (element.style.opacity !== 1) {
      element.addEventListener("mouseenter", () => {
        element.style.opacity = 1;
        element.style.cursor = "pointer";
        element.style.transform = "scale(1.2)";
        element.style.transition = "all 500ms";
      });
      element.addEventListener("mouseleave", () => {
        element.style.opacity = 0.6;
        element.style.transform = "scale(1)";
      });
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation(scrollElementRight);
  partlyOpacity(greeting, 250);
  partlyOpacity(description, 600);
  itemOnHover(friends);
});
