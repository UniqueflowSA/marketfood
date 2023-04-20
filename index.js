import { app } from '/Users/seunghwankim/myproject/intro-me/intro-me/seunghwankim/project1/market-food/src/app.js';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});
