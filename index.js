// || Intersection Observers
const comboImgs = document.querySelectorAll(".combo__img");
const sections = document.querySelectorAll("section");

if(!!window.IntersectionObserver) {

  // "combo__img" Observer
  const comboImgOptions = {
    rootMargin: "0px 0px -150px 0px"
  };
  
  const comboImgObserver = new IntersectionObserver ((entries, comboImgObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("combo__img--show");
        comboImgObserver.unobserve(entry.target);
      }
    });
  }, comboImgOptions);
  
  comboImgs.forEach(img => {
    comboImgObserver.observe(img);
  })

  // "section" Observer
  const sectionOptions = {
    rootMargin: '0px 0px -60%'
  };

  const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        highlightHandler(entry);
      }
    });
  }, sectionOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  function highlightHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelectorAll('.nav__link--active');
    const shouldBeActive = document.querySelectorAll('[data-ref=' + id + ']');

    if (currentlyActive) {
      currentlyActive.forEach(link => { link.classList.remove('nav__link--active') });
    }
    if (shouldBeActive) {
      shouldBeActive.forEach(link => { link.classList.add('nav__link--active') });
    }
  }
}

// || Menu Mobile
const menu = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".nav__list--menu .nav__link");
const toggle = document.querySelector("#menu-toggle");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector("#closeButton");

const menuItems = [overlay, closeButton, menuLinks];

toggle.addEventListener("click", () => {
  menu.classList.add("menu-mobile--show");
  overlay.classList.add("overlay--show");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("menu-mobile--show");
  overlay.classList.remove("overlay--show");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("menu-mobile--show");
  overlay.classList.remove("overlay--show");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu-mobile--show");
    overlay.classList.remove("overlay--show");
  });
})