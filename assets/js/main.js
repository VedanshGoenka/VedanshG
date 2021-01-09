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

//Creates the Read More/Less Button
function buttonCompute(dots, moreText, btnText) {
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

//Shortens syntax -- Me trying to reduce clutter. Hi MOM!
function idName(id){
  return document.getElementById(String(id));
}

//All Buttons...
function showMoreLessAstro() {
  buttonCompute(
    idName("dots-astro2020"),
    idName("more-astro2020"),
    idName("clickButton-astro2020")
  );
}

function showMoreLessFiber() {
  buttonCompute(
    idName("dots-fiber"),
    idName("more-fiber"),
    idName("clickButton-fiber")
  );
}
