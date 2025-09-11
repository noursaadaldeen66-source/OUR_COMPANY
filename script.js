// navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY < 200) {
    header.classList.add("navbar");
  } else {
    header.classList.remove("navbar");
  }
});

//whyus

const items = document.querySelectorAll(".accordion-item");
const toggles = document.querySelectorAll(".accordion-toggle");

window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      item.classList.add("visible");
    }
  });
});

toggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      toggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.checked = false;
        }
      });
    }
  });
});

// skills part
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// proto
const list = document.querySelectorAll(".list");
const itemBox = document.querySelectorAll(".item-box");
list.forEach((elem) => {
  elem.addEventListener("click", function () {
    list.forEach((elem) => {
      elem.classList.remove("active");
    });
    this.classList.add("active");
    let value = this.getAttribute("data-filter");
    itemBox.forEach((element) => {
      element.classList.add("hide");
      if (element.getAttribute("data-item") == value || value == "all") {
        element.classList.remove("hide");
      }
    });
  });
});
// const list = document.querySelectorAll('.list');
// const itemBox = document.querySelectorAll('.item-box');

// list.forEach((elem) => {
//     elem.addEventListener('click', function () {
//         list.forEach((elem) => {
//             elem.classList.remove('active');
//         });
//         this.classList.add('active');
//         let value = this.getAttribute('data-filter');
//         itemBox.forEach(element => {
//             if (element.getAttribute('data-item') == value || value == "all") {
//                 element.classList.remove('hide');
//                 element.style.transform = "translateY(0)";
//                 // element.style.opacity = "1";
//             } else {
//                 element.classList.add('hide');
//                 element.style.order = "1,8,6,8,5,7,4,7";
//                 // element.style.opacity = "0";
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    const title = item.querySelector(".menu-title");

    title.addEventListener("click", function () {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
      } else {
        menuItems.forEach((other) => {
          other.classList.remove("open");
        });
        item.classList.add("open");
      }
    });
  });
});
