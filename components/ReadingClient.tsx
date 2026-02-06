"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import type { BookData } from "@/lib/reading"

const BOOK_COLORS = [
  "#2f5d50",
  "#6b4f3f",
  "#3f4e6b",
  "#7b2d26",
  "#4a4a4a",
  "#8a7f4e",
  "#5a3e36",
  "#2e2e2e",
]

function BookCard({ book }: { book: BookData }) {
  const summaryPreview = (book.summary || []).slice(0, 2)
  const notesPreview = (book.notes || []).slice(0, 2)

  return (
    <Link href={`/reading/${(book as any).slug}`} className="no-underline">
      <div
        className={`cursor-pointer p-6 rounded-lg shadow-lg bg-neutral-900/50 border border-neutral-800 hover:shadow-xl transition-shadow`}
        style={{ minHeight: 160 }}
      >
      <div className="flex justify-between items-start gap-4">
        <div>
          <Link href={`/reading/${(book as any).slug}`} onClick={(e) => e.stopPropagation()} className="no-underline">
            <h3 className="text-2xl font-serif text-neutral-100">{book.title}</h3>
          </Link>
          <p className="text-sm text-neutral-400 mt-1">by {book.author}</p>
        </div>
        <div className="text-sm text-neutral-400">Rating: {book.rating}/10</div>
      </div>

        <div className="mt-4 text-neutral-300">
          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Summary</h4>
          <p className="text-sm text-neutral-300 mt-2">{summaryPreview.length ? summaryPreview.join(' ') : '—'}</p>
        </div>

        <div className="mt-4 text-neutral-300">
          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Notes</h4>
          <p className="text-sm text-neutral-300 mt-2">{notesPreview.length ? notesPreview.join(' ') : '—'}</p>
        </div>
      </div>
    </Link>
  )
}

export default function ReadingClient({ books }: { books: BookData[] }) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return books
    return books.filter((b) => (b.title || "").toLowerCase().includes(q) || (b.author || "").toLowerCase().includes(q))
  }, [books, query])

  return (
    <div className="relative mx-auto mt-12 mb-12 w-full max-w-2xl px-4 sm:px-0">
      <div className="mb-6">
        <label className="block text-sm text-neutral-400 mb-2">Search by title or author</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          className="w-full px-4 py-3 rounded-md bg-neutral-900/40 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600 text-neutral-100"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
          {filtered.length === 0 ? (
          <p className="text-neutral-500">No results</p>
        ) : (
          filtered.map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))
        )}
      </div>
    </div>
  )
}
