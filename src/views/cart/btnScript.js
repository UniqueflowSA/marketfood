const btn = document.querySelector('.btn')


let productObj ={
  _id : "1001010", 
  productName: 'chill', 
  price: 40000, 
  quantity: 2,
  image: './image/art-4919768.gif',
}

btn.addEventListener('click',()=>{
  localStorage.setItem('json', JSON.stringify(productObj))
  console.log('이게뭐지')
})