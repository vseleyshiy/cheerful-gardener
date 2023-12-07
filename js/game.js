let game = document.getElementById('game');
let gameOpenButton = document.getElementById('gameOpenButton');

function gameOpen() {
    main.style.display = 'none';
    shop.style.display = 'none';
    game.style.display = 'block';
    gameOpenButton.style.display = 'none';
    shopOpenButton.style.display = 'none';
}

function gameClose() {
    main.style.display = 'block';
    shop.style.display = 'none';
    game.style.display = 'none';
    shopOpenButton.style.display = 'block';
    gameOpenButton.style.display = 'block';
}


let btnTop = document.getElementById('btnTop');
let btnBottom = document.getElementById('btnBottom');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let map = document.getElementById('map');
let square = document.getElementById('square');
let point = document.getElementById('point');
let check = document.getElementById('check');
let checkRecord = document.getElementById('newRecord');
let numX = 0;
let numY = 0;
let checkPoint = 0;



function btnTopClick() {
    numY -= 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    givePoint();
    defeat();
};

function btnBottomClick() {
    numY += 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    givePoint();
    defeat();
};

function btnLeftClick() {
    numX -= 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    givePoint();
    defeat();
};

function btnRightClick() {
    numX += 20;
    square.style.transform = 'translate(' + numX + 'px,' + numY + 'px)';
    givePoint();
    defeat();
};
function defeat() {
    if (numY < 0 || numY > 200 || numX < 0 || numX > 200) {
        map.style.backgroundColor = 'rgb(155, 0, 0)';
        map.style.transform = 'scale(0.6)';
        btnTop.style.backgroundColor = 'red';
        btnBottom.style.backgroundColor = 'red';
        btnLeft.style.backgroundColor = 'red';
        btnRight.style.backgroundColor = 'red';
        square.classList.add('game__defeat-animation');
    } else {
        map.style.backgroundColor = 'rgb(131, 131, 131)';
        map.style.transform = 'scale(1)';
        btnTop.style.backgroundColor = 'rgb(128, 128, 128)';
        btnBottom.style.backgroundColor = 'rgb(128, 128, 128)';
        btnLeft.style.backgroundColor = 'rgb(128, 128, 128)';
        btnRight.style.backgroundColor = 'rgb(128, 128, 128)';
        square.classList.remove('game__defeat-animation');
    };
}


let numbersLength = [
    {
        numbers: ['20', '40', '60', '80', '100', '120', '140', '160', '180']
    },
    {
        numbers: ['20', '40', '60', '80', '100', '120', '140', '160', '180']
    },
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random(i) * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

let shuffleNumberXPoint = shuffleArray(numbersLength[0].numbers);
let shuffleNumberYPoint = shuffleArray(numbersLength[1].numbers);

function pointPosition() {
    point.style.transform = 'translate(' + shuffleNumberXPoint[0] + 'px,' + shuffleNumberYPoint[0] + 'px)';
};
pointPosition();

check.innerHTML = `Монеток: ${checkPoint}`;

function givePoint() {
    if (numX === Number(shuffleNumberXPoint[0]) && numY === Number(shuffleNumberYPoint[0])) {
        checkPoint++;
        check.innerHTML = `Монеток: ${checkPoint}`;
        shuffleNumberXPoint = shuffleArray(numbersLength[0].numbers);
        shuffleNumberYPoint = shuffleArray(numbersLength[1].numbers);
        pointPosition();
    };
};

let gameOfferColumnTake = document.getElementById('gameOfferColumnTake');
let gameOfferColumnReturn = document.getElementById('gameOfferColumnReturn');
let gameBoostInfo = document.getElementById('gameBoostInfo');
let boostLength = 0;

function mathFloorCheckPoint(val) {
    return Math.floor(val / 20) * 20;
}

setInterval(() => {
    gameOfferColumnTake.innerHTML = mathFloorCheckPoint(checkPoint);
    gameOfferColumnReturn.innerHTML = mathFloorCheckPoint(checkPoint) / 20;
}, Infinity);

function setGame() {
    if (checkPoint >= 20) {
        boostLength += mathFloorCheckPoint(checkPoint) / 20;
        gameBoostInfo.innerHTML = 'Удобрений: ' + boostLength;
        checkPoint = 0;
        check.innerHTML = 'Монеток: 0';
    } else {
        setTimeout(() => {
            gameBoostInfo.innerHTML = 'У вас недостаточно монет!';
        }, 0);
        setTimeout(() => {
            gameBoostInfo.innerHTML = 'Удобрений: ' + boostLength;
        }, 3000);
    }
}