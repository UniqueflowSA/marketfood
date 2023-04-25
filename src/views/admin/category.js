const modalButton = document.querySelector('#add-category-btn');
const modal = document.querySelector('#addCategoryModal');
const closeButton = document.getElementsByClassName("modal-close")[0];

modalButton.addEventListener('click', () => {
	modal.style.display = 'block';
});

closeButton.onclick = function() {
	modal.style.display = "none";
};

const modalBackground = document.querySelector('.modal-background-category');

modalBackground.addEventListener('click', () => {
	modal.style.display = 'none';
});