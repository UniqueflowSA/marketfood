import { main, addCommas } from "/public/js/main.js";
main();

const items = document.querySelector(".main-item-container");
const categorys = document.querySelector("#categorys");
const nations = document.querySelector("#nations");

// 제품 선택 투명도 UI
const itemgrid = document.querySelectorAll(".item-grid");
itemgrid.forEach( item => {
    item.addEventListener("mouseenter", (e) => {
        const overdimg = e.target.querySelector(".item-img");
        overdimg.style.opacity = "0.6";
    })
    item.addEventListener("mouseleave", (e) => {
        const overdimg = e.target.querySelector(".item-img");
        overdimg.style.opacity = "1";
    })
})

// 제품리스트 생성 함수
const createItems = (item) => {
    return `<div class="item-grid">
    <a href="/product/${item._id}" class="item-link">
        <img src="${item.imgUrl}" alt="" class="item-img">
        <div class="item-text">
            <div class="item-title">${item.product}</div>
            <div class="item-price">₩${addCommas(item.price)}</div>
            <div class="item-category"><img src="/public/img/${item.nation}-icon.jpg" alt="" class="country-img">${item.nation}" | "${item.category}}</div>
        </div>
    </a>
</div>`
}

// 카테고리 생성 함수
const createCategory = (item) => {
    return `<li class="main-nav-list"><p  class="main-nav-content-unclicked">${item.category}</p></li>`
}

// 국가 생성 함수
const createNation = (item) => {
    return `<li class="main-nav-list"><p  class="main-nav-content-unclicked"><img src="public/img/${item.nation}-icon.jpg" alt="" class="country-img">${item.nation}</p></li>`
}

// 캐러셀 슬라이드
const carousel = document.querySelector(".carousel");
const carouselImgs = carousel.querySelector(".carousel-imgs");
const carouselimg = carouselImgs.querySelectorAll(".carousel-img");
    // 전역변수를 이렇게 사용했을시 생기는 문제
    // 클로저? 이름이 비슷해서 헷갈린다? currentImg는 네임이 충돌할 가능성이 높아보인다

let currentImg = 0;

setInterval(function() {
    const from = -(1955 * currentImg);
    const to = from - 1955;
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
    let marginLeft = parseInt(window.getComputedStyle(carouselImgs).marginLeft)
    if (marginLeft > 5865){currentImg = 0}
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
    let marginLeft = parseInt(window.getComputedStyle(carouselImgs).marginLeft)
    if (marginLeft > 5865){currentImg = 0}
}


// 제품 국가별/종류별 UI 변경
const categoryButton = document.querySelectorAll(".main-header-category button");
const categoryMenu = document.querySelectorAll(".main-nav-unclicked ul");
const categoryMenuList = document.querySelectorAll("#category ul li p");
const categoryMenuimg = document.querySelectorAll("#category ul li p img");

for (let i = 0; i < categoryButton.length; i++) {
    categoryButton[i].onclick = () => {

        // 제품 카테고리 클릭 초기화
        categoryMenuList.forEach((category) => {
            category.classList.remove("main-nav-content-clicked");
          })

        // 전체 메뉴 데이터 가져오는 패치 추가 *필요

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


// 제품 카테고리 클릭시 UI 변경
categoryMenuList.forEach((category) => {
    category.addEventListener("click", (event) => {
        categoryMenuList.forEach((category) => {
          category.classList.remove("main-nav-content-clicked");
        });
        category.classList.add("main-nav-content-clicked")
        });
    }
)

// 카테고리리스트 생성 fetch
fetch("/category")
    .then(res => res.json())
    .then(categorylist => {
        categorylist.forEach((category)=>{
            const createdCategory = createCategory(category);
            categorys.innerHTML += createdCategory;
        })
    })
    .catch((e)=> {
        alert(`에러 : ${e}`);
    });


// 국가리스트 생성 fetch
fetch("/nation")
.then(res => res.json())
.then(nationlist => {
    nationlist.forEach((nation)=>{
        const createdNation = createNation(nation);
        nations.innerHTML += createdNation;
    })
})
.catch((e)=> {
    alert(`에러 : ${e}`);
});


// 제품 리스트 생성 fetch
fetch("http://localhost:4000/product")
    .then(res => res.json())
    .then(productlist =>{ //첫 화면에 전체 값 보여주기
        productlist.forEach((product)=>{
            const newproduct = createItems(product);
            items.innerHTML += newproduct;
        }) 
    })
    .then(productlist => { //카테고리 메뉴 전환시 전체 값 보여주기
        categoryButton.addEventListener("click", (e) => {
            productlist.forEach((product)=>{
                const allproduct = createItems(product);
                items.innerHTML += allproduct;
            })
        }) 
        categoryMenuList.forEach((categoryMenu) => {
            categoryMenu.addEventListener("click", (e) =>{
                const categoryitems = [];
                const clickedcategory = e.target;

                if(clickedcategory.contains(categoryMenuimg)){
                    //카테고리메뉴가 국가별 분류일 경우
                    if(product.nation.includes(clickedcategory.textContent)){
                        categoryitems.push(product)
                    }
                } else {
                productlist.forEach((product)=>{
                    //카테고리메뉴가 종류별메뉴일 경우
                    if(product.category.includes(clickedcategory.textContent)){
                        categoryitems.push(product)
                    }
                })}

                if (categoryitems.length === 0){
                    //아이템 없으면 아무것도 없다는거 띄워주기
                    items.innerHTML = `<div class="no-items">상품이 없습니다.</div>`
                } else { //아이템 있으면 결과 출력
                    categoryitems.forEach((product)=>{
                        const newproduct = createItems(product);
                        items.innerHTML += newproduct;
                    }) 
                }
            })
        })
    })
    .catch((e)=> {
        alert(`에러 : ${e}`);
    });


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
