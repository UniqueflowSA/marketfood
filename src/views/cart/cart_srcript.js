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

//장바구니 페이지가 로드될 때 로컬정보에 데이터 유무를 판단합니다.
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
	const cartProductList = document.querySelector('.cart__detail')
	const orderpageBtn = document.querySelector('.order__page__btn') 

	if(orders.length > 0){ //장바구니 상품이 있을 때
		allDeleteBtn.classList.remove('display__none')
		cartEmpty.classList.add('display__none')
		cartHaveProduct.classList.remove('display__none')

		orders.forEach((product) =>{
			const{ _id, productName, price, quantity,image} = product
			cartProductList.insertAdjacentHTML('beforeend',
			`
				<div class="cart__product__list" id='productItem__${_id}'>
					<div class="list__img__block">
						<a href="#none"><img id="product__img__${_id}" src=${image} alt="상품이미지파일"></a>
					</div>
					<div class="list__name__block">
						<!-- 상품정보 파트 -->
						<span class="product__name__text" id="product__name__${_id}">${productName}</span>
						<button class="btn__default sel__del" id="select__delete__${_id}"> Delete</button>
					</div>
					<div class="list__info__block">
						<!-- 수량 및 가격 -->
						<div class="product__quan">
							<span>수량:</span>
							<button class="btn__default" id="minus__btn__${_id}">-</button>
							<span id="quan__num__${_id}">${quantity}</span>
							<button class="btn__default" id="plus__btn__${_id}">+</button>
						</div>
						<div class="product__price">
							<span>가격</span>
							<span id="product__price__num__${_id}">${price}</span>
						</div>
					</div>
				</div>
				`)
		})
		const plusBtn = document.querySelector(`#plus__btn__${_id}`)
		const minusBtn = document.querySelector(`#minus__btn__${_id}`)
		const quantityNum= document.querySelector(`#quan__num__${_id}`)
		const productPrice = document.querySelector(`#product__price__num__${_id}`)
		const deleteBtn = document.querySelector(`#select__delete__${_id}`)
		const productItem = document.querySelector(`#productItem__${_id}`)
		const orderPrice = document.querySelector('#order__price__num')
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
			const key = localStorage.key(_id)
			localStorage.removeItem(key)
			productItem.remove()
		})
		allDeleteBtn.addEventListener('click',()=> {
			window.localStorage.clear();
		})
		const orderPriceFunc= ()=>{
			let orderPriceNum = 0;
			orders.forEach(product =>{
				const{_id, price, quantity} = product
				const productPriceNum = price*quantity
				orderPriceNum += productPriceNum
			})
			orderPrice.textContent = orderPriceNum
			totalPrice.textContent = (orderPriceNum*1)+2500  
		}
		orderPriceFunc()

		orderpageBtn.addEventListener('click',()=>{
			window.location.href = '../order/index.html'
		})


	}else if(orders.length === 0 ){ //장바구니 비었을 때

		allDeleteBtn.classList.add('display__none')
		cartEmpty.classList.remove('display__none')
		cartHaveProduct.classList.add('display__none')
	}

})


shoppingBtn.addEventListener("click",()=>{
    window.location.href = '../main/main.html'
})