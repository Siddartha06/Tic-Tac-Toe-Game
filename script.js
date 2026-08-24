let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#NewGame");
let msgContiner = document.querySelector(".msg-container");
let winner = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgContiner.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turn0){
            box.innerText="0";
            turn0= false;
        }
        else {
            box.innerText="X"; 
            turn0= true;
        }
        box.disabled = true;
        checkWinner();
    });

});
const disableboxes = () => {
    for (box of boxes){
        box.disabled=true;
    }


};

const enableboxes = () => {
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }


};

const showWinner = (winner) => {
msg.innerText = `Congratulations, winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disableboxes();


};




const checkWinner = () => {
    for (pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val=== pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
