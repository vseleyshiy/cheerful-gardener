let tomato = 0;
let tomatoesLength = document.getElementById('tomatoesLength');
let bedTomatoesLength = document.getElementById('bedTomatoesLength');
let setTomatoesLength = document.getElementById('setTomatoesLength');
let tomatoesBedNum = 1;
let cucumbersBedNum = 1;
let tomatoesBedLimit = 6;
let cucumbersBedLimit = 10;
let tomatoesInterval = 5000;
let cucumbersInterval = 10000;

function addTomatoes() {
    tomato++
    setTomatoesLength.innerHTML = "Всего можно собрать: " + tomato;
};
function setTomatoes() {
    tomatoesLength.innerHTML = tomato + Number(tomatoesLength.innerHTML);
    tomato = 0;
    setTomatoesLength.innerHTML = "Всего можно собрать: 0";
};

setInterval(addTomatoes, tomatoesInterval);

let main = document.getElementById('main');
let shop = document.getElementById('shop');
let shopOpenButton = document.getElementById('shopOpen');

function shopOpen() {
    main.style.display = 'none';
    shop.style.display = 'block';
    shopOpenButton.style.display = 'none';
};

function shopClose() {
    main.style.display = 'block';
    shop.style.display = 'none';
    shopOpenButton.style.display = 'block';
    littleMoneyError.style.display = 'none';
    manyBedsError.style.display = 'none';
    congratulations.style.display = 'none';
};

let gBedTomatoesList = document.getElementById('gBedTomatoesList');
let littleMoneyError = document.getElementById('littleMoney');
let manyBedsError = document.getElementById('manyBeds');
let inputTomatoesBedPriceNumber = document.getElementById('inputTomatoesBedPriceNumber');
let tomatoesBedPrice = 15;
let cucumbersBedPrice = 10;
let tomatoesIcon = document.createElement('img');
let inputTomatoesBedPriceText = document.getElementById('inputTomatoesBedPriceText');
manyBedsError.innerHTML = 'Вы можете купить только ' + tomatoesBedLimit + ' грядок помидоров!';
tomatoesIcon.src = 'img/tomatoes__icon.png';
tomatoesIcon.classList = 'shop-icon__img';

bedTomatoesLength.innerHTML = tomatoesBedNum + '/' + tomatoesBedLimit;
bedCucumbersLength.innerHTML = cucumbersBedNum + '/' + cucumbersBedLimit;
inputTomatoesBedPriceNumber.style.display = 'flex';
inputTomatoesBedPriceNumber.style.alignItems = 'center';
inputTomatoesBedPriceNumber.innerHTML = tomatoesBedPrice;
inputTomatoesBedPriceNumber.insertAdjacentElement('afterbegin', tomatoesIcon);
inputTomatoesBedPriceText.innerHTML = 'Стоимость:';
function shopBuyBedTomatoes() {
    if (tomatoesBedNum >= tomatoesBedLimit) {
        manyBedsError.innerHTML = 'Вы можете купить только ' + tomatoesBedLimit + ' грядок помидоров!';
        manyBedsError.style.display = 'block';
    } else if (Number(tomatoesLength.innerHTML) < tomatoesBedPrice) {
        littleMoneyError.style.display = 'block';
    } else {
        tomatoesBedNum++;
        bedTomatoesLength.innerHTML = tomatoesBedNum + '/' + tomatoesBedLimit;
        tomatoesLength.innerHTML = Number(tomatoesLength.innerHTML) - tomatoesBedPrice;
        tomatoesBedPrice += 15;
        inputTomatoesBedPriceNumber.style.display = 'flex';
        inputTomatoesBedPriceNumber.style.alignItems = 'center';
        inputTomatoesBedPriceNumber.innerHTML = tomatoesBedPrice;
        inputTomatoesBedPriceNumber.insertAdjacentElement('afterbegin', tomatoesIcon);
        inputTomatoesBedPriceText.innerHTML = 'Стоимость:';
        for (i = 0; i < 1; i++) {
            let gBed = document.createElement('li');
            gBed.className = 'g__bed-item';
            gBed.innerHTML = '<div class="g__bed-item-title">' + tomatoesBedNum + ' ' + 'Грядка</div> <div class="g__bed-img-wrap"> <img src="img/tomatoes.png" alt="tomatoes" class="g__bed-img"></div><div class="g__bed-block"></div>'
            gBedTomatoesList.appendChild(gBed);
        };
        setInterval(addTomatoes, tomatoesInterval);
        if (tomatoesBedNum === 6) {
            GBedCucumbersShop.style.display = 'flex';
        }
    }
};

let cucumber = 0;
let setCucumbersLength = document.getElementById('setCucumbersLength');
let cucumbersLength = document.getElementById('cucumbersLength');

function addCucumbers() {
    cucumber++
    setCucumbersLength.innerHTML = "Всего можно собрать: " + cucumber;
};

function setCucumbers() {
    cucumbersLength.innerHTML = cucumber + Number(cucumbersLength.innerHTML);
    cucumber = 0;
    setCucumbersLength.innerHTML = "Всего можно собрать: 0";
};

let GBedCucumbersShop = document.getElementById('GBedCucumbersShop');
let GBedCucumbers = document.getElementById('GBedCucumbers');
let GBedCucumbersList = document.getElementById('GBedCucumbersList');
let shopItemCucumbers = document.querySelector('li.shop__item.shop__item-cucumbers');
let moneyLengthBedCucumbers = document.getElementById('moneyLengthBedCucumbers');
let moneyLengthCucumbers = document.getElementById('moneyLengthCucumbers');
let congratulations = document.getElementById('congratulations');
let inputCucumbersBedPriceNumber = document.getElementById('inputCucumbersBedPriceNumber');
let inputCucumbersBedPriceText = document.getElementById('inputCucumbersBedPriceText');

function shopBuyGBedCucumbers() {
    if (Number(tomatoesLength.innerHTML) >= 100) {
        tomatoesLength.innerHTML = Number(tomatoesLength.innerHTML) - 100;
        tomatoesBedLimit = 15;
        bedTomatoesLength.innerHTML = tomatoesBedNum + '/' + tomatoesBedLimit;
        setTimeout(() => {
            congratulations.style.display = 'block';
            congratulations.innerHTML = 'Поздравляю, ваш лимит на грядки с помидорами повышен до ' + tomatoesBedLimit + '!';
        }, 200);
        GBedCucumbersShop.style.display = 'none';
        GBedCucumbers.style.display = 'flex';
        shopItemCucumbers.style.display = 'flex';
        moneyLengthBedCucumbers.style.display = 'flex';
        moneyLengthCucumbers.style.display = 'flex';
        setInterval(addCucumbers, cucumbersInterval);
    } else {
        littleMoneyError.style.display = 'block';
    };
};

let cucumbersIcon = document.createElement('img');
cucumbersIcon.src = 'img/cucumbers__icon.png';
cucumbersIcon.classList = 'shop-icon__img';
inputCucumbersBedPriceNumber.style.display = 'flex';
inputCucumbersBedPriceNumber.style.alignItems = 'center';
inputCucumbersBedPriceNumber.innerHTML = cucumbersBedPrice;
inputCucumbersBedPriceText.innerHTML = 'Стоимость: ';
inputCucumbersBedPriceNumber.insertAdjacentElement('afterbegin', cucumbersIcon);
function shopBuyBedCucumbers() {
    if (Number(cucumbersLength.innerHTML) >= cucumbersBedPrice) {
        if (cucumbersBedNum === cucumbersBedLimit) {
            littleMoneyError.innerHTML = 'Вы можете купить только ' + cucumbersBedLimit + ' грядок огурцов!';
            littleMoneyError.style.display = 'block';
        } else {
            cucumbersLength.innerHTML = Number(cucumbersLength.innerHTML) - cucumbersBedPrice;
            cucumbersBedNum++;
            bedCucumbersLength.innerHTML = cucumbersBedNum + '/' + cucumbersBedLimit;
            cucumbersBedPrice += 10;
            inputCucumbersBedPriceNumber.innerHTML = cucumbersBedPrice;
            inputCucumbersBedPriceText.innerHTML = 'Стоимость: ';
            inputCucumbersBedPriceNumber.insertAdjacentElement('afterbegin', cucumbersIcon);
            for (let i = 0; i < 1; i++) {
                let bed = document.createElement('li');
                bed.innerHTML = '<div class="g__bed-item-title"> ' + cucumbersBedNum + ' ' + 'Грядка</div><div class="g__bed-img-wrap"><img src="img/cucumbers.png" alt="cucumbers" class="g__bed-img"></div><div class="g__bed-block"></div>';
                bed.classList = 'g__bed-item g__bed-item-cucumbers';
                GBedCucumbersList.appendChild(bed);
            };
            setInterval(addCucumbers, cucumbersInterval);
        };
    } else {
        littleMoneyError.style.display = 'block';
    };
} 