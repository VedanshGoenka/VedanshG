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
  $("#astrophotography20-article").load("assets/blog/astrophotography2020/");
  $("#fiberopticcable-article").load("assets/blog/fiberopticinstall/");
  $("#astrophotography19-article").load("assets/blog/astrophotography2019/");
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
function idName(id) {
  return document.getElementById(String(id));
}

//All Buttons...
function showMoreLessAstro20() {
  buttonCompute(
    idName("dots-astro20"),
    idName("more-astro20"),
    idName("clickButton-astro20")
  );
}

function showMoreLessFiber() {
  buttonCompute(
    idName("dots-fiber"),
    idName("more-fiber"),
    idName("clickButton-fiber")
  );
}

function showMoreLessAstro19() {
  buttonCompute(
    idName("dots-astro19"),
    idName("more-astro19"),
    idName("clickButton-astro19")
  );
}