const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const MongoUrl = 'mongodb+srv://Jorge:****@cluster0.5ya8x.mongodb.net/shop?retryWrites=true&w=majority';

let _db;

const initDb = (callback) => {
  if (_db) {
    return callback(null, _db);
  }

  MongoClient.connect(MongoUrl, { useUnifiedTopology: true })
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => callback(err));
};

const getDb = () => {
  if (!_db) throw Error('Database not initalized');
  return _db;
};

module.exports = { initDb, getDb };
