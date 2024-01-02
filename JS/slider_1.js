const sliderImages = [
    '1.jpg','2.jpg','3.jpg','4.jpg',
];
let activeImg = 0;
const sliderLine = document.querySelector('.main-slider-images');
const widthSliderLine = document.querySelector('.main-slider').clientWidth;
sliderLine.style.width = widthSliderLine*3 +2 + "px";
sliderLine.style.height = widthSliderLine + "px";
sliderLine.style.left = '-'+widthSliderLine+'px';
let flag = true;
// Функция для активации изображений
const initSlider = () => {
    const img = document.createElement('img');
    img.alt =' ';
    img.src = './Source/IMG/slider_1/' + sliderImages[activeImg];
    sliderLine.append(img);
    nextImgGen();
    prevImgGen();
}

const nextImgGen = () => {
    let nextImage = activeImg + 1;
    if (nextImage >= sliderImages.length) nextImage = 0;
    const img = document.createElement('img');
    img.alt =' ';
    img.src = './Source/IMG/slider_1/' + sliderImages[nextImage];
    sliderLine.append(img);
}
const prevImgGen = () => {
    let prevImage = activeImg - 1;
    if (prevImage < 0) prevImage = sliderImages.length - 1;
    const img = document.createElement('img');
    img.alt =' ';
    img.src = './Source/IMG/slider_1/' + sliderImages[prevImage];
    sliderLine.prepend(img);
}

const nextSlide = () => {
    activeImg++;
    if (activeImg >= sliderImages.length) activeImg = 0;
    document.querySelector('.main-slider-images img').remove();
    nextImgGen();
}
const prevSlide = () => {
    activeImg--;
    if (activeImg < 0) activeImg = sliderImages.length - 1;
    document.querySelector('.main-slider-images img:last-child').remove();
    prevImgGen();
}
initSlider();

document.querySelector(".slider-right_item").addEventListener('click',nextSlide);
document.querySelector(".slider-left_item").addEventListener('click',prevSlide);

