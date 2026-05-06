import express from "express";

const router = express.Router();

const posts = [
  { id: 1, title: "post 1", content: "content 1"},
  { id: 2, title: "post 2", content: "content 2"},
  { id: 3, title: "post 3", content: "content 3"},
  { id: 4, title: "post 4", content: "content 4"},
]

// GET /posts 데이터 조회
router.get("/", (req, res) => {
  res.send(posts);
});

// GET /posts/:id 데이터 조회
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts.find((post) => post.id === Number(postId));
  res.send(post);
});

// POST /posts 데이터 생성
router.post("/", (req, res) => {
  const newpost = req.body;
  posts.push(newpost);
  res.status(201).send(newpost);
});

router.put("/:id", (req, res) => {
  const postId = req.params.id;
  const updatedpost = req.body;
  posts[Number(postId)-1] = updatedpost;
  res.send(updatedpost);
});

router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  posts.splice(Number(postId)-1, 1);
  res.status(200).send(`post ${postId} deleted`);
});

export default router;