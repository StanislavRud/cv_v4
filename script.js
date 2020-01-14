let prevSlideButton = document.querySelector('.prevSlide');
let nextSlideButton = document.querySelector('.nextSlide');
let img = document.querySelector('.sliderImg');
let arrImg = ["./img/elem1.jpg", "./img/elem2.jpg", "./img/elem3.jpg", "./img/elem4.jpg" ];
let currentImg = 0;

function clickNext () {
    function makeCurrentImgNext() {
        return function () {
            if (currentImg === 4) {
                return currentImg = 0;
            } else
                return currentImg++;
        }
    }

    let curImg = makeCurrentImgNext();
    img.src = arrImg[curImg()];
    console.log(img.src);
}


function clickPrev (){
    function makeCurrentImgPrev() {
        if (currentImg === 0) {
            return currentImg = 3;
        } else return function () {
            return currentImg--;
            }

    }
    let curImg = makeCurrentImgPrev();
    img.src = arrImg[curImg()];
    console.log(img.src);
}



nextSlideButton.addEventListener('click', clickNext);
prevSlideButton.addEventListener('click', clickPrev);