import { Router } from "express";

const router = Router();
const clients: any[] = [];

router.post("/", (req, res) => {
  const { name, email } = req.body;
  const client = { id: clients.length + 1, name, email };
  clients.push(client);
  res.status(201).json(client);
});

export default router;