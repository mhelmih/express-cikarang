const mongoose = require("mongoose");

const makeNewConnection = (uri) => {
  const db = mongoose.createConnection(uri, {
    useNewUrlParser: true,
  });

  db.on("error", function (error) {
    console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
    db.close().catch(() =>
      console.log(`MongoDB :: failed to close connection ${this.name}`)
    );
  });

  db.on("connected", function () {
    console.log(`MongoDB :: connected`);
  });

  db.on("disconnected", function () {
    console.log(`MongoDB :: disconnected ${this.name}`);
  });
  return db;
};

const dbConnection = makeNewConnection(
  "mongodb+srv://helmihibatullah52:PGtgBkxNPpZKeN5h@cluster0.iyxx2nw.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = dbConnection;
