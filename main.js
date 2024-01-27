let boxes = document.querySelectorAll(".b");
let reset = document.querySelector(".reset");
let ng = document.querySelector(".ng");
let p = document.querySelector("p");
let game = document.querySelector(".play");

let turnO = true;
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turnO) {
            box.innerText = "O";
            box.style.color="red";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color="orange";
            turnO = true;
        }
        box.disabled = true;
        check();

    });

});

const check = () => {
    for (pat of win) {
        console.log(boxes[pat[0]].innerText);
        if (boxes[pat[0]].innerText == "X" && boxes[pat[1]].innerText == "X" && boxes[pat[2]].innerText == "X") {
            p.innerHTML = `WINNER IS X `;
            disablebox();
            game.style.visibility = "hidden";


        }
        if (boxes[pat[0]].innerText == "O" && boxes[pat[1]].innerText == "O" && boxes[pat[2]].innerText == "O") {
            p.innerHTML = `WINNER IS O `;
            disablebox();
            game.style.visibility = "hidden";


        }
        
    }
    if (count == 9) {
        p.innerHTML = `NO WINNER `;
        game.style.visibility = "hidden";
    }
}
const disablebox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};
const enablebox = () => {
    for (box of boxes) {
        box.disabled = false;
    }
};

reset.addEventListener("click", () => {
    enablebox();
    for (box of boxes) {
        box.innerHTML = "";
        p.innerHTML = "";
        count=0;


    }
});
ng.addEventListener("click", () => {
    enablebox();
    for (box of boxes) {
        box.innerHTML = "";
        p.innerHTML = "";
        game.style.visibility = "visible";
        count=0;

    }
});