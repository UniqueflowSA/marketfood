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
		const deleteBtn = document.createElement("button")
		deleteBtn.classList.add('delete__btn')
		deleteBtn.textContent = 'Delete'
		nameDiv.appendChild(productName)
		nameDiv.appendChild(deleteBtn)
		productItem.appendChild(nameWrapper)

		const infoDiv = document.createElement('div')
		const quanDiv = document.createElement('div')
		const quanLabel = document.createElement('div')
		quanLabel.textContent = '수량:'
		const quanMinusBtn = document.createElement('button')
		quanMinusBtn.classList.add('info__quan__minus__btn')
		quanMinusBtn.textContent = '-'
		const quanNum = document.createElement('span')
		quantity.textContent = product.quantity 
		const quanPlusBtn = document.createElement('button')
		quanPlusBtn.classList.add('info__quan__plus__btn')
		quanPlusBtn.textContent = "+"
		quanDiv.appendChild(quanLabel)
		quanDiv.appendChild(quanMinusBtn)
		quanDiv.appendChild(quantity)
		quanDiv.appendChild(quanPlusBtn)
		infoDiv.appendChild(quanDiv)

		const priceDiv = document.createElement('div')
		const priceLabel = document.createElement('div')
		priceLabel.textContent = '가격: '
		const price =document.createElement('div')
		price.textContent = product.price
		priceDiv.appendChild(priceLabel)
		priceDiv.appendChild(price)
		priceDiv.appendChild(priceDiv)

		productItem.appendChild(infoDiv)

		cartList.appendChild(productItem)
}












shoppingBtn.addEventListener("click",()=>{
    window.location.href = 'main.html'
})