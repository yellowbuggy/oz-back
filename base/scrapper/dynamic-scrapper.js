import puppeteer from "puppeteer";
import fs from "fs";

// const URL = "https://ezdegree.co.kr/";
const URL = "https://search.naver.com/search.naver?ssc=tab.blog.all&sm=tab_jum&query=%EC%BB%A4%ED%94%BC"

async function crawl() {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page.goto(URL);
    const content = await page.content();
    console.log(content);
    fs.writeFileSync("response.html", content)
  } catch (error) {
  console.error(error)
  } finally {
    await browser.close();
  }
}

export { crawl };