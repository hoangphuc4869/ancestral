const plus = document.querySelectorAll(".plus"),
  number = document.querySelectorAll(".number"),
  minus = document.querySelectorAll(".minus");

for (let i = 0; i < plus.length; i++) {
  let a = 0;
  plus[i].addEventListener("click", () => {
    a++;
    number[i].innerText = a;
  });
  minus[i].addEventListener("click", () => {
    if (a > 0) {
      a--;
      number[i].innerText = a;
    }
  });
}

const carousel = document.querySelector(".products_row"),
  firstItem = document.querySelector(".product_wrap"),
  arrowIcons = document.querySelectorAll(".ancestral_products .arrow ");

let isDragging = false,
  prePageX,
  preScrollLeft;

const showHiddenIcon = () => {
  // showing or hiding icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //geting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";

  //   if (carousel.scrollLeft == 0) {
  //     arrowIcons[0].style.display = "none";
  //   } else {
  //     arrowIcons[0].style.display = "block";
  //   }
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstItemWidth = firstItem.clientWidth + 24;
    if (icon.id == "arr-left") {
      carousel.scrollLeft -= firstItemWidth;
    } else {
      carousel.scrollLeft += firstItemWidth;
    }
    setTimeout(() => showHiddenIcon(), 60); // calling showHideIcon after 60ms
  });
});

const dragStart = (e) => {
  // updating global variables value on mosue down event
  isDragging = true;
  prePageX = e.pageX || e.touches[0].pageX;
  preScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  // scrolling images to left according to mouse pointer
  if (!isDragging) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  carousel.scrollLeft = e.pageX;
  let possitionDiff = (e.pageX || e.touches[0].pageX) - prePageX;
  carousel.scrollLeft = preScrollLeft - possitionDiff;
  showHiddenIcon();
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

///review slider

const container_reivew = document.querySelector(".review_slider");
const firstReview = document.querySelectorAll(".rev")[0];
const navIcons = document.querySelectorAll(".con_rev > i");
console.log(navIcons);

let isPulling = false,
  prevPgX,
  prevScrLeft;
let firstReviewWidth = firstReview.clientWidth + 94;

navIcons.forEach((nav) => {
  nav.addEventListener("click", () => {
    container_reivew.scrollLeft +=
      nav.id == "left_nav" ? -firstReviewWidth : firstReviewWidth;
  });
});

const pullingStart = (e) => {
  isPulling = true;
  prevPgX = e.pageX || e.touches[0].pageX;
  prevScrLeft = container_reivew.scrollLeft;
};

const pulling = (e) => {
  if (!isPulling) return;
  e.preventDefault();
  container_reivew.classList.add("smoothy_dragging");
  let diffPo = (e.pageX || e.touches[0].pageX) - prevPgX;
  container_reivew.scrollLeft = prevScrLeft - diffPo;
};

const pullingEnd = () => {
  isPulling = false;
  container_reivew.classList.remove("smoothy_dragging");
};

container_reivew.addEventListener("mousemove", pulling);
container_reivew.addEventListener("touchmove", pulling);
container_reivew.addEventListener("mousedown", pullingStart);
container_reivew.addEventListener("touchstart", pullingStart);
container_reivew.addEventListener("mouseleave", pullingEnd);
container_reivew.addEventListener("touchend", pullingEnd);
container_reivew.addEventListener("mouseup", pullingEnd);

const hideShip = () => {
  let OneTime = document.getElementsByClassName("onetime"); //buttons
  let ship = document.getElementsByClassName("shipment"); //things to hide
  for (let i = 0; i < OneTime.length; i++) {
    OneTime[i].addEventListener("click", () => {
      ship[i].classList.toggle("hide"); //display none
    });
  }
};

//read more

const parentContainer = document.querySelectorAll(".content_rev");
// console.log(parentContainer);

for (let i = 0; i < parentContainer.length; i++) {
  parentContainer[i].addEventListener("click", (event) => {
    const current = event.target;
    const isReadmore = current.className.includes("readMore_btn");
    if (!isReadmore) {
      return;
    }
    const currenText = event.target.parentNode.querySelector(".read_more_text");
    // console.log(currenText.innerHTML);
    currenText.classList.toggle("show_text");
    current.textContent = current.textContent.includes("Read more")
      ? "...Read less"
      : "...Read more";
  });
}

const sidebar = document.querySelector(".sidebar");
const x = document.querySelector(".x");
const shopAll = document.querySelector(".shop_all");
const shopAll1 = document.querySelector(".shop_all1");
// const outside = document.querySelector(".main");
// console.log(outside);

// document.onclick = function (e) {
//   if (e.target.id !== "x") {
//     sidebar.classList.add("hideSidebar");
//     sidebar.classList.remove("showSidebar");
//   }
// };

shopAll1.addEventListener("click", () => {
  sidebar.classList.add("showSidebar");
  sidebar.classList.remove("hideSidebar");
});

shopAll.addEventListener("click", () => {
  sidebar.classList.add("showSidebar");
  sidebar.classList.remove("hideSidebar");
});

x.addEventListener("click", () => {
  sidebar.classList.add("hideSidebar");
  sidebar.classList.remove("showSidebar");
});

// outside.addEventListener("click", () => {
//   sidebar.classList.add("hideSidebar");
//   sidebar.classList.remove("showSidebar");
// });

const feel = document.querySelector(".feel_alive");

window.addEventListener("scroll", scrolling);
scrolling();

function scrolling() {
  const trigger = window.innerHeight;
  const feelTop = feel.getBoundingClientRect().top;

  if (feelTop < trigger) {
    feel.classList.add("showfeel_alive");
  } else {
    feel.classList.remove("showfeel_alive");
  }
}

const closePop = document.querySelector(".close");
const pop = document.querySelector(".popup_signup_wrap");
const discount = document.querySelector(".get_discount");
const no_thanks = document.querySelector(".no_thanks");
console.log(closePop);

closePop.addEventListener("click", () => {
  pop.classList.add("close_popup");
  pop.classList.remove("showPopup");
});

discount.addEventListener("click", () => {
  pop.classList.add("showPopup");
  pop.classList.remove("close_popup");
});

no_thanks.addEventListener("click", () => {
  pop.classList.add("close_popup");
  pop.classList.remove("showPopup");
});
