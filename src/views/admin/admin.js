// 메인 화면 변경 함수
function changeMain(page) {
	// 모든 페이지 숨기기
	let pages = document.querySelectorAll('.page');
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
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		// 선택한 메뉴 활성화
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');

		// 메인 화면 변경
		let page = item.getAttribute('onclick').replace("changeMain('", '').replace("')", '');
		changeMain(page);
	})
});



// 메뉴버튼 누르면 사이드바 사라졌다 나타났다
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


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



if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}




// 다크모드 변경 (왜그런지 모르겠지만 잘되다가 현재 작동안되는중...)
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})