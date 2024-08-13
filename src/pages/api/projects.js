import { connectDB } from '@/utils/database'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const db = (await connectDB).db('portfolio')
    let result = await db.collection('projects').find().toArray()

    return res.status(200).json(result)
  }
}
