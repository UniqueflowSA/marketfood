// API endpoint
const API_URL = "https://example.com";

// 국가별 카테고리 조회 페이지 요소 선택
const countryCategoryManage = document.querySelector("#country-category-manage");
const addCountryBtn = countryCategoryManage.querySelector("#add-country-btn");
const categoryTable = countryCategoryManage.querySelector("table tbody");

// 국가별 카테고리 데이터 조회
function fetchCountryCategories() {
    fetch(`${API_URL}/admin/register/category`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
        data.forEach((category) => {
            // 각 카테고리별 데이터를 테이블에 추가
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${category.regdate}</td>
            <td>${category.update}</td>
            <td>${category.nation_id}</td>
            <td><button type="button" class="modify">수정하기</button></td>
            <td><button type="button" class="delete">삭제하기</button></td>
            `;
            categoryTable.appendChild(tr);
        });
        })
        .catch((error) => console.error(error));
    }

// 국가 추가 버튼 클릭 시 팝업창 띄우기
addCountryBtn.addEventListener("click", () => {
// 팝업창을 띄우는 코드 작성
console.log("국가 추가 팝업창 띄우기");
});

// 페이지 로드 시 국가별 카테고리 데이터 조회
fetchCountryCategories();



// ------------------------------------------------ or --------------------------------------------------------------------

/*
// 카테고리 추가하기 버튼 클릭 이벤트 핸들러 함수
document.querySelector('#addCategoryButton').addEventListener('click', async (event) => {
    event.preventDefault();

    // 입력된 카테고리 정보 가져오기
    const title = document.querySelector('#titleInput').value;
    const imageFile = document.querySelector('#imageInput').files[0];
  
    // 서버로 카테고리 정보 전송
    const response = await fetch('/categories', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
      console.error('Failed to add category.');
      return;
    }
  
    const category = await response.json();
  
    // 새로운 카테고리를 화면에 추가
    addCategoryToPage(category);
  
    // 모달창 닫기
    closeModal();
  });
  
  // 카테고리를 화면에 추가하는 함수
  function addCategoryToPage(category) {
    const categoriesList = document.querySelector('#categoriesList');
  
    // 새로운 카테고리를 나타내는 HTML 요소 생성
    const categoryItem = document.createElement('li');
    categoryItem.innerHTML = `
      <img src="${category.imageUrl}" alt="${category.title}" />
      <p>${category.title}</p>
      <button class="delete" data-category-id="${category.id}">삭제하기</button>
    `;
  
    // 새로운 카테고리를 리스트에 추가
    categoriesList.appendChild(categoryItem);
  }
  
  // 모달창 닫기 함수
  function closeModal() {
    const addCategoryModal = document.querySelector('#addCategoryModal');
    addCategoryModal.classList.remove('is-active');
  }

  */