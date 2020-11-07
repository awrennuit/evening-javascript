//////////////
//   HOME   //
//////////////

///////////////
//   CLOCK   //
///////////////
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let today = "";

function getDayOfWeek() {
  const date = new Date().getDay();
  today = days[date];
}

function setPointerToToday() {
  for (let day of document.getElementsByTagName("p")) {
    if (day.innerHTML === today) {
      day.classList.add("active");
    }
  }
}

getDayOfWeek();
setPointerToToday();

/////////////////
//   PALETTE   //
/////////////////
const miniPage = [
  "mini-container",
  "mini-header",
  "mini-content",
  "mini-btn-secondary",
  "mini-btn-primary",
];
const palette = ["first", "second", "third", "fourth", "fifth"];
const paletteDisplay = ["one", "two", "three", "four", "five"];
const range = [];
setRange();

if (document.getElementById("generate-btn")) {
  document
    .getElementById("generate-btn")
    .addEventListener("click", commenceTheming);
}

function assignRandomColor() {
  const red = setColor();
  const green = setColor();
  const blue = setColor();
  return `rgb(${red}, ${green}, ${blue})`;
}

function commenceTheming() {
  for (let i = 0; i < 5; i++) {
    const thisPalette = document.getElementById(palette[i]);
    const thisPaletteDisplay = document.getElementById(paletteDisplay[i]);
    thisPalette.style.backgroundColor = assignRandomColor();
    thisPaletteDisplay.innerHTML = thisPalette.style.backgroundColor;
  }
  concludeTheming();
}

function concludeTheming() {
  document.getElementById(
    miniPage[0]
  ).style.backgroundColor = document.getElementById(
    palette[0]
  ).style.backgroundColor;
  document.getElementById(miniPage[1]).style.color = document.getElementById(
    palette[1]
  ).style.backgroundColor;
  document.getElementById(miniPage[2]).style.color = document.getElementById(
    palette[2]
  ).style.backgroundColor;
  document.getElementById(
    miniPage[3]
  ).style.borderColor = document.getElementById(
    palette[4]
  ).style.backgroundColor;
  document.getElementById(miniPage[3]).style.color = document.getElementById(
    palette[3]
  ).style.backgroundColor;
  document.getElementById(
    miniPage[4]
  ).style.backgroundColor = document.getElementById(
    palette[4]
  ).style.backgroundColor;
  document.getElementById(miniPage[4]).style.color = document.getElementById(
    palette[3]
  ).style.backgroundColor;
}

function setColor() {
  return range[Math.floor(Math.random() * range.length)];
}

function setRange() {
  for (let i = 0; i < 255; i++) {
    range.push(i);
  }
}

///////////////////
//   HALLOWEEN   //
///////////////////
const spookyDay = `2021-10-31 00:00:00`;
let ghoulsInTheGraveyard = '';

if (document.getElementById("day")) {
ghoulsInTheGraveyard = setInterval(() => {
  ghostsComeOutAndSkeletonsDance();
}, 1000);
}

function ghostsComeOutAndSkeletonsDance() {
  const pumpkinsLaugh =
    Date.parse(spookyDay.replace(" ", "T")) - Date.parse(new Date());
  const hayridesAndOwls = Math.floor(pumpkinsLaugh / (1000 * 60 * 60 * 24));
  const cauldronsBubble = Math.floor((pumpkinsLaugh / (1000 * 60 * 60)) % 24);
  const spidersBatsAndBlackCats = Math.floor((pumpkinsLaugh / 1000 / 60) % 60);
  const witchesAndBroomsticksFlyAcrossTheMoon = Math.floor(
    (pumpkinsLaugh / 1000) % 60
  );
  if (hayridesAndOwls < 10) {
    document.getElementById("day").innerHTML = `0${hayridesAndOwls}`;
  } else {
    document.getElementById("day").innerHTML = hayridesAndOwls;
  }
  if (cauldronsBubble < 10) {
    document.getElementById("hour").innerHTML = `0${cauldronsBubble}`;
  } else {
    document.getElementById("hour").innerHTML = cauldronsBubble;
  }
  if (spidersBatsAndBlackCats < 10) {
    document.getElementById("min").innerHTML = `0${spidersBatsAndBlackCats}`;
  } else {
    document.getElementById("min").innerHTML = spidersBatsAndBlackCats;
  }
  if (witchesAndBroomsticksFlyAcrossTheMoon < 10) {
    document.getElementById(
      "sec"
    ).innerHTML = `0${witchesAndBroomsticksFlyAcrossTheMoon}`;
  } else {
    document.getElementById(
      "sec"
    ).innerHTML = witchesAndBroomsticksFlyAcrossTheMoon;
  }
  if (pumpkinsLaugh <= 0) {
    clearInterval(ghoulsInTheGraveyard);
  }
}
