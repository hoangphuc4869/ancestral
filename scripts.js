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
  prePageX = e.pageX;
  preScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  // scrolling images to left according to mouse pointer
  if (!isDragging) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  carousel.scrollLeft = e.pageX;
  let possitionDiff = e.pageX - prePageX;
  carousel.scrollLeft = preScrollLeft - possitionDiff;
  showHiddenIcon();
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

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
  prevPgX = e.pageX;
  prevScrLeft = container_reivew.scrollLeft;
};

const pulling = (e) => {
  if (!isPulling) return;
  e.preventDefault();
  container_reivew.classList.add("smoothy_dragging");
  let diffPo = e.pageX - prevPgX;
  container_reivew.scrollLeft = prevScrLeft - diffPo;
};

const pullingEnd = () => {
  isPulling = false;
  container_reivew.classList.remove("smoothy_dragging");
};

container_reivew.addEventListener("mousemove", pulling);
container_reivew.addEventListener("mousedown", pullingStart);
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
