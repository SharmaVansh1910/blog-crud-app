import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { title, content } = req.body;
    const slug = title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
    const post = await Post.create({ title, content, slug });
    res.status(201).json(post);
  }

  if (req.method === "GET") {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  }
}