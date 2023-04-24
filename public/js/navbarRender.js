function navbarRender(loggedInUser) {
    let navbar;
  
    if (loggedInUser && loggedInUser.role === "admin") {
      // 관리자 navbar
      navbar = `
          
          `;
    } else if (loggedInUser) {
      // 일반 유저 navbar
      navbar = `
      
          `;
    } else {
      // 로그인하지 않은 유저의 navbar
      navbar = `
      <div class="navbar-container">
      <nav class="navbar">
          <div class="navbar-logo-container">
              <a href="/src/views/main/main.html"><img src="/public/img/WMlogo.png" alt="nav-logo" class="navbar-logo"></a>
          </div>
          <ul calss="navbar-nav">
              <li class="navbar-content">
                  <img src="/public/img/WMlogin.png" alt="login-icon" class="navbar-icon">
                  <a href="/src/views/logIn/login.html" class="navbar-text">로그인</a>
              </li>
          </ul>
      </nav>
    </div>
           `;
    }
  
    // navbar를 body에 렌더
    document.body.innerHTML = navbar + document.body.innerHTML;
  }
  
  export { navbarRender };
  