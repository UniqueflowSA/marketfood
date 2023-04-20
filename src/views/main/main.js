import { navbarRender } from "/public/js/navbarRender.js";
navbarRender();

// 캐러셀 슬라이드
const carousel = document.querySelector(".carousel");
const carouselImgs = carousel.querySelector(".carousel-imgs");
const carouselimg = carouselImgs.querySelectorAll(".carousel-img");

const carouselnav = document.querySelectorAll(".carousel-indicators button");

let currentImg = 0;

setInterval(function() {
    let from = -(1955 * currentImg);
    let to = from - 1955;
    carouselImgs.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 1500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentImg++;
    if (currentImg === (carouselimg.length -1)) {
        currentImg = 0;
    }
}, 6000)


// 캐러셀 이동
const carouselLeft = document.querySelector(".carousel-prev");
const carouselRight = document.querySelector(".carousel-next");

carouselLeft.onclick = () => {
    if (currentImg <= 0) {
        currentImg = 4;
    }
    let from = -(1955 * currentImg);
    let to = from + 1955;
    carouselImgs.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 1500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentImg--;
}

carouselRight.onclick = () => {
    if(currentImg >= 4){
        currentImg = 0;
    }
    let from = -(1955 * currentImg);
    let to = from - 1955;
    carouselImgs.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 1500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentImg++;
}


// 캐러셀 네비

// for (let i = 0; i < carouselnav.length; i++) {
//     carouselnav[i].onclick = () => {
//     let clickedCarousel = document.querySelector(".carousel-button-clicked");

//     if (carouselnav[i] !== clickedCarousel) {
//         for(let j = 0 ; j < carouselnav.length; j++) {
//             carouselnav[j].classList.remove("carousel-button-clicked")
//             carouselnav[j].classList.add("carousel-button");
//         };
//         carouselnav[i].classList.add("carousel-button-clicked");
//         carouselnav[i].classList.remove("carousel-button");

//         // 캐러셀 네비게이션 버튼 자동으로 넘어가는 코드와 클릭하면 사진 변경되는 코드 필요
//         }
//     }
// } 


// 제품 카테고리 변경
const categoryButton = document.querySelectorAll(".main-header-category button");
const categoryMenu = document.querySelectorAll(".main-nav ul")

for (let i = 0; i < categoryButton.length; i++) {
    categoryButton[i].onclick = () => {
        let unclickedCategory = document.querySelector(".main-header-button");
        if (categoryButton[i] == unclickedCategory) {
            if (i == 0){
                categoryButton[0].classList.remove("main-header-button");
                categoryButton[0].classList.add("main-header-button-clicked");
                categoryMenu[0].classList.remove("main-nav-unclicked")
                categoryMenu[0].classList.add("main-nav-clicked")
                categoryButton[1].classList.add("main-header-button");
                categoryButton[1].classList.remove("main-header-button-clicked");
                categoryMenu[1].classList.add("main-nav-unclicked")
                categoryMenu[1].classList.remove("main-nav-clicked")
            }
            if (i == 1){
                categoryButton[1].classList.remove("main-header-button");
                categoryButton[1].classList.add("main-header-button-clicked");
                categoryMenu[1].classList.remove("main-nav-unclicked")
                categoryMenu[1].classList.add("main-nav-clicked")
                categoryButton[0].classList.add("main-header-button");
                categoryButton[0].classList.remove("main-header-button-clicked");
                categoryMenu[0].classList.add("main-nav-unclicked")
                categoryMenu[0].classList.remove("main-nav-clicked")
                }
            }
        }
}
