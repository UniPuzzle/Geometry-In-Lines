const inputs = document.querySelectorAll(".inputs input");
const rectangleWr = document.querySelector(".rectangle-wrap");
const rectangleWrAll = document.querySelectorAll(".rectangle-wrap");
const rectElem = document.querySelectorAll(".rectangle");
let line = Array.from(document.querySelectorAll(".line"));

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    if (input.classList.contains("hor")) {
      return;
    } else {
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
        case 4:
          rectangleWr.classList.toggle("none");

          count(line, 1, 1);
          break;

        case 5:
          rectangleWr.classList.toggle("none");

          count(line, 1, 2, 1);
          break;

        case 6:
          rectangleWr.classList.toggle("none");

          count(line, 1, 2);
          break;

        case 7:
          rectangleWr.classList.toggle("none");

          count(line, 1, 3, 1);
          break;

        case 8:
          rectangleWr.classList.toggle("none");

          count(line, 1, 3);
          break;

        case 9:
          rectangleWr.classList.toggle("none");

          count(line, 2, 2);
          break;

        case 10:
          rectangleWr.classList.toggle("none");

          count(line, 1, 4);
          break;

        case 11:
          rectangleWr.classList.toggle("none");

          count(line, 2, 3, 1);
          break;

        case 12:
          rectangleWr.classList.toggle("none");

          count(line, 2, 3);
          break;

        case 13:
          rectangleWr.classList.toggle("none");

          count(line, 2, 4, 2);
          break;

        case 14:
          rectangleWr.classList.toggle("none");

          count(line, 2, 4, 1);
          break;

        case 15:
          rectangleWr.classList.toggle("none");

          count(line, 2, 4);
          break;

        case 16:
          rectangleWr.classList.toggle("none");

          count(line, 3, 3);
          break;

        case 17:
          rectangleWr.classList.toggle("none");

          count(line, 2, 5, 1);
          break;

        case 18:
          rectangleWr.classList.toggle("none");

          count(line, 2, 5);
          break;

        case 19:
          rectangleWr.classList.toggle("none");

          count(line, 3, 4, 1);
          break;

        case 20:
          rectangleWr.classList.toggle("none");

          count(line, 3, 4);
          break;

        case 21:
          rectangleWr.classList.toggle("none");

          count(line, 2, 6);
          break;

        case 22:
          rectangleWr.classList.toggle("none");

          count(line, 3, 5, 2);
          break;

        case 23:
          rectangleWr.classList.toggle("none");

          count(line, 3, 5, 1);
          break;

        case 24:
          rectangleWr.classList.toggle("none");

          count(line, 3, 5);
          break;

        case 25:
          rectangleWr.classList.toggle("none");

          count(line, 2, 8, 2);
          break;

        case 26:
          rectangleWr.classList.toggle("none");

          count(line, 2, 8, 1);
          break;

        case 27:
          rectangleWr.classList.toggle("none");

          count(line, 2, 8);
          break;

        case 28:
          rectangleWr.classList.toggle("none");

          count(line, 3, 6);
          break;

        case 29:
          rectangleWr.classList.toggle("none");

          count(line, 2, 9, 1);
          break;

        case 30:
          rectangleWr.classList.toggle("none");

          count(line, 2, 9);
          break;

        case 31:
          rectangleWr.classList.toggle("none");

          count(line, 3, 7, 1);
          break;

        case 32:
          rectangleWr.classList.toggle("none");

          count(line, 3, 7);
          break;

        default:
          rectangleWr.classList.add("none");
          element.classList.add("none");
      }
    }
  });
});

function count(arr, accRow, accEl, sliceEl = 0) {
  let couEl = accEl;

  for (let i = 0; i <= accRow; i++) {
    if (i === accRow) {
      couEl -= sliceEl;
    }
    let childrenRow = arr[i].children;

    for (let j = 0; j <= couEl; j++) {
      let elemRow = childrenRow[j];

      elemRow.classList.remove("none");
    }
  }
}

// function count(arr, accRow, accEl) {
//   for (let i = 0; i <= accRow; i++) {
//     let childrenRow = arr[i].children;

//     for (let j = 0; j <= accEl; j++) {
//       let elemRow = childrenRow[j];

//       elemRow.classList.remove("none");
//     }
//   }
// }

// function count(arr, accRow, accEl, sliceEl = 0) {
//   let couEl = accEl;
//   for (let i = 0; i <= accRow; i++) {
//     let childrenRow = arr[i].children;

//     for (let j = 0; j <= couEl; j++) {
//       let elemRow = childrenRow[j];
//       console.log(elemRow);
//       elemRow.classList.remove("none");
//     }
//     couEl -= sliceEl;
//   }
// }
