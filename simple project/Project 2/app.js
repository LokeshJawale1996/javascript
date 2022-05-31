const closedBulb = document.querySelector(".closed");
const openBulb = document.querySelector(".open");

//add event listner

//added click event listner when bulb is closed
closedBulb.addEventListener("click", () => {
  //checked if openBulb contains open class which displays none

  if (openBulb.classList.contains("open")) {
    //then add class active to there which shows displays block
    openBulb.classList.add("active");

    closedBulb.classList.remove("active");
  }
});

openBulb.addEventListener("click", () => {
  if (closedBulb.classList.contains("closed")) {
    closedBulb.classList.add("active");
    openBulb.classList.remove("active");
  }
});
