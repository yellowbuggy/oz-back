import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs"; // 파일 저장을 위한 모듈
import path from "path";

const URL = "https://www.gutenberg.org/cache/epub/84/pg84-images.html";
const filePath = path.join(process.cwd(), "base/files");
console.log(filePath);
const fileName = "frankenstein.txt";

async function crawl() {
  try {
    const response = await axios.get(URL);
    const $ = cheerio.load(response.data);
    
    let contentArray = [];

    // 1. 첫 번째 div(목차) 제외하고 두 번째부터 순회
    $(".chapter").slice(1).each((i, el) => {
      // 2. 내부 텍스트를 가져와서 불필요한 연속 공백 정리
      let chunk = $(el).text().replace(/[ \t]+/g, ' ').trim();
      
      if (chunk) {
        contentArray.push(chunk);
      }
    });

    // 3. 배열에 담긴 각 챕터를 줄바꿈 두 번(\n\n)으로 구분하여 하나의 문자열로 합침
    const finalResult = contentArray.join("\n\n");

    // 4. 파일 저장 (result.txt)
    fs.writeFileSync(path.join(filePath, fileName), finalResult, "utf-8");
    
    console.log(`파일 저장 완료: ${fileName}`);

  } catch (error) {
    console.error("에러 발생:", error);
  }
}

export { crawl };