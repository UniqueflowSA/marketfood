const button__cart = document.querySelector(".button__cart");


//예시 로그인 fetch
fetch('https:// api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // 로그인이 성공적으로 완료됨
  })
  .catch(error => {
    console.error(error);
    alert('로그인에 실패했습니다.');
  })