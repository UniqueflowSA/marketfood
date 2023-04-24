const pages = document.querySelectorAll('.page');

// 메인 화면 변경 함수
function changeMain(page) {
	// 모든 페이지 숨기기
	pages.forEach(function(page) {
	page.style.display = 'none';
	});
	// 선택한 페이지 보이기
	document.getElementById(page).style.display = 'block';
}

window.addEventListener('DOMContentLoaded', function() {
	// 홈 화면이 보이도록 설정
	const homeTab = document.querySelector('#home-tab');
	homeTab.click();
});


// 사이드바 메뉴 클릭 이벤트 리스너
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li');

allSideMenu.forEach(li => {
	const a = li.querySelector('a');

	a.addEventListener('click', function () {
		// 선택한 메뉴 활성화
		allSideMenu.forEach(i=> {
			i.classList.remove('active');
		})
		li.classList.add('active');

		// 메인 화면 변경
		const page = a.getAttribute('onclick').replace("changeMain('", '').replace("')", '');
		changeMain(page);
	})
});



// 메뉴버튼 누르면 사이드바 사라졌다 나타났다
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


/*
// 상품 등록 팝업
const addProductBtn = document.getElementById("add-product-btn");

addProductBtn.addEventListener("click", function() {
	// 팝업창 생성
	const popup = window.open("product-registration.html", "상품 등록", "width=600,height=400");

	// 팝업창이 닫히면 상품 목록을 갱신
	popup.onunload = function() {
    // 상품 목록 갱신하는 코드 작성
	}
});


// 국가 카테고리 등록 팝업
const addCountryBtn = document.getElementById("add-country-btn");

addCountryBtn.addEventListener("click", function() {
	// 팝업창 생성
	const popup = window.open("country-registration.html", "국가 등록", "width=600,height=400");

	// 팝업창이 닫히면 국가 목록을 갱신
	popup.onunload = function() {
    // 국가 목록 갱신하는 코드 작성
	}
});


// 종류 카테고리 등록 팝업
const addCategoryBtn = document.getElementById("add-category-btn");

addCategoryBtn.addEventListener("click", function() {
	// 팝업창 생성
	const popup = window.open("category-registration.html", "종류 등록", "width=600,height=400");

	// 팝업창이 닫히면 종류 목록을 갱신
	popup.onunload = function() {
    // 종류 목록 갱신하는 코드 작성
	}
});
*/





// 다크모드 변경
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})



// 배송상태 변경할 때마다 버튼 색상 바뀌게
const statusSelects = document.querySelectorAll("#status-select");

statusSelects.forEach(statusSelect => {
    statusSelect.addEventListener("change", () => {
        const selectedOption = statusSelect.options[statusSelect.selectedIndex];

        statusSelect.classList.remove("pending", "process", "completed", "cancel");
        statusSelect.classList.add(selectedOption.value);
    });
});



// 상품 추가 모달창
const modalButton3 = document.querySelector('#add-product-btn');
const modal3 = document.querySelector('#addProductModal');

modalButton3.addEventListener('click', () => {
	modal3.style.display = 'block';
});


const modalBackground3 = document.querySelector('.modal-background-product');

modalBackground3.addEventListener('click', () => {
	modal.style.display = 'none';
});



// 국가 추가 모달창
const modalButton = document.querySelector('#add-country-btn');
const modal = document.querySelector('#addCountryModal');
//const closeButton = document.getElementsByClassName("modal-close")[0];

modalButton.addEventListener('click', () => {
	modal.style.display = 'block';
});

/*
closeButton.onclick = function() {
	modal.style.display = "none";
};
*/

const modalBackground = document.querySelector('.modal-background');

modalBackground.addEventListener('click', () => {
	modal.style.display = 'none';
});


// 종류 추가 모달창
const modalButton2 = document.querySelector('#add-category-btn');
const modal2 = document.querySelector('#addCategoryModal');
//const closeButton = document.getElementsByClassName("modal-close")[0];

modalButton2.addEventListener('click', () => {
	modal2.style.display = 'block';
});

/*
closeButton.onclick = function() {
	modal.style.display = "none";
};*/


const modalBackground2 = document.querySelector('.modal-background-category');

modalBackground2.addEventListener('click', () => {
	modal2.style.display = 'none';
});



const closeButtons = document.querySelectorAll(".modal-close");
closeButtons.forEach(function(button) {
	button.onclick = function() {
    	modal.style.display = "none";
	};
});
