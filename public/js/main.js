import { navbarRender } from "./navbarRender.js";
import { footerRander } from "./footerRender.js";

// 모든 페이지에서 꼭 실행되어야 하는 함수들을 호출하는 함수
// 각 html 파일에 연결된 js 파일에서 이 함수만을 불러와서 사용
async function main() {
    // const verifyResult = await verifyToken();
    // const { loggedInUser } = verifyResult;

    navbarRender();
    footerRander();

    // return { loggedInUser }
}

export { main };