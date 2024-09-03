import { MongoClient } from 'mongodb'
const url = process.env.MONGODB_URL
// const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
    // global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
  // connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
