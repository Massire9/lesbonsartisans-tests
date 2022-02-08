const MongoClient = require("mongodb").MongoClient;

class Connection {
  static async open() {
    if (this.db) return this.db;
    await MongoClient.connect(
      this.url,
      (err, client) => (this.db = client.db("shop"))
    );
    return this.db;
  }
}

Connection.db = null;
Connection.url = "mongodb://127.0.0.1:27017/shop";

module.exports = { Connection };
