/*
function sliderOne(){
    const sliderLeftSide = document.querySelector('.main-slider-left');
    const sliderRightSide = document.querySelector('.main-slider-right');
    const sliderImages = document.querySelector('.main-slider__images');
    let sliderImagesItems = sliderImages.children.length;
    let distance = 0;
    sliderRightSide.onclick = function (){
        if (distance == (sliderImagesItems *(-500))+500){
            console.log("Error,not many img");   
        } else {
        sliderImages.style.left = `${distance = distance + (-500)}px`;
        return distance;
        }
    }
    sliderLeftSide.onclick = function (){
        if (distance == 0){
            console.log("Error,not many img");     
        } else {
        sliderImages.style.left = `${distance = distance + (500)}px`;
        return distance;
        }
    }
};
sliderOne();
*/
/*
function slider_2(){
    const leftArrow = document.querySelector('.slider-left_item');
    const rightArrow = document.querySelector('.slider-right_item');
    const sliderImages = document.querySelector('.main-slider-images');
    const sliderImgAmount = sliderImages.children.length;
    let distanceImg = 49.998+(sliderImgAmount*(-(16.666)));
    console.log(distanceImg)
    let distance = 0;
    rightArrow.onclick = function(){
        if(distance == distanceImg){
            sliderImages.style.left =`0`;
            distance = 0;
        } else {
            sliderImages.style.left = `${distance = distance + (-16.666000000000004)}vw`;  
        }
    }
    leftArrow.onclick = function(){
        if(distance == 0){
            sliderImages.style.left =`0`;
            distance = 0;
        } else {
            sliderImages.style.left = `${distance = distance + (16.666000000000004)}vw`;  
        }
    }
}
slider_2();
*/


