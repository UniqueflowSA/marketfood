const useridel = document.getElementById("user-id");
// 유효성 검사
function joinTextCheck() {
    var userId = document.getElementById("user-id");
    var userPw = document.getElementById("user-pw");
    var userPwCfm = document.getElementById("user-pw-cfm");
    var userName = document.getElementById("user-name");
    var userPhone = document.getElementById("user-phone");

    // 아이디를 입력 안했을 때
    if(userId.value == "") {
        userId.placeholder = "아이디를 입력하세요";
        userId.focus();
        return;
    }
    // 아이디를 4~12자 이내로 안헀을 때
    if(userId.value.length < 4 || userId.value.length > 12) {
        alert("아이디는 4~12자 이내로 입력 가능합니다");
        userId.select();
        return;
    }
    // 아이디를 영소문자로 안했을 때
    for (i=0; i<userId.value.length; i++) {   //문자를 반환(정수형), 범위 검사 가능
        var ch = userId.value.charAt(i);
        //입력된 문자를 검사
        if ( ( ch < "a" || ch > "z") && (ch < "A" || ch > "Z") && (ch < "0" || ch > "9" ) ) {
            alert("아이디는 영문 혹은 영문과 숫자의 조합만 입력 가능 합니다");
            userId.select();
            return;
        }
    }
    //비밀번호를 입력 안했을 때
    if (userPw.value == "") {
        userPw.placeholder = "비밀번호를 입력하세요";
        userPw.focus();//포커스를 Password박스로 이동.
        return;
    }
    //비밀번호를 8~20자 이내의 영문+숫자+특수문자 조합으로 안했을 때
    var pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    
    if(!pwCheck.test(userPw.value)) {
        alert("비밀번호는 8~20자 이내의 영문+숫자+특수문자 조합만 입력 가능 합니다");
        userPw.select();
        return;
    }
    //비밀번호가 일치하지 않았을 때
    if (userPw.value !== userPwCfm.value) {
        alert("비밀번호가 일치하지 않습니다");
        userPwCfm.select();//포커스를 Password박스로 이동.
        return;
    }
    //이름을 입력 안했을 때
    if (userName.value == "") {
        userName.placeholder = "이름을 입력하세요";
        userName.focus();//포커스를 Password박스로 이동.
        return;
    }
    //이름을 한글로 작성하지 않았을 때
    var nameCheck = /^[가-힣]{2,15}$/;

    if(!nameCheck.test(userName.value)) {
        alert("이름에 특수문자,영어,숫자는 사용할수 없습니다. 한글만 입력해주세요");
        userName.select();
        return;
    }
    //핸드폰 번호를 입력 안했을 때
    if (userPhone.value == "") {
        userPhone.placeholder = "핸드폰 번호를 입력하세요";
        userPhone.focus();//포커스를 Password박스로 이동.
        return;
    }
    //핸드폰 번호를 잘못 입력했을 때
    var phoneCheck = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;

    if(!phoneCheck.test(userPhone.value)) {
        alert("올바른 휴대폰 번호를 입력해주세요");
        userPhone.select();
        return;
    }
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