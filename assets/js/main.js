// Toggle Visibillty of Skills
function toggle(visible) {
  document.querySelectorAll(visible).forEach((e) => {
    e.hidden = !e.hidden;
  });
}

// Reduces the size of index.html
$(function () {
  $("#hobbies-html").load("hobbies.html");
  $("#aboutme-html").load("aboutme.html");
  $("#astrophotography2020-article").load("/assets/blog/astrophotography2020/");
  $("#fiberopticcable-article").load("/assets/blog/fiberopticinstall/");
  $("#contact-html").load("contact.html");
});


// Read More/Less Toggles
function showMoreLessAstro() {
  var dots = document.getElementById("dots-astro2020");
  var moreText = document.getElementById("more-astro2020");
  var btnText = document.getElementById("clickButton-astro2020");

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

function showMoreLessFiber() {
  var dots = document.getElementById("dots-fiber");
  var moreText = document.getElementById("more-fiber");
  var btnText = document.getElementById("clickButton-fiber");

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





