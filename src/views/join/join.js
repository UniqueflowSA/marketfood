// 유효성 검사
function joinTextCheck() {
    var userId = document.getElementById("user-id");
    var userPw = document.getElementById("user-pw");
    // var userPwCfm = document.getElementById("user-pw-cfm");
    var userName = document.getElementById("user-name");
    var userPhone = document.getElementById("user-phone");

    // 아이디를 입력 안했을 때
    if(userId.value == "") {
        userId.placeholder = "아이디를 입력하세요";
        userId.focus();
        return false;
    }
    // // 아이디를 4~12자 이내로 안헀을 때
    // if(userId.value.length < 4 || userId.value.length > 12) {
    //     alert("아이디는 4~12자 이내로 입력 가능합니다");
    //     userId.select();
    //     return;
    // }
    // // 아이디를 영소문자로 안했을 때
    // for (i=0; i<userId.value.length; i++) {   //문자를 반환(정수형), 범위 검사 가능
    //     var ch = userId.value.charAt(i);
    //     //입력된 문자를 검사
    //     if ( ( ch < "a" || ch > "z") && (ch < "A" || ch > "Z") && (ch < "0" || ch > "9" ) ) {
    //         alert("아이디는 영문 혹은 영문과 숫자의 조합만 입력 가능 합니다");
    //         userId.select();
    //         return;
    //     }
    // }
    //비밀번호를 입력 안했을 때
    if (userPw.value == "") {
        userPw.placeholder = "비밀번호를 입력하세요";
        userPw.focus();//포커스를 Password박스로 이동.
        return false;
    }
    // //비밀번호를 8~20자 이내의 영문+숫자+특수문자 조합으로 안했을 때
    // var pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    
    // if(!pwCheck.test(userPw.value)) {
    //     alert("비밀번호는 8~20자 이내의 영문+숫자+특수문자 조합만 입력 가능 합니다");
    //     userPw.select();
    //     return;
    // }
    // //비밀번호가 일치하지 않았을 때
    // if (userPw.value !== userPwCfm.value) {
    //     alert("비밀번호가 일치하지 않습니다");
    //     userPwCfm.select();//포커스를 Password박스로 이동.
    //     return;
    // }
    //이름을 입력 안했을 때
    if (userName.value == "") {
        userName.placeholder = "이름을 입력하세요";
        userName.focus();//포커스를 Password박스로 이동.
        return false;
    }
    // //이름을 한글로 작성하지 않았을 때
    // var nameCheck = /^[가-힣]{2,15}$/;

    // if(!nameCheck.test(userName.value)) {
    //     alert("이름에 특수문자,영어,숫자는 사용할수 없습니다. 한글만 입력해주세요");
    //     userName.select();
    //     return;
    // }
    //핸드폰 번호를 입력 안했을 때
    if (userPhone.value == "") {
        userPhone.placeholder = "핸드폰 번호를 입력하세요";
        userPhone.focus();//포커스를 Password박스로 이동.
        return false;
    }
    // //핸드폰 번호를 잘못 입력했을 때
    // var phoneCheck = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;

    // if(!phoneCheck.test(userPhone.value)) {
    //     alert("올바른 휴대폰 번호를 입력해주세요");
    //     userPhone.select();
    //     return;
    // }
}

//onchange_id
function userIdCheck() {
    const userIdInput = document.getElementById("user-id");
    const userId = userIdInput.value;
    const idError = document.getElementById("id-error");

    const validId = /^[a-zA-Z0-9]+$/;
    const validIdLength = /^.{4,12}$/;

    if (!validId.test(userId)) {
        idError.style.display = "block";
        idError.style.color = "red";
        idError.innerHTML = "아이디는 영문 혹은 영문과 숫자의 조합만 입력 가능 합니다";
    }else if (!validIdLength.test(userId)) {
        idError.style.display = "block";
        idError.style.color = "red";
        idError.innerHTML = "아이디는 4~12자 이내로 입력 가능합니다";
    }else {
        idError.style.display = "none";
    }
    return;
}

//onchange_pw
function userPwCheck() {
    const userPwInput = document.getElementById("user-pw");
    const userPw = userPwInput.value;
    const pwError = document.getElementById("pw-error");

    const validPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

    if (!validPw.test(userPw)) {
        pwError.style.display = "block";
        pwError.style.color = "red";
        pwError.innerHTML = "비밀번호는 8~20자 이내의 영문+숫자+특수문자 조합만 입력 가능 합니다";
    }else {
        pwError.style.display = "none";
    }
    return;
}

//onchange_pwcfm
function userPwCfmCheck() {
    const userPwCfmInput = document.getElementById("user-pw-cfm");
    const pw = document.getElementById("user-pw");
    const pwValue = pw.value;
    const userPwCfm = userPwCfmInput.value;
    const pwCrmError = document.getElementById("pw-cfm-error");

    if (pwValue !== userPwCfm) {
        pwCrmError.style.display = "block";
        pwCrmError.style.color = "red";
        pwCrmError.innerHTML = "비밀번호가 일치하지 않습니다";
    }else {
        pwCrmError.style.display = "none";
    }
    return;
}

//onchange_name
function userNameCheck() {
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;
    const nameError = document.getElementById("name-error");

    const validName = /^[가-힣]{2,15}$/;

    if (!validName.test(userName)) {
        nameError.style.display = "block";
        nameError.style.color = "red";
        nameError.innerHTML = "이름에 특수문자, 영어, 숫자는 사용할수 없습니다. 한글만 입력해주세요";
    }else {
        nameError.style.display = "none";
    }
    return;
}

//onchange_address
function userAddrCheck() {
    const userAddrInput = document.getElementById("user_detail-addr");
    const userAddr = userAddrInput.value;
    const addrError = document.getElementById("addr-error");

    const validAddr = /^[가-힣0-9\s]+$/;

    if (!validAddr.test(userAddr)) {
        addrError.style.display = "block";
        addrError.style.color = "red";
        addrError.innerHTML = "주소에 특수문자, 영어는 사용할수 없습니다. 한글만 입력해주세요";
    }else {
        addrError.style.display = "none";
    }
    return;
}

//onchange_phone
function userPhoneCheck() {
    const userPhoneInput = document.getElementById("user-phone");
    const userPhone = userPhoneInput.value;
    const phoneError = document.getElementById("phone-error");

    const validPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;

    if (!validPhone.test(userPhone)) {
        phoneError.style.display = "block";
        phoneError.style.color = "red";
        phoneError.innerHTML = "올바른 휴대폰 번호 숫자만 입력해주세요";
    }else {
        phoneError.style.display = "none";
    }
    return;
}

//onchange_yy
function userYearCheck() {
    const userYearInput = document.getElementById("user-yy");
    const userYear = userYearInput.value;
    const yearError = document.getElementById("year-error");

    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 100;
    const maxYear = currentYear;
    const validYear = /^(\d{4})$|^(\d{3}[0-9])$|^([1-9][0-9]{0,2})$/;

    if (!validYear.test(userYear) || userYear < minYear || userYear > maxYear) {
        yearError.style.display = "block";
        yearError.style.color = "red";
        yearError.innerHTML = "유효한 4자리 연도를 적어주세요";
    }else {
        yearError.style.display = "none";
    }
    return;
}

//onchange_dd
function userDayCheck() {
    const userDayInput = document.getElementById("user-dd");
    const userDay = userDayInput.value;
    const dayError = document.getElementById("day-error");

    const validDay = /^(?:[1-9]|[12]\d|3[01])$/;

    if (!validDay.test(userDay)) {
        dayError.style.display = "block";
        dayError.style.color = "red";
        dayError.innerHTML = "유효한 일자를 적어주세요(앞자리에 '0' 사용 금지)";
    }else {
        dayError.style.display = "none";
    }
    return;
}

// 주소 검색 함수
function findAddr(){
	new daum.Postcode({
        oncomplete: function(data) {
        	
        	console.log(data);
        	
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var jibunAddr = data.jibunAddress; // 지번 주소 변수
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('user_post').value = data.zonecode;
            if(roadAddr !== ''){
                document.getElementById("user_addr").value = roadAddr;
            } 
            else if(jibunAddr !== ''){
                document.getElementById("user_addr").value = jibunAddr;
            }
        }
    }).open();
}