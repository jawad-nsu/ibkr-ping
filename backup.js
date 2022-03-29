import got from "got";
import cron from "node-cron";
import axios from "axios";
import express from "express";
import fetch from "node-fetch";
const app = express();

app.get("/stocks", async (req, res) => {
  // let { symbol, startDate, endDate } = req.query;
  console.log("invoked");
  try {
    const data = await fetch("https://localhost:5000/v1/api/tickle");
    console.log(data.text());
    res.status(200).send("working");
    console.log("done");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(4000, () => {
  console.log("Listening at port 4000");
});

// cron.schedule("*/57 * * * * *", async () => {
//   console.log("running a task every 57 sec");
//   try {
//     const res = await axios.post("https://localhost:5000/v1/api/tickle");
//     console.log("Hi");
//   } catch (err) {
//     console.log("err msg", err);
//   }
//   console.log(res);
//   console.log("printing data");
// });
