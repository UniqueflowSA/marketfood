// 데이터를 보여주는 함수
function showProductData(productId) {
  fetch(`/admin/register/product-id?product-id=${productId}`)
    .then((response) => response.json())
    .then((data) => {
      const title = document.querySelector("#title");
      const category = document.querySelector("#category");
      const nation = document.querySelector("#nation");
      const price = document.querySelector("#price");
      const option = document.querySelector("#option");

      title.value = data.title;
      category.value = data.categoryId;
      nation.value = data.nationId;
      price.value = data.price;
      option.value = data.productOption;
    })
    .catch((error) => {
      console.error("Error:", error);
      // 임시 데이터 표시
      const title = document.querySelector("#title");
      const category = document.querySelector("#category");
      const nation = document.querySelector("#nation");
      const price = document.querySelector("#price");
      const option = document.querySelector("#option");

      title.value = "제목";
      category.value = "카테고리";
      nation.value = "국가";
      price.value = "가격";
      option.value = "옵션";
    });
}

// 상품을 등록하는 함수
function addProductData(productData) {
  fetch("/admin/register/product/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((response) => response.json())
    .then((data) => {
      // 등록 완료 메시지 표시
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      // 등록 실패 메시지 표시
      console.log("Failed to add product");
    });
}

// 상품 정보를 수정하는 함수
function editProductData(productId, productData) {
  fetch(`/admin/register/product/update?product-id=${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((response) => response.json())
    .then((data) => {
      // 수정 완료 메시지 표시
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      // 수정 실패 메시지 표시
      console.log("Failed to edit product");
    });
}

// 상품 정보를 삭제하는 함수
function deleteProductData(productId) {
  fetch(`/admin/register/product?product-id=${productId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      // 삭제 완료 메시지 표시
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      // 삭제 실패 메시지 표시
      console.log("Failed to delete product");
    });
}

// 상품 추가 모달 열기
const addProductBtn = document.querySelector("#add-product-btn");
const addProductModal = document.querySelector("#addProductModal");

addProductBtn.addEventListener("click", () => {
  addProductModal.classList.add("is-active");
});

// 상품 추가 모달 닫기
