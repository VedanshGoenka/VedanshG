// Toggle Visibillty of Skills
function toggle(visible) {
  document.querySelectorAll(visible).forEach((e) => {
    e.hidden = !e.hidden;
  });
}

// Read More/Less Toggle
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

// Reduces the size of index.html
$(function () {
  $("#hobbies-html").load("hobbies.html");
  $("#aboutme-html").load("aboutme.html");
  $("#astrophotography2020-article").load("/assets/blog/astrophotography2020/astrophoto2020.html");
  $("#contact-html").load("contact.html");
});