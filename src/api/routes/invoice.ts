import { Router } from "express";

const router = Router();
const invoices: any[] = [
  { id: 1, total: 100, clientId: 1, products: [{ id: 1, name: "Produto", price: 100 }] }
];

router.get("/:id", (req, res) => {
  const invoice = invoices.find(i => i.id === Number(req.params.id));
  if (!invoice) return res.status(404).json({ error: "Invoice not found" });
  res.json(invoice);
});

export default router;