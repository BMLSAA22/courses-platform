const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
client=dbo.getClient()


 
// This help convert the id from string to ObjectId for the _id.
const ObjectId =new require("mongodb").ObjectId;
// const { MongoClient ,ServerApiVersion} = require("mongodb");
// const Db = "mongodb+srv://amayasbourahla46:%23SBINalla05@cluster0.0qdwydf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(Db, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       }})
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/courses").get(async function (req, res) {
    try {
        await client.connect()
        cols =await client.db("courses-platform").collection('course').find().toArray();
        console.log(cols);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
res.json(cols)

});
 
// This section will help you get a single record by id
recordRoutes.route("/course/:id").get(async function (req, res) {
 
 await client.connect()
 let myquery = { course_id: new ObjectId(req.params.id) };
 let rslt=await client
   .db("courses-platform")
   .collection("course-details")
   .find(myquery)
   .toArray()
  res.json(rslt)
 
   
   
});
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 db_connect
   .collection("records")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;