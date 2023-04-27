

function insertProductsfromOde (){

	const localLength = localStorage.length;
	const orders = []
	for(let i=1;i<localLength+1;i++){
		if(localStorage.getItem(String(i))){ //LocalStorage에서 정보가져오기
			orders.push(JSON.parse(localStorage.getItem(String(i))))
		}
	}

	const cartProductList = document.querySelector('.cart__detail')
	
		orders.forEach((product) =>{
			const{ _id, productName, price, quantity,image} = product
			cartProductList.insertAdjacentHTML('beforeend',
			`
			<div class="cart__product__list" id='productItem__${_id}'>
      <div class="list__img__block">
        <a href="#none"><img id="product__img__${_id}" src="${image}" alt="상품이미지파일"></a>
      </div>
      <div class="list__name__block">
        <!-- 상품정보 파트 -->
        <span class="product__name__text" id="product__name__${_id}">${productName}</span>
      </div>
      <div class="list__info__block">
        <!-- 수량 및 가격 -->
        <div class="product__quan">
          <span>수량:</span>
          <button class="btn__default minusbtn" id="minus__btn__${_id}">-</button>
          <span id="quan__num__${_id}">${quantity}</span>
          <button class="btn__default plusbtn" id="plus__btn__${_id}">+</button>
        </div>
        <div class="product__price">
          <span>가격:</span>
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
		const productItem = document.querySelector(`#productItem__${_id}`)
		const orderPrice = document.querySelector('#order__price__num')
		const totalPrice = document.querySelector('#total__price__num')
		const orderBtn = document.querySelector("#order__btn")
	


		let crrentNum = parseInt(quantityNum.textContent)
		plusBtn.addEventListener('click',()=>{
			quantityNum.textContent = crrentNum + 1
			productPrice.textContent = (price * Number(quantityNum))
		})
		minusBtn.addEventListener('click',()=>{
			quantityNum.textContent = crrentNum - 1
			productPrice.textContent = (price * Number(quantityNum))
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

		orderBtn.addEventListener('click',()=>{ // 주문자페이지로 데이터보내기
			
		})
}
	
