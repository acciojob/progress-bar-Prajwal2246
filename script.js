const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currActive = 1;

nextBtn.addEventListener("click", () => {
  currActive++;
  if (currActive > circles.length) {
    currActive = circles.length;
  }
  update();
});

prevBtn.addEventListener("click", () => {
  currActive--;
  if (currActive < 1) {
    currActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".circle.active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  prevBtn.disabled = currActive === 1;
  nextBtn.disabled = currActive === circles.length;
}

// initialize state
update();
