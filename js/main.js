let tomato = 0;
let tomatoesLength = document.getElementById('tomatoesLength');
let bedLength = document.getElementById('bedLength');
let setLength = document.getElementById('setLength');
let tomatoesBedNum = 1;
let interval = 5000;

function addTomatoes() {
    tomato++
    setLength.innerHTML = "Всего можно собрать: " + tomato;
};
function setTomatoes() {
    tomatoesLength.innerHTML = tomato + Number(tomatoesLength.innerHTML);
    tomato = 0;
    setLength.innerHTML = "Всего можно собрать: 0";
}

setInterval(addTomatoes, interval);

let main = document.getElementById('main');
let shop = document.getElementById('shop');
let shopOpenButton = document.getElementById('shopOpen');

function shopOpen() {
    main.style.display = 'none';
    shop.style.display = 'block';
    shopOpenButton.style.display = 'none';
}

function shopClose() {
    main.style.display = 'block';
    shop.style.display = 'none';
    shopOpenButton.style.display = 'block';
    littleMoneyError.style.display = 'none'
}

let shopBuyButton = document.querySelector('div.shop__button-buy');
let gBedList = document.getElementById('gBedList');
let littleMoneyError = document.getElementById('littleMoney');
let manyBedsError = document.getElementById('manyBeds');

bedLength.innerHTML = tomatoesBedNum + '/6';
function shopBuy() {
    if (Number(tomatoesLength.innerHTML) < 50) {
        littleMoneyError.style.display = 'block';
    } else if (tomatoesBedNum >= 6) {
        manyBedsError.style.display = 'block';
    } else {
        tomatoesBedNum++;
        bedLength.innerHTML = tomatoesBedNum + '/6';
        tomatoesLength.innerHTML = Number(tomatoesLength.innerHTML) - 50;
        for (i = 0; i < 1; i++) {
            let gBed = document.createElement('li');
            gBed.className = 'g__bed-item';
            gBed.innerHTML = '<div class="g__bed-item-title">' + tomatoesBedNum + ' ' + 'Грядка</div> <div class="g__bed-img-wrap"> <img src="img/tomatoes.png" alt="tomatoes" class="g__bed-img"><div class="g__bed-block"></div></div>'
            gBedList.appendChild(gBed);
        }
    }
    setInterval(addTomatoes, interval);
}

