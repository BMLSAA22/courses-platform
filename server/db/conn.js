const { MongoClient ,ServerApiVersion} = require("mongodb");
const Db = "mongodb+srv://amayasbourahla46:%23SBINalla05@cluster0.0qdwydf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("courses-platform");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};