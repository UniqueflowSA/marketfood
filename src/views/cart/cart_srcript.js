const shoppingBtn = document.querySelector(".shopping__page__btn")

// detail 페이지 데이터요청
// const productInfo = {
// 	_id : itemid,
// 	product : product.product,
// 	price : product.price,
// 	amount : productAmount.innerText,
// 	imgUrl : product.imgUrl,
// };
// const productInfoJson = JSON.stringify(productInfo);

// window.localStorage.setItem(nextCartNum, productInfoJson)


const btn = document.querySelector('.btn')
let productObj ={
  _id : 32432432222, 
  product: 'chill', 
  price: 40000, 
  amount: 2,
  imgUrl: './image/art-4919768.gif',
}

btn.addEventListener('click',()=>{ 
  localStorage.setItem(Math.floor(Math.random()*100), JSON.stringify(productObj))

  console.log('이게뭐지')
})
//로컬데이터 생성 테스트

	const cartEmpty = document.querySelector('#cart__empty') //제품없을때 안내문 파트
	const cartDetail = document.querySelector('.cart__detail') //배송비 및 토탈가격 포함 section
	const cartHaveProduct = document.querySelector('#cart__have__product') //장바구니 상품리스트 페이지
	const allDeleteBtn = document.querySelector('#all__delete') //전체상품 삭제 버튼

const dataCount = localStorage.length;
const orders = []

for(let i=0;i<dataCount; i++){
	const key = localStorage.key(i);
	const data = JSON.parse(localStorage.getItem(key))
	orders.push(data)
}
console.log(orders);
if(dataCount > 0){//장바구니 상품이 있을 때
		allDeleteBtn.classList.remove('display__none')
		cartEmpty.classList.add('display__none')
		cartHaveProduct.classList.remove('display__none')
		cartDetail.classList.remove('display__none')

		orders.forEach((cartItem) =>{
			const{ _id, product, price, amount, imgUrl} = cartItem
			cartHaveProduct.insertAdjacentHTML('beforeend', 
				`<div class="cart__product__list" id='productItem__${_id}'>
			
				<div class="list__img__block">
							<a href="#none"><img id="product__img__${_id}" src=${imgUrl} alt="상품이미지파일"></a>
						</div>
						<div class="list__name__block">
							<!-- 상품정보 파트 -->
							<span class="product__name__text" id="product__name__${_id}">${product}</span>
							<button class="btn__default sel__del" id="select__delete__${_id}"> Delete</button>
						</div>
						<div class="list__info__block">
							<!-- 수량 및 가격 -->
							<div class="product__quan">
								<span>수량:</span>
								<button class="btn__default" id="minus__btn__${_id}">-</button>
								<input id="quan__num__${_id}"value = '${amount}'>
								<button class="btn__default" id="plus__btn__${_id}">+</button>
							</div>
							<div class="product__price">
								<span>가격:</span>
								<span id="product__price__num__${_id}">${price*amount}</span> 
							</div>
						</div>
					</div>
					`)

			const plusBtn = document.querySelector(`#plus__btn__${_id}`)
			const minusBtn = document.querySelector(`#minus__btn__${_id}`)
			const amountNum= document.querySelector(`#quan__num__${_id}`)
			const productPrice = document.querySelector(`#product__price__num__${_id}`)
			const deleteBtn = document.querySelector(`#select__delete__${_id}`)
			const productItem = document.querySelector(`#productItem__${_id}`)
			 

			

			plusBtn.addEventListener('click',()=>{
				 amountNum.value = Number(amountNum.value)+1
				 productPrice.innerHTML = (price * Number(amountNum.value))
			})
			minusBtn.addEventListener('click',()=>{
				if(Number(amountNum.value) > 1){
					amountNum.value = Number(amountNum.value)-1
					productPrice.innerHTML = (price * Number(amountNum.value))
				} else if(Number(amountNum.value) <= 1){
					alert("수량 최소값입니다.")
				}
				

			})
			deleteBtn.addEventListener('click', ()=>{
				const key = localStorage.key(_id)
				localStorage.removeItem(key)
				productItem.remove()
				location.reload()
			})
			const orderPrice = document.querySelector('#order__price__num')
			const totalPrice = document.querySelector('#total__price__num')
			const orderpageBtn = document.querySelector('.order__page__btn')

			const orderPriceFunc= ()=>{
					let orderPriceNum = 0;
					orders.forEach(cartItme =>{
						const{_id, price, amount} = cartItem
						const productPriceNum = price*amount
						orderPriceNum += productPriceNum
					})
					orderPrice.textContent = orderPriceNum
					totalPrice.textContent = (orderPriceNum*1)+2500  
				}
				orderPriceFunc()
				
				orderpageBtn.addEventListener('click',()=>{
					window.location.href = '../order/index.html'

				})



		})
	}else if(dataCount === 0 ){ //장바구니 비었을 때
			allDeleteBtn.classList.add('display__none')
			cartEmpty.classList.remove('display__none')
			cartHaveProduct.classList.add('display__none')
			cartDetail.classList.add('display__none')
		
	}
	allDeleteBtn.addEventListener('click',()=> {
		if(confirm("장바구니 목록을 삭제합니다.")){
			alert("목록이 삭제되었습니다.");
			window.localStorage.clear();
			location.reload()
		}
		
	})

