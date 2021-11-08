const scrollElementRight = document.querySelectorAll(".friend__img__leader");
let greeting = document.querySelector(".greeting__team");
let description = document.querySelector(".description p");
let friends = document.querySelectorAll(".friend__img");
let friendNames = document.querySelectorAll(".friend p");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

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

const handleScrollAnimation = (elemets) => {
  elemets.forEach((element) => {
    if (elementInView(element, 1.25)) {
      displayScrollElement(element);
    } else if (elementOutofView(element)) {
      hideScrollElement(element);
    }
  });
};

const partlyOpacity = (el, radius) => {
  let scroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  el.style.opacity = Math.max(0, Math.min(1, -scroll / radius + 2));
};

const itemOnHover = (images, names) => {
  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.style.opacity = 1;
      image.style.cursor = "pointer";
      image.style.transform = "scale(1.2)";
      image.style.transition = "all 500ms";
    });
    image.addEventListener("mouseleave", () => {
      image.style.opacity = 0.6;
      image.style.transform = "scale(1)";
    });
  });
  names.forEach((name) => {
    name.addEventListener("mouseenter", () => {
      name.style.opacity = 1;
      name.style.transition = "all 500ms";
    });
    name.addEventListener("mouseleave", () => {
      name.style.opacity = 0;
    });
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation(scrollElementRight);
  partlyOpacity(greeting, 250);
  partlyOpacity(description, 600);
  itemOnHover(friends, friendNames);
});
