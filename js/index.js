const inputs = document.querySelectorAll(".inputs input");
const rectangleWr = document.querySelector(".rectangle-wrap");
const rectangleWrAll = document.querySelectorAll(".rectangle-wrap");
const rectElem = document.querySelectorAll(".rectangle");
let line = Array.from(document.querySelectorAll(".line"));

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.classList.toggle("checked");
    const checked = document.querySelectorAll(".checked");

    rectangleWr.classList.add("none");

    for (let i = 0; i < line.length; i++) {
      let childrenRow = line[i].children;

      for (let j = 0; j < line.length; j++) {
        let elemRow = childrenRow[j];
        elemRow.classList.add("none");
      }
    }

    switch (checked.length) {
      case 6:
        rectangleWr.classList.toggle("none");

        count(line, 1, 2);
        break;

      case 9:
        rectangleWr.classList.toggle("none");

        count(line, 2, 2);
        break;

      case 10:
        rectangleWr.classList.toggle("none");

        count(line, 1, 4);
        break;

      case 12:
        rectangleWr.classList.toggle("none");

        count(line, 2, 3);
        break;

      case 15:
        rectangleWr.classList.toggle("none");

        count(line, 2, 4);
        break;

      case 18:
        rectangleWr.classList.toggle("none");

        count(line, 2, 5);
        break;

      case 30:
        rectangleWr.classList.toggle("none");

        count(line, 2, 9);
        break;

      default:
        rectangleWr.classList.add("none");
        element.classList.add("none");
    }
  });
});

function count(arr, accRow, accEl) {
  for (let i = 0; i <= accRow; i++) {
    let childrenRow = arr[i].children;

    for (let j = 0; j <= accEl; j++) {
      let elemRow = childrenRow[j];
      elemRow.classList.remove("none");
    }
  }
}
