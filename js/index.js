const inputs = document.querySelectorAll(".inputs input");
const rectangleWr = document.querySelector(".rectangle-wrap");
const rectangleWrAll = document.querySelectorAll(".rectangle-wrap");
const rectElem = document.querySelectorAll(".rectangle");
let line = Array.from(document.querySelectorAll(".line"));

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.classList.toggle("checked");
    var checked = document.querySelectorAll(".checked");
    // for (let i = 0; i < line.length; i++) {
    //   const element = line[i];

    //   element.classList.add("none");
    // }
    for (var i = 0; i < line.length; i++) {
      let tr = line[i].children;
      console.log(tr);
      for (var j = 0; j < line.length; j++) {
        let td = tr[j];

        td.classList.add("none");
      }
    }

    switch (checked.length) {
      case 6:
        rectangleWr.classList.toggle("none");
        // for (let i = 0; i < line.length; i++) {
        //   const element = line[i];
        //   if (element.classList.contains("line-1")) {
        //     element.classList.remove("none");
        //   }
        //   if (element.classList.contains("line-2")) {
        //     element.classList.remove("none");
        //   }
        // }
        for (var i = 0; i <= 1; i++) {
          let tr = line[i].children;
          console.log(tr);
          for (var j = 0; j <= 2; j++) {
            let td = tr[j];
            console.log(td.classList);
            td.classList.remove("none");
          }
        }
        console.log("6");
        break;

      case 9:
        rectangleWr.classList.toggle("none");
        for (var i = 0; i <= 2; i++) {
          let tr = line[i].children;
          console.log(tr);
          for (var j = 0; j <= 2; j++) {
            let td = tr[j];
            console.log(td.classList);
            td.classList.remove("none");
          }
        }
        console.log("9");
        break;

      // case 10:
      //   rectangleWr.classList.toggle("none");
      //   for (var i = 0; i <= 1; i++) {
      //     let tr = line[i].children;
      //     console.log(tr);
      //     for (var j = 0; j <= 4; j++) {
      //       let td = tr[j];
      //       console.log(td.classList);
      //       td.classList.remove("none");
      //     }
      //   }
      //   console.log("9");
      //   break;

      case 12:
        rectangleWr.classList.toggle("none");
        for (var i = 0; i <= 2; i++) {
          let tr = line[i].children;
          console.log(tr);
          for (var j = 0; j <= 3; j++) {
            let td = tr[j];
            console.log(td.classList);
            td.classList.remove("none");
          }
        }
        console.log("12");
        break;

      case 15:
        rectangleWr.classList.toggle("none");
        for (var i = 0; i <= 2; i++) {
          let tr = line[i].children;
          console.log(tr);
          for (var j = 0; j <= 4; j++) {
            let td = tr[j];
            console.log(td.classList);
            td.classList.remove("none");
          }
        }
        console.log("15");
        break;

      case 18:
        rectangleWr.classList.toggle("none");
        for (var i = 0; i <= 2; i++) {
          let tr = line[i].children;
          console.log(tr);
          for (var j = 0; j <= 5; j++) {
            let td = tr[j];
            console.log(td.classList);
            td.classList.remove("none");
          }
        }
        console.log("15");
        break;

      default:
        rectangleWr.classList.add("none");
        element.classList.add("none");
    }
  });
});

// const num = [1, 5, 1, 45, 4, 78, 5, 44, 65, 5, 66, 9, 6, 5, 8, 6, 9];

// function a(arr, itr) {
//   for (let i = 0; i <= itr; i++) {
//     const element = arr[i];
//     console.log(element);
//   }
// }
// a(num, 1);

// const num = [
//   [1, 5, 1],
//   [45, 4, 78],
//   [5, 44, 65],
//   [5, 66, 9],
//   [6, 5, 8],

// console.log(line);

// for (var i = 0; i <= 4; i++) {
//   let tr = line[i].children;
//   console.log(tr);
//   for (var j = 0; j <= 2; j++) {
//     let td = tr[j];
//     console.log(td.classList);
//     td.classList.remove("none");
//   }
// }
