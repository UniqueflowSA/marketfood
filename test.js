fetch("/product")
    .then(res => res.json())
    .then((productlist)=>{
        console.log(productlist);
    })