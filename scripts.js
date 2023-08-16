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
console.log(parentContainer);

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
