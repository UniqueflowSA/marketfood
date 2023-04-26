const submitBtn = document.getElementById("submit-btn");
const userId = document.getElementById("user-id");
const userPw = document.getElementById("user-pw");

//데이터 전달

function login() {
    const req = {
        id: userId.value,
        pw: userPw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}