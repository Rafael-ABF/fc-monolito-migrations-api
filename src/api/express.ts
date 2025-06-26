import express from "express";
import productsRouter from "./routes/products";
import clientsRouter from "./routes/clients";
import checkoutRouter from "./routes/checkout";
import invoiceRouter from "./routes/invoice";

const app = express();
app.use(express.json());

app.use("/products", productsRouter);
app.use("/clients", clientsRouter);
app.use("/checkout", checkoutRouter);
app.use("/invoice", invoiceRouter);

export default app;