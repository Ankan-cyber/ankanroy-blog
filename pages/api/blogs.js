import * as fs from 'fs'
import * as path from 'path'

export default function handler(req, res) {
  const blogDir = 'blogdata';
  const blogFiles = fs.readdirSync(blogDir);
  const blogs = [];

  blogFiles.forEach(file => {
    const filePath = path.join(blogDir, file);
    const data = fs.readFileSync(filePath, 'utf-8');
    const blog = JSON.parse(data);
    const newblog = {
      "title": blog.title,
      "author": blog.author,
      "date": blog.date,
      "metaDescription": blog.metaDescription,
      "imageUrl": blog.imageUrl,
      "blogUrl": blog.blogUrl,
      "tag": blog.tag
    }
    blogs.push(newblog);
  });

  res.status(200).json(blogs);
}
