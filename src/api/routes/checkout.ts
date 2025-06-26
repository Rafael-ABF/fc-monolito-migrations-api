import { Router } from "express";

const router = Router();
const checkouts: any[] = [];

router.post("/", (req, res) => {
  const { clientId, products } = req.body;
  const checkout = { id: checkouts.length + 1, clientId, products };
  checkouts.push(checkout);
  res.status(201).json(checkout);
});

export default router;