import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export default async function handler(req, res) {
  await connectDB();
  const { slug } = req.query;

  if (req.method === "GET") {
    const post = await Post.findOne({ slug });
    return res.status(200).json(post);
  }

  if (req.method === "PUT") {
    const { title, content } = req.body;
    const updated = await Post.findOneAndUpdate(
      { slug },
      { title, content },
      { new: true }
    );
    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await Post.findOneAndDelete({ slug });
    return res.status(204).end();
  }
}