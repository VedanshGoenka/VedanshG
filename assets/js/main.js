function toggle(visible) {
  document.querySelectorAll(visible).forEach((e) => {
    e.hidden = !e.hidden;
  });
}

function showMoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("clickButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

$(function () {
  $("#astrophotography2020").load("astrophotography2020.html");
});