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
  firstItem = document.querySelectorAll(".product_wrap")[0],
  arrowIcons = document.querySelectorAll(".ancestral_products .arrow ");

let isDragStart = false,
  isDragging = false,
  prePageX,
  preScrollLeft,
  possitionDiff;

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
const autoSlide = () => {
  if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
    return;
  possitionDiff = Math.abs(possitionDiff); //making positionDif positive
  let firstItemWidth = firstItem.clientWidth + 24;
  let valDiff = firstItemWidth - possitionDiff;
  if (carousel.scrollLeft > preScrollLeft) {
    //if user is scrolling to the right
    return (carousel.scrollLeft +=
      possitionDiff > firstItemWidth / 100 ? valDiff : -possitionDiff);
  }
  carousel.scrollLeft -=
    possitionDiff > firstItemWidth / 100 ? valDiff : -possitionDiff; //if user is scrolling to the left
};

const dragStart = (e) => {
  // updating global variables value on mosue down event
  isDragStart = true;
  prePageX = e.pageX || e.touches[0].pageX;
  preScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  // scrolling images to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  carousel.scrollLeft = e.pageX;
  possitionDiff = (e.pageX || e.touches[0].pageX) - prePageX;
  carousel.scrollLeft = preScrollLeft - possitionDiff;
  showHiddenIcon();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
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
  isPullStart = false,
  prevPgX,
  prevScrLeft,
  diffPo;

navIcons.forEach((nav) => {
  nav.addEventListener("click", () => {
    let firstReviewWidth = firstReview.clientWidth + 94;
    container_reivew.scrollLeft +=
      nav.id == "left_nav" ? -firstReviewWidth : firstReviewWidth;
  });
});

const slideAuto = () => {
  if (
    container_reivew.scrollLeft ==
    container_reivew.scrollWidth - container_reivew.clientWidth
  )
    return;
  diffPo = Math.abs(diffPo);
  let firstReviewWidth = firstReview.clientWidth + 94;
  let valDifference = firstReviewWidth - diffPo;

  if (container_reivew.scrollLeft > prevScrLeft) {
    return (container_reivew.scrollLeft +=
      diffPo > firstReviewWidth / 100 ? valDifference : -diffPo);
  }
  container_reivew.scrollLeft -=
    diffPo > firstReviewWidth / 100 ? valDifference : -diffPo;
};

const pullingStart = (e) => {
  isPullStart = true;
  prevPgX = e.pageX || e.touches[0].pageX;
  prevScrLeft = container_reivew.scrollLeft;
};

const pulling = (e) => {
  if (!isPullStart) return;
  e.preventDefault();
  isPulling = true;
  container_reivew.classList.add("smoothy_dragging");
  diffPo = (e.pageX || e.touches[0].pageX) - prevPgX;
  container_reivew.scrollLeft = prevScrLeft - diffPo;
};

const pullingEnd = () => {
  isPullStart = false;
  container_reivew.classList.remove("smoothy_dragging");
  if (!isPulling) return;
  isPulling = false;
  slideAuto();
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
