import { MongoClient } from "mongodb"

const URI = "mongodb+srv://patylinha:dpswdnTrDWJ2BCBK@pat-cluster0.6tsia.mongodb.net/?retryWrites=true&w=majority&appName=pat-Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyHashtag")
// const songCollection = await db.collection('songs').find({}).toArray()

// console.log(songCollection)