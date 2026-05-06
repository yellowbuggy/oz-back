// express의 부트스트랩 파일
import express from "express";
import userRoute from "./routes/user-route.js";
import postRoute from "./routes/post-route.js";

const app = express();
const PORT = 3000;

app.use(express.static("public")); // 정적 파일 서비스 미들웨어
app.use(express.json()); // JSON 데이터 파싱 미들웨어

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.get("/", (req, res) => {
  const reqURL = req.url;
  const reqMethod = req.method;
  console.log(reqURL, reqMethod);
  res.status(200).send("Hello, World!");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
