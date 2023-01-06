const currentUrl = new URL(window.location.href);

const params = new URLSearchParams(currentUrl.search);

const birthdate = params.get("birthdate");
const name = params.get("name");
const lifespan = params.get("lifespan");
const nameElement = document.getElementById("name");
nameElement.innerHTML = name;

const color = params.get("color");

const body = document.getElementById("body");
const circle = document.getElementsByClassName("circle");

if (color == "black") {
  body.style.color = "white";
}

// body.style.backgroundColor = "transparent";

const myDate = new Date(birthdate.split(".").reverse().join("-"));

displayWeeks(lifespan, myDate, name);

function displayWeeks(totalWeeks, dateOfBirth, name) {
  //delete all children of container
  const myNode = document.getElementById("myContainer");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  const puffer = 0.05;

  totalWeeks = totalWeeks * 52;

  //get witdth and height from container
  const containerWit = document.getElementById("myContainer").offsetWidth;
  const containerHei = document.getElementById("myContainer").offsetHeight;

  const pixel = containerWit * containerHei;
  const sizeOfOnePixel = Math.sqrt(pixel / totalWeeks);

  const sizeOfOneCircle = sizeOfOnePixel * 0.75;
  const marginOfOneCircle = sizeOfOnePixel * 0.25;

  const container = document.getElementById("myContainer");

  const weeksLived = document.getElementById("weeksLived");
  const weeks = Math.floor(
    (new Date() - dateOfBirth) / 1000 / 60 / 60 / 24 / 7
  );

  weeksLived.innerHTML = weeks;

  for (var i = 0; i < totalWeeks; i++) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    circle.style.width = sizeOfOneCircle - puffer + "px";
    circle.style.margin = marginOfOneCircle / 2 - puffer + "px";

    if (color == "black") {
      circle.style.backgroundColor = "#3b3b3b";
    }

    if (i < weeks) {
      if (color == "black") {
        circle.style.backgroundColor = "white";
      } else {
        circle.style.backgroundColor = "black";
      }
    }

    container.appendChild(circle);
  }
}
