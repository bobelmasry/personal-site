import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import { getAllBooks, getBookBySlug, type BookWithSlug } from "@/lib/reading"
import Link from "next/link"

export default function BookPage({ book }: { book: BookWithSlug }) {
  if (!book) return <div>Not found</div>

  return (
    <>
      <Head>
        <title>{`${book.title} | Books`}</title>
      </Head>

      <div className="max-w-3xl mx-auto mt-12 p-6">
        <Link href="/reading" className="text-sm text-neutral-400 underline">← Back</Link>

        <div className="mt-4 p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 shadow-lg">
          <h1 className="text-3xl font-serif text-neutral-100">{book.title}</h1>
          <p className="text-sm text-neutral-400 mt-1">by {book.author}</p>
          <p className="text-sm text-neutral-400 mt-1">Rating: {book.rating}/10</p>

          <div className="mt-6 text-neutral-300">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Summary</h3>
            <ul className="list-inside list-disc mt-2 space-y-2">
              {book.summary.map((s, i) => (
                <li key={i} className="text-sm leading-relaxed">{s}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-neutral-300">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Notes</h3>
            <ul className="list-inside list-disc mt-2 space-y-2">
              {book.notes.map((n, i) => (
                <li key={i} className="text-sm leading-relaxed">{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const books = getAllBooks()
  const paths = books.map((b) => ({ params: { slug: b.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string
  const book = getBookBySlug(slug)
  if (!book) return { notFound: true }
  return { props: { book } }
}
