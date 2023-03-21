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
  

      // cse all collection   ➡️➡️➡️➡️➡️➡️➡️
      const cse1stCollection = client
      .db("EngineeringStudies")
      .collection("CSE1stSemester");
    const cse2ndCollection = client
      .db("EngineeringStudies")
      .collection("CSE2ndSemester");
    const cse3rdCollection = client
      .db("EngineeringStudies")
      .collection("CSE3rdSemester");
    const cse4thCollection = client
      .db("EngineeringStudies")
      .collection("CSE4thSemester");
    const cse5thCollection = client
      .db("EngineeringStudies")
      .collection("CSE5thSemester");
    const cse6thCollection = client
      .db("EngineeringStudies")
      .collection("CSE6thSemester");
    const cse7thCollection = client
      .db("EngineeringStudies")
      .collection("CSE7thSemester");
    const cse8thCollection = client
      .db("EngineeringStudies")
      .collection("CSE8thSemester");
    
    // eee all collections ➡️➡️➡️➡️➡️➡️➡️
    const eee1stCollection = client
      .db("EngineeringStudies")
      .collection("EEE1stSemester");
    const eee2ndCollection = client
      .db("EngineeringStudies")
      .collection("EEE2ndSemester");
    const eee3rdCollection = client
      .db("EngineeringStudies")
      .collection("EEE3rdSemester");
    const eee4thCollection = client
      .db("EngineeringStudies")
      .collection("EEE4thSemester");
    const eee5thCollection = client
      .db("EngineeringStudies")
      .collection("EEE5thSemester");
    const eee6thCollection = client
      .db("EngineeringStudies")
      .collection("EEE6thSemester");
    const eee7thCollection = client
      .db("EngineeringStudies")
      .collection("EEE7thSemester");
    const eee8thCollection = client
      .db("EngineeringStudies")
      .collection("EEE8thSemester");
    
    // blog collection
    const blogCollection = client
      .db("EngineeringStudies")
      .collection("allBlog");
    
    // cse all route semester  ➡️➡️➡️➡️➡️➡️➡️
    app.get("/cse/:semesterName", async (req, res) => {
      const semesterName = req.params.semesterName;
    
      if (semesterName === "1stSemester") {
        const result = await cse1stCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "2ndSemester") {
        const result = await cse2ndCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "3rdSemester") {
        const result = await cse3rdCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "4thSemester") {
        const result = await cse4thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "5thSemester") {
        const result = await cse5thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "6thSemester") {
        const result = await cse6thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "7thSemester") {
        const result = await cse7thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "8thSemester") {
        const result = await cse8thCollection.find({}).toArray();
        res.send(result);
      }
    });
    
    // eee all route semester   ➡️➡️➡️➡️➡️➡️➡️
    app.get("/eee/:semesterName", async (req, res) => {
      const semesterName = req.params.semesterName;
    
      if (semesterName === "1stSemester") {
        const result = await eee1stCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "2ndSemester") {
        const result = await eee2ndCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "3rdSemester") {
        const result = await eee3rdCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "4thSemester") {
        const result = await eee4thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "5thSemester") {
        const result = await eee5thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "6thSemester") {
        const result = await eee6thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "7thSemester") {
        const result = await eee7thCollection.find({}).toArray();
        res.send(result);
      }
      if (semesterName === "8thSemester") {
        const result = await eee8thCollection.find({}).toArray();
        res.send(result);
      }
    });
    
    //--------------------------------------------------------------------------- get subject with pdf-----------------------------------------------------
    app.get("/studies/:categoryName", async (req, res) => {
      const categoryName = req.params.categoryName;
      console.log("details data", categoryName);
    
      if (categoryName === "eee1stSemester") {
        const result = await eee1stCollection.find({}).toArray();
        res.send(result);
      }
      if (categoryName === "eee2ndSemester") {
        const result = await eee2ndCollection.find({}).toArray();
        res.send(result);
      }
      if (categoryName === "eee3rdSemester") {
        const result = await eee3rdCollection.find({}).toArray();
        res.send(result);
      }
      if (categoryName === "eee4thSemester") {
        const result = await eee4thCollection.find({}).toArray();
        res.send(result);
      }
      if (categoryName === "eee5thSemester") {
        const result = await eee5thCollection.find({}).toArray();
        res.send(result);
      }
      if (categoryName === "eee6thSemester") {
        const result = await eee6thCollection.find({}).toArray();
        res.send(result);
      }
      if (categoryName === "eee7thSemester") {
        const result = await eee7thCollection.find({}).toArray();
        res.send(result);
      }
      if (categoryName === "eee8thSemester") {
        const result = await eee8thCollection.find({}).toArray();
        res.send(result);
      }
    });
    
    // all blog route  ➡️➡️➡️➡️➡️➡️➡️
    app.get("/blog", async (req, res) => {
      const allBlog = await blogCollection.find({}).toArray();
      res.send(allBlog);
    });
    
    // single blog data  ➡️➡️➡️➡️➡️➡️➡️
    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const allBlog = await blogCollection.findOne(query);
      res.send(allBlog);
    });
    
    
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
