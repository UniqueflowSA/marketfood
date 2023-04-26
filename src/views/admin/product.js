const productListEl = document.getElementById("product-list");

// API에서 데이터를 가져오는 함수
async function getProductData() {
    const response = await fetch("https://example.com/api/products");
    const data = await response.json();
    return data;
}

// 상품 데이터를 받아와서 페이지에 보여주는 함수
async function displayProductData() {
    const products = await getProductData();
    products.forEach((product) => {
        const productEl = document.createElement("div");
        productEl.classList.add("product");
        productEl.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.price}</p>
        `;
        productListEl.appendChild(productEl);
    });
}

displayProductData();

// or

// API에서 상품 정보를 받아오는 함수
function fetchProductList() {
    return fetch('https://example.com/api/products')
      .then(response => response.json())
      .then(data => data.products);
  }
  
  // 상품 정보를 테이블에 추가하는 함수
function addProductToTable(product) {
    const productList = document.getElementById('product-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.registeredAt}</td>
      <td>${product.name}</td>
      <td>${product.country}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
    `;
    productList.appendChild(row);
  }
  
  // 상품 목록 페이지 로드 시 실행되는 함수
  async function loadProductList() {
    const productList = await fetchProductList();
    productList.forEach(addProductToTable);
  }
  
  loadProductList();