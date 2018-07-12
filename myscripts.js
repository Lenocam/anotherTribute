function resizeHeaderOnScroll() {
  var distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 0;
  headerEl = document.getElementById("header");

  if (distanceY > shrinkOn) {
    headerEl.classList.add("shrink");
    console.log(distanceY);
  } else {
    headerEl.classList.remove("shrink");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
