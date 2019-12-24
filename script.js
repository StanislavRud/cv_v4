let prevButton = document.querySelector('.prevSlide');
let nextSlide = document.querySelector('.nextSlide');
let img = document.createElement('img');

let arr = ["src=./img/elem1.jpg", "src=./img/elem2.jpg", "src=./img/elem3.jpg", "src=./img/elem4.jpg" ];

// nextSlide.onclick = function () {
//     for (i=0, i<arr.length; i++;) {
//         img.src = arr[i];
//         console.log(img.src)
//     }
// }
let clickNext = function () {
    console.log('next img')
}

let clickPrev = function () {
    console.log('prev img')
}

nextSlide.addEventListener('click', clickNext);
prevButton.addEventListener('click', clickPrev);