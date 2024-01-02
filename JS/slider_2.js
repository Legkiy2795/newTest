//Слайдер, и способ 1 по пролистыванию (касание левой и правой стороны слайдера)

const slider = [
    sliderWin = document.querySelector('.main-slider'),
    sliderLine = document.querySelector('.main-slider__images'),
    leftSide = document.querySelector('.main-slider__left'),
    rightSide = document.querySelector('.main-slider__right'),
    imgWidth = document.querySelector('.main-slider__images img').clientWidth,
    imgQnt = sliderLine.childElementCount,
];
const sliderCheck = [
    checkContent = document.querySelector('.main-slider__content'),
    checkRadio = [],
];
let activeImg = 0;

function swipe(){
    removeCheckPoint();
    if (activeImg >= slider[5]) --activeImg;
    if (activeImg <= 0) activeImg = 0;
    distance = imgWidth*activeImg;
    slider[1].style.left = -distance + 'px';
    checkPoint();
};
function swipeRight(){activeImg++; swipe();};
function swipeLeft(){activeImg--; swipe();};

slider[3].addEventListener('click', swipeRight);
slider[2].addEventListener('click', swipeLeft);

//Слайдер, и способ 2 по пролистыванию (для телефона свайпы)

slider[0].addEventListener('touchstart',handleTouchStart, false);
slider[0].addEventListener('touchmove',handleTouchMove, false);

let x1 = null;
let x2 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    //console.log("1" ,x1,y1);
};
function handleTouchMove(event) {
    if(!x1 || !y1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    //console.log("2" ,x2,y2);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    if (Math.abs(xDiff) > Math.abs(yDiff)){
        // r - l
        if (xDiff > 0) swipeLeft();
        else swipeRight();
    } 
    x1 = null;
    y1 = null;
};

// Способ 3, по инпутам
//Цикл для создания элемента(чекпоинта для местополож картинки), и присвоения класса
for(let i = 0;i < imgQnt;i++){
    newElem = document.createElement('div');
    newElem.classList.add('main-slider__radio',`main-slider__radio_${i}`);
    checkContent.append(newElem);
    sliderCheck[1].push( document.querySelector(`.main-slider__radio_${i}`));
};
// Это для проявления активного чекпоинта, и закрытия неактивных
function checkPoint(){sliderCheck[1][activeImg].classList.add('radio-active');};
function removeCheckPoint(){sliderCheck[1].forEach( (element) => element.classList.remove('radio-active'));};
checkPoint();
//Тыкаешь на чекпоинт, переходишь на картинку
const clickOper = [
];
for( let i = 0; imgQnt > i;i++){
    let newClickelment = sliderCheck[1][i].onclick = function(){
        activeImg = i;
        swipe();
    };
};



