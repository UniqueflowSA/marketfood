/*
// API 호출을 위한 기본 URL
const API_BASE_URL = "/admin/members";

// 페이지가 로드될 때, 회원 데이터를 불러옵니다.
window.addEventListener("load", async function () {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    renderUserTable(data);
});

// 회원 데이터를 이용하여 테이블을 렌더링합니다.
function renderUserTable(data) {
    const tableBody = document.getElementById("user-table-body");
    tableBody.innerHTML = "";
    for (const user of data) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${user.registerdate}</td>
        <td><p>${user.name}</p></td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address}</td>
        <td>
            <div class="dropdown">
            <select class="status-account" data-id="${user.id}">
                <option value="general"${user.role === "general" ? " selected" : ""}>일반회원</option>
                <option value="admin"${user.role === "admin" ? " selected" : ""}>관리자</option>
            </select>
            </div>
        </td>
        `;
        const select = row.querySelector("select");
        select.addEventListener("change", async function () {
        const userId = select.dataset.id;
        const newRole = select.value;
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ role: newRole }),
        });
        if (response.ok) {
            alert("권한이 수정되었습니다.");
        } else {
            alert("오류가 발생하여 권한을 수정할 수 없습니다.");
        }
        });
        tableBody.appendChild(row);
    }
}




// --------------------- or ------------------------
// 회원 목록을 가져오는 함수
function getMembers() {
    fetch('/admin/members')
      .then(response => response.json())
      .then(data => {
        const memberList = document.getElementById('member-list');
        memberList.innerHTML = '';
        data.forEach(member => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${member.registerdate}</td>
            <td>
              <p>${member.name}</p>
            </td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>${member.address}</td>
            <td>
              <div class="dropdown">
                <select class="status-account" data-id="${member.id}">
                  <option value="general" ${member.permission === 'general' ? 'selected' : ''}>일반회원</option>
                  <option value="admin" ${member.permission === 'admin' ? 'selected' : ''}>관리자</option>
                </select>
              </div>
            </td>
          `;
          memberList.appendChild(tr);
        });
      })
      .catch(error => console.error(error));
  }

  // 회원 권한 수정 함수
  function updatePermission(memberId, permission) {
    fetch(`/admin/members/${memberId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        permission: permission
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // 권한 수정 결과를 콘솔에 출력
      })
      .catch(error => console.error(error));
  }

  // 페이지 로드 시 회원 목록 가져오기
  getMembers();

  // 권한 select 요소 변경 시 이벤트 처리
  const statusAccounts = document.querySelectorAll('.status-account');
  statusAccounts.forEach(statusAccount => {
    statusAccount.addEventListener('change', event => {
      const memberId = event.target.getAttribute('data-id');
      const permission = event.target.value;
      updatePermission(memberId, permission);
    });
  });
  */

  // API 호출을 위한 기본 URL
const API_BASE_URL = "/admin/members";

// 페이지가 로드될 때, 회원 데이터를 불러옵니다.
window.addEventListener("load", async function () {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    renderUserTable(data);
  } catch (error) {
    console.error(error);
    alert("회원 데이터를 불러오는 데 실패했습니다. 임시 데이터를 불러옵니다.");
    const data = getDummyData();
    renderUserTable(data);
  }
});

// 임시 데이터를 반환하는 함수
function getDummyData() {
  return [
    {
      id: 1,
      name: "임시 사용자 1",
      email: "temp1@example.com",
      phone: "010-1234-5678",
      address: "서울특별시 강남구",
      role: "general",
      registerdate: "2023-01-01",
    },
    {
      id: 2,
      name: "임시 사용자 2",
      email: "temp2@example.com",
      phone: "010-8765-4321",
      address: "경기도 수원시",
      role: "admin",
      registerdate: "2023-01-02",
    },
  ];
}

// 회원 데이터를 이용하여 테이블을 렌더링합니다.
function renderUserTable(data) {
  const tableBody = document.getElementById("user-table-body");
  tableBody.innerHTML = "";
  for (const user of data) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.registerdate}</td>
        <td><p>${user.name}</p></td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address}</td>
        <td>
            <div class="dropdown">
            <select class="status-account" data-id="${user.id}">
                <option value="general"${user.role === "general" ? " selected" : ""}>일반회원</option>
                <option value="admin"${user.role === "admin" ? " selected" : ""}>관리자</option>
            </select>
            </div>
        </td>
        `;
    const select = row.querySelector("select");
    select.addEventListener("change", async function () {
      const userId = select.dataset.id;
      const newRole = select.value;
      try {
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: newRole }),
        });
        if (response.ok) {
          alert("권한이 수정되었습니다.");
        } else {
          alert("권한을 수정할 수 없습니다.");
        }
      } catch (error) {
        console.error(error);
        alert("권한을 수정하는 데 실패했습니다.");
      }
    });
    tableBody.appendChild(row);
  }
}
