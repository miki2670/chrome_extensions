console.log("Chrome extenstion go");

let spans = document.getElementsByTagName("span");
for (e of spans) {
  e.style["background-color"] = "#FF00FF";
}
