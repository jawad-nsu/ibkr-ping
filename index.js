import got from "got";
import cron from "node-cron";
import axios from "axios";
import express from "express";
import https from "https";
const app = express();

var options = {
  host: "http://localhost:5000",
  path: "/v1/api/tickle",
  method: "POST",
  auth: "eucaps789:MiFID2021",
  headers: { "content-type": "Application/JSON" },
};

const data = JSON.stringify({
  inputRequests: [],
});

const req = https.request(options, (res) => {
  let body = [];
  res.on("data", (chunk) => {
    console.log(chunk);
    // body.push(JSON.stringify(chunk));
  });
  res.on("end", () => {
    // body = Buffer.concat(body).toString();
    // var jsonObj = JSON.parse(body);
    // console.log(jsonObj);
    // console.log(typeof JSON.stringify(jsonObj.GDSSDKResponse));
    // var values = JSON.parse(JSON.stringify(jsonObj.GDSSDKResponse[0]));
    // // console.log(`${values?.Rows?.[0]}`);
    // values?.Rows?.map((item) =>
    //   console.log(
    //     `${jsonObj.GDSSDKResponse[0].Mnemonic}:  ${item.Row[0]}\n\n\n`
    //   )
    // );
    // fs.writeFile("./res.json", JSON.stringify(values), (err) => {
    //   if (err) {
    //     console.error("file write err");
    //     console.error(err);
    //     return;
    //   }
    //   //file written successfully
    // });
    // console.log(values.Identifier);
  });
});

req.write(data);
req.end();

// cron.schedule("*/57 * * * * *", async () => {
//   console.log("running a task every 57 sec");
//   try {
//     const res = await axios.post("http://localhost:5000/v1/api/tickle");
//     console.log("Hi");
//   } catch (err) {
//     console.log("err msg", err);
//   }
//   console.log(res);
//   console.log("printing data");
// });

// app.get("/stocks", async (req, res) => {
//   // let { symbol, startDate, endDate } = req.query;
//   console.log("invoked");
//   try {
//     const data = await axios.get(
//       "http://localhost:5000/v1/api/trsrv/stocks?symbols=AAPL"
//     );
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// app.listen(4000, () => {
//   console.log("Listening at port 4000");
// });
