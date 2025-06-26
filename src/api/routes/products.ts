import { Router } from "express";

const router = Router();
const products: any[] = [];

router.post("/", (req, res) => {
  const { name, price } = req.body;
  const product = { id: products.length + 1, name, price };
  products.push(product);
  res.status(201).json(product);
});

export default router;