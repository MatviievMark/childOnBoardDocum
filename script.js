let currentImage = 0;
let totalImages = 75;
const flipbook = document.getElementById("flipbook");
const textElement = document.getElementById("text");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentCSVFile = ""; // Add this variable

function loadCSV(csvFile) {
  currentImage = 0;

  currentCSVFile = csvFile;

  fetch(csvFile)
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n");
      imageTexts = lines.slice(1).map((line) => line.replace(/"/g, ""));
      totalImages = imageTexts.length - 1;
      console.log(imageTexts.length);
      changeImage();
    });
}

document.getElementById("watchLink").addEventListener("click", function () {
  loadCSV("watchText.csv");
});

document.getElementById("iphoneLink").addEventListener("click", function () {
  loadCSV("iphoneText.csv");
});

function changeImage() {
  let imageFolder =
    currentCSVFile === "watchText.csv" ? "docum/" : "documiPhone/";
  flipbook.querySelector("img").src = imageFolder + (currentImage + 1) + ".jpg";
  textElement.textContent = imageTexts[currentImage];
}

function nextImage() {
  currentImage++;
  if (currentImage >= totalImages) {
    currentImage = 0;
  }
  changeImage();
}

function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = totalImages - 1;
  }
  changeImage();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "ArrowLeft") {
    prevImage();
  }
});

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

document
  .getElementById("dropdownButton")
  .addEventListener("click", function () {
    this.classList.toggle("rotate");
    var dropdownContent = document.getElementById("dropdownContent");
    if (this.style.transform === "rotate(90deg)") {
      this.style.transform = "";
      dropdownContent.style.pointerEvents = "none"; // Add this
      dropdownContent.style.width = "0";
      dropdownContent.style.transform = "translateX(100%)";
      Array.from(dropdownContent.children).forEach(function (child) {
        child.style.opacity = "0";
      });
      setTimeout(function () {
        dropdownContent.style.display = "none";
        dropdownContent.style.pointerEvents = "auto"; // Move this here
      }, 500);
    } else {
      this.style.transform = "rotate(90deg)";
      dropdownContent.style.display = "flex";
      dropdownContent.style.pointerEvents = "none"; // Add this
      setTimeout(function () {
        dropdownContent.style.width = "auto";
        dropdownContent.style.transform = "translateX(0)";
        Array.from(dropdownContent.children).forEach(function (child) {
          child.style.opacity = "1";
        });
        setTimeout(function () {
          dropdownContent.style.pointerEvents = "auto"; // Move this here
        }, 500); // Add this setTimeout to delay setting pointer-events: auto;
      }, 0);
    }
  });

// Selet the iPhone by default
document.getElementById("iphoneLink").click();
