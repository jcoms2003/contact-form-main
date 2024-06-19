const InvalidMsg = function (e) {
  const elem = e.target;
  elem.classList.remove("error");
  elem.classList.remove("success");
  if (!elem.validity.valueMissing && !elem.validity.patternMismatch) {
    elem.classList.add("success");
  } else {
    elem.classList.add("error");
  }
};

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("ok");
  });
});
