import Head from 'next/head'
import ReadingClient from '@/components/ReadingClient'
import { getAllBooks, type BookData } from '@/lib/reading'

export default function Reading({ books }: { books: BookData[] }) {
  return (
    <>
      <Head>
        <title>Books | Aly Hassan Youssef</title>
      </Head>
      <ReadingClient books={books} />
    </>
  )
}

export async function getStaticProps() {
  const books = getAllBooks()
  return { props: { books } }
}
