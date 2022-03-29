import got from "got";
import cron from "node-cron";
import axios from "axios";
import express from "express";
const app = express();

cron.schedule("*/57 * * * * *", async () => {
  console.log("running a task every 57 sec");
  const res = await axios.post("https://localhost:5000/v1/api/tickle");
  console.log("Hi");
  console.log(res);
  console.log("printing data");
});

app.get("/stocks", async (req, res) => {
  // let { symbol, startDate, endDate } = req.query;
  console.log("invoked");
  try {
    const data = await axios.get(
      "http://localhost:5000/v1/api/trsrv/stocks?symbols=AAPL"
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(4000, () => {
  console.log("Listening at port 4000");
});
