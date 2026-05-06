// const { testCreateFiles } = require("./base/FileManager.js");
// const { main } = require("./base/sum.js");
// const { logMessage } = require("./assignment/logMessage.js");
import { crawl as staticCrawl} from "./base/scrapper/static-scrapper.js";
import { crawl as dynamicCrawl } from "./base/scrapper/dynamic-scrapper.js";

// main();
// testCreateFiles();

// day45 로거 만들기
// logMessage("Hello, World!!!\n");

// day46 스크래퍼 만들기
staticCrawl();
// dynamicCrawl();