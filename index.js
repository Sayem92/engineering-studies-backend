const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middle ware--
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zxblvtn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
  

  } catch (err) {
    console.log(err);
  }
}

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Engineering Studies server is running.............");
});

app.listen(port, () => {
  console.log("Engineering Studies server running on:", port);
});
