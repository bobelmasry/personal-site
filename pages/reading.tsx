"use client"

import { useState } from "react"
import Head from 'next/head'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { getAllBooks, BookData } from "@/lib/reading"


const BOOK_COLORS = [
  "#2f5d50", // deep green
  "#6b4f3f", // brown
  "#3f4e6b", // navy
  "#7b2d26", // oxblood
  "#4a4a4a", // charcoal
  "#8a7f4e", // olive
  "#5a3e36", // leather
  "#2e2e2e", // near-black
]

function Book({
  title,
  color,
  onClick,
  isSelected,
}: {
  title: string
  color: string
  onClick: () => void
  isSelected: boolean
}) {
  return (
    <div
      onClick={onClick}
      className={`p-2 shadow-md hover:cursor-pointer flex items-center justify-center w-10 h-48 transition-all duration-200 hover:scale-105 hover:-translate-y-1 ${isSelected ? "border border-white border-offset-1" : ""
        }`}
      style={{
        backgroundColor: color,
      }}
    >
      <p className="writing-mode-vertical-rl rotate-180 text-neutral-100 text-md font-medium text-center overflow-hidden font-garamond">
        {title}
      </p>
    </div>
  )
}

export default function Reading({BOOKS}: {BOOKS: BookData[]}) {
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null)


  const handleBookClick = (book: BookData) => {
    setSelectedBook(selectedBook?.title === book.title ? null : book)
  }

  return (
    <>
      <Head>
        <title>Books | Aly Hassan Youssef</title>
      </Head>
      <div className="relative mx-auto mt-12 mb-12 w-full max-w-xl">
        <Carousel className="w-full">
          <CarouselContent className="flex">
            {BOOKS.map((book, index) => (
              <CarouselItem key={index} className="sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <Book
                  title={book.title}
                  color={BOOK_COLORS[index % BOOK_COLORS.length]}
                  onClick={() => handleBookClick(book)}
                  isSelected={selectedBook?.title === book.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-4rem] top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40">
            {"<"}
          </CarouselPrevious>
          <CarouselNext className="absolute right-[-4rem] top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40">
            {">"}
          </CarouselNext>
        </Carousel>

        {selectedBook && (
          <div className="mt-8 p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
            <div className="mb-4">
              <h2 className="text-xl font-serif text-neutral-100">{selectedBook.title}</h2>
              <p className="text-sm text-neutral-400">by {selectedBook.author}</p>
              <p className="text-sm text-neutral-400">Rating: {selectedBook.rating}/10</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Summary</h3>
              <ul className="space-y-3">
                {selectedBook.summary.map((note, index) => (
                  <li key={index} className="text-sm text-neutral-300 leading-relaxed pl-4 border-l-2 border-neutral-700">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 mt-4">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Notes</h3>
              <ul className="space-y-3">
                {selectedBook.notes.map((note, index) => (
                  <li key={index} className="text-sm text-neutral-300 leading-relaxed pl-4 border-l-2 border-neutral-700">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const books = getAllBooks()
  return { props: { books } }
}
