const shoppingBtn = document.querySelector(".shopping__page__btn")




// // 제품 상세페이지에서 장바구니 버튼 눌렀을 때, 보완필요
// //필요 정보를 객체 형태로
// const product ={
//     name: document.getElementById('product-name').innerText,
//     price: document.getElementById('product-price').innerText,
//     quantity:document.getElementById('product-quantity').value
// }

// //LocalStorage에 저장
// localStorage.setItem('product', JSON.stringify(product))

window.addEventListener('load',()=>{
	const localLength = localStorage.length;
	const orders = []
	for(let i=1;i<localLength+1;i++){
		if(localStorage.getItem(String(i))){ //LocalStorage에서 정보가져오기
			orders.push(JSON.parse(localStorage.getItem(String(i))))
		}
	}
	const allDeleteBtn = document.querySelector('#all__delete')
	const cartEmpty = document.querySelector('#cart__empty')
	const cartHaveProduct = document.querySelector('#cart__have__product')
	const cartProductList = document.querySelector('.cart__product__list')

	if(orders.length > 0){ //장바구니 상품이 있을 때
		allDeleteBtn.classList.remove('display__none')
		cartEmpty.classList.add('display__none')
		cartHaveProduct.classList.remove('display__none')

		orders.forEach((product) =>{
			const{ product_id, productName, price, quantity,image} = product
			cartProductList.insertAdjacentHTML('beforeend',
			`
			<div id='productItem__${product_id}'>
				<div class="list__img__block">
					<a href="#none"><img id="product__img__${product_id}" src="${image}" alt="상품이미지파일"></a>
				</div>
				<div class="list__name__block">
					<!-- 상품정보 파트 -->
					<span id="product__name__${product_id}">${productName}</span>
					<button class="btn__defalut" id="select__delete__${product_id}"> Delete</button>
				</div>
				<div class="list__info__block">
					<!-- 수량 및 가격 -->
					<div class="product__quan">
						<span>수량:</span>
						<button class="btn__default" id="minus__btn__${product_id}">-</button>
						<span id="quan__num__${product_id}">${quantity}</span>
						<button class="btn__default" id="plus__btn__${product_id}">+</button>
					</div>
					<div class="product__price">
						<span>가격</span>
						<span id="product__price__num__${product_id}">${price}</span>
					</div>
				</div>
			</div>
			`)
		})
		const plusBtn = document.querySelector(`#plus__btn__${product_id}`)
		const minusBtn = document.querySelector(`#minus__btn__${product_id}`)
		const quantityNum= document.querySelector(`#quan__num__${product_id}`)
		const productPrice = document.querySelector(`#product__price__num__${product_id}`)
		const deleteBtn = document.querySelector(`#select__delete__${product_id}`)
		const productItem = document.querySelector(`#productItem__${product_id}`)
		const orderPrice = document.querySelector('order__price__num')
		const totalPrice = document.querySelector('#total__price__num')


		let crrentNum = parseInt(quantityNum.textContent)
		plusBtn.addEventListener('click',()=>{
			quantityNum.textContent = crrentNum + 1
			productPrice.textContent = (price * Number(quantityNum))
		})
		minusBtn.addEventListener('click',()=>{
			quantityNum.textContent = crrentNum - 1
			productPrice.textContent = (price * Number(quantityNum))
		})
		deleteBtn.addEventListener('click', ()=>{
			const key = localStorage.key(product_id)
			localStorage.removeItem(key)
			productItem.remove()
		})
		const orderPriceFunc= ()=>{
			
		}




	}else if(orders.length === 0 ){ //장바구니 비었을 때

		allDeleteBtn.classList.add('display__none')
		cartEmpty.classList.remove('display__none')
		cartHaveProduct.classList.add('display__none')
	}

})

	






shoppingBtn.addEventListener("click",()=>{
    window.location.href = 'main.html'
})