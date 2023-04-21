const shoppingBtn = document.querySelector(".shopping__page__btn")
const cartList = document.querySelector('.cart__body__list')







// 제품 상세페이지에서 장바구니 버튼 눌렀을 때, 보완필요
//필요 정보를 객체 형태로
const product ={
    name: document.getElementById('product-name').innerText,
    price: document.getElementById('product-price').innerText,
    quantity:document.getElementById('product-quantity').value
}

//LocalStorage에 저장
localStorage.setItem('product', JSON.stringify(product))

//LocalStorage에서 정보가져오기
const productinfo = JSON.parse(localStorage.getItem("product"))

// 제품정보 HTML코드만들기
for(const i of product){
    const productItem = document.createElement('div')
		productItem.classList.add('product__item')

		const imgDiv = document.createElement('div')
		const productImg = document.createElement('img')
		productImg.src = i.imgUrl
		imgDiv.appendChild(productImg)
		productItem.appendChild(imgWrapper)

		const nameDiv = document.createElement('div')
		const productName = document.createElement('p')
		productName.textContent = product.name
}












shoppingBtn.addEventListener("click",()=>{
    window.location.href = 'main.html'
})