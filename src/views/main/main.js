import { main } from "/public/js/main.js";
main();

// 캐러셀 슬라이드
const carousel = document.querySelector(".carousel");
const carouselImgs = carousel.querySelector(".carousel-imgs");
const carouselimg = carouselImgs.querySelectorAll(".carousel-img");

let currentImg = 0;

setInterval(function() {
    let from = -(1955 * currentImg);
    let to = from - 1955;
    carouselImgs.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });

    currentImg++;
    if (currentImg === (carouselimg.length -1)) {
        currentImg = 0;
    }
}, 6000)


// 캐러셀 버튼이동
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
        duration: 500,
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
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentImg++;
}


// 캐러셀 네비 - 시간 남으면 구현

// const carouselnav = document.querySelectorAll(".carousel-indicators button");

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


// 제품 카테고리 클릭시
const categoryMenuList = document.querySelectorAll("#category ul li p");

categoryMenuList.forEach((category) => {
    category.addEventListener("click", (event) => {
        categoryMenuList.forEach((category) => {
          category.classList.remove("main-nav-content-clicked");
        });
        category.classList.add("main-nav-content-clicked")
        });
    }
)

// 제품 국가별/종류별 변경
const categoryButton = document.querySelectorAll(".main-header-category button");
const categoryMenu = document.querySelectorAll(".main-nav-unclicked ul")

for (let i = 0; i < categoryButton.length; i++) {
    categoryButton[i].onclick = () => {

        // 제품 카테고리 클릭 초기화
        categoryMenuList.forEach((category) => {
            category.classList.remove("main-nav-content-clicked");
          })

        // 전체 메뉴 데이터 가져오는 패치 추가 *진행필요

        // 버튼, 메뉴 UI 켜기
        if (categoryButton[i].classList.contains("main-header-button-unclicked") == true) {
            
            for (let j = 0; j < categoryButton.length; j++) {
                if (j !== i && categoryButton[j].classList.contains("main-header-button-clicked")) {
                    categoryButton[j].classList.replace("main-header-button-clicked", "main-header-button-unclicked");
                    categoryMenu[j].classList.replace("main-nav-cetegory-clicked", "main-nav-cetegory-unclicked");
                }
            }
            // 반대쪽 버튼, 메뉴 UI 끄기
            categoryButton[i].classList.replace("main-header-button-unclicked", "main-header-button-clicked")
            categoryMenu[i].classList.replace("main-nav-cetegory-unclicked", "main-nav-cetegory-clicked")
            let unclickedMainNav = document.querySelector(".main-nav-unclicked")
            unclickedMainNav.classList.replace("main-nav-unclicked", "main-nav-clicked")
                } else if (categoryButton[i].classList.contains("main-header-button-clicked") == true) {
            // 켜져있다면 버튼 끄기
            categoryButton[i].classList.replace("main-header-button-clicked", "main-header-button-unclicked")
            let unclickedMainNav = document.querySelector(".main-nav-clicked")
            unclickedMainNav.classList.replace("main-nav-clicked", "main-nav-unclicked")
            categoryMenu[i].classList.replace("main-nav-cetegory-clicked", "main-nav-cetegory-unclicked")
        }
    }
}

// 쿼리셀렉트올 main-nav-cetegory-clicked li 온클릭했는데
// main-nav-content-unclicked면 main-nav-content-clicked로 바꿔주고
// 클릭한 쿼리셀렉트올 main-nav-cetegory-clicked li 배열의 파트 데이터를 패치

