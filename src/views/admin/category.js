const apiUrl = '/admin/register/category/';
const categoryTable = document.getElementById('category-table');
const addCategoryButton = document.getElementById('add-category-btn');
const addCategoryModal = document.getElementById('addCategoryModal');
const addCategoryForm = document.getElementById('add-category-form');
const modifyCategoryModal = document.getElementById('modifyCategoryModal');
const modifyCategoryForm = document.getElementById('modify-category-form');

// 카테고리 리스트 초기화
function initCategories() {
	getCategoryList()
		.then(renderCategoryTable)
		.catch(handleError);
}

// 카테고리 리스트 불러오기
function getCategoryList() {
	return fetch(apiUrl)
		.then(response => {
		if (!response.ok) {
			throw new Error('API 요청이 실패했습니다.');
		}
		return response.json();
		});
}

// 카테고리 리스트 테이블에 렌더링
function renderCategoryTable(categories) {
	categoryTable.innerHTML = `
		<thead>
		<tr>
			<th>등록일자</th>
			<th>수정일자</th>
			<th>카테고리명</th>
			<th></th>
		</tr>
		</thead>
		<tbody>
		${categories.map(category => `
			<tr data-category-id="${category.category_id}">
			<td>${category.regdate}</td>
			<td>${category.update}</td>
			<td>${category.category_id}</td>
			<td>
				<button class="button is-small is-info" onclick="openModifyCategoryModal(${category.category_id})">수정</button>
				<button class="button is-small is-danger" onclick="deleteCategory(${category.category_id})">삭제</button>
			</td>
			</tr>
		`).join('')}
		</tbody>
	`;
}

// 카테고리 추가 모달 열기
function openAddCategoryModal() {
  	addCategoryModal.classList.add('is-active');
}

// 카테고리 추가 모달 닫기
function closeAddCategoryModal() {
	addCategoryModal.classList.remove('is-active');
	addCategoryForm.reset();
}

// 카테고리 추가하기
function addCategory() {
	const formData = new FormData(addCategoryForm);
	const body = {
		'new-category': formData.get('new-category'),
		'category-img': formData.get('category-img')
	};
	return fetch(apiUrl + 'edit', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
		.then(response => {
		if (!response.ok) {
			throw new Error('API 요청이 실패했습니다.');
		}
		closeAddCategoryModal();
		initCategories();
		})
		.catch(handleError);
}

// 카테고리 수정 모달 열기
function openModifyCategoryModal(categoryId) {
	const titleInput = modifyCategoryForm.querySelector('#titleInput');
	titleInput.value = getCategoryName(categoryId);
	modifyCategoryForm.dataset.categoryId = categoryId;
	modifyCategoryModal.classList.add('is-active');
}
