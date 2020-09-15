"use strict";

var hash = window.location.hash;
message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  var input = document.querySelector("#message-input");
  var encrypted = btoa(input.value);
  var linkInput = document.querySelector("#link-input");
  linkInput.value = "".concat(window.location, "#").concat(encrypted);
  linkInput.select();
});