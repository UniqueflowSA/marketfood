import { main } from "/public/js/main.js";
main();

// css 마무리 *필요
// 미디어쿼리 *필요

// 상품명, 상품설명, 가격, 사진주소 api 패치
// 장바구니 누르면 장바구니 데이터 만들기
// 바로구매 누를시 회원이면 주문하기로, 비회원이면 로그인으로
// 수량 버튼 누를시 수량 늘리기
// 주문금액 합산 계산


// 주소 토대로 자르고, 지워서 아이디 구하기
const html = window.location.href;
const sp = html.split("product/");
const itemid = sp[1].replace("/", "");


// 로그인, 비로그인 유저별 주문버튼 생성
const buttonContainer = document.querySelector(".order-container")

if (loggedInUser) {
    buttonContainer.innerHTML += `<div class="button-sub-container">
    <a class="button-cart"><p>장바구니</p></a>
    <a href="/orders/create?pid=${id}&count=1" class="button-purchase"><p>바로구매</p></a>
  </div>`;
} else {
    buttonContainer.innerHTML += `<div class="button-sub-container">
    <a class="button-cart"><p>장바구니</p></a>
    <a href="/src/views/login.html" class="button-purchase"><p>바로구매</p></a>
  </div>`
    button-purchase.addEventListener("click", ()=>{alert("로그인 후 이용가능합니다")});
}


// 프로덕트 정보 렌더링
const productName = document.querySelector(".product-name")
const productDesc = document.querySelector(".product-desc")
const productPrice = document.querySelector(".product-price")

fetch(`/product/${itemid}`)
  .then(res = res.json())
  .then((product)=>{
    productName.textContent = product.product;
    productDesc.textContent = product.detailDescription;
    productPrice.textContent = product.price;

  })