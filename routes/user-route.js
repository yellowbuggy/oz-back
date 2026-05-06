import express from "express";

const router = express.Router();

const users = [
  { id: 1, name: "John"},
  { id: 2, name: "Jane"},
  { id: 3, name: "Jim"},
  { id: 4, name: "Jill"},
]

// GET /users 데이터 조회
router.get("/", (req, res) => {
  res.send(users);
});

// GET /users/:id 데이터 조회
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === Number(userId));
  res.send(user);
});

// POST /users 데이터 생성
router.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).send(newUser);
});

router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  users[Number(userId)-1] = updatedUser;
  res.send(updatedUser);
});

router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  users.splice(Number(userId)-1, 1);
  res.status(200).send(`User ${userId} deleted`);
});

export default router;