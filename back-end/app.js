import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.static("."));

app.get("/rates", async (req, res) => {
  const response = await fetch("https://api.coingate.com/v2/rates");
  res.json(await response.json());
});

app.get("/rates/:buy/:sell", async (req, res) => {
  const buyCurrency = req.params.buy;
  const sellCurrency = req.params.sell;
  const response = await fetch(
    `https://api.coingate.com/v2/rates/merchant/${buyCurrency}/${sellCurrency}`
  );
  res.json(await response.json());
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
