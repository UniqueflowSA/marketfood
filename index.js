import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { app } from './src/app.js'; // 상대 경로 사용
import 'dotenv/config';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});
console.log(__filename);
