import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type BookData = {
  title: string
  author: string
  summary: string[]
  notes: string[]
  rating: number
}

const READING_PATH = path.join(process.cwd(), "content/reading")

export function getAllBooks(): BookData[] {
  const files = fs.readdirSync(READING_PATH).filter((f) => f.endsWith(".mdx"))

  return files.map((file) => {
    const filePath = path.join(READING_PATH, file)
    const source = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(source)
    console.log(data)
    return {
      title: data.title,
      author: data.author,
      summary: data.summary || [],
      notes: data.notes || [],
      rating: data.rating || 0,
    }
  })
}
