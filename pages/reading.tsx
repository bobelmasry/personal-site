
"use client"

import { useState } from "react"
import Head from 'next/head'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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

type BookData = {
  title: string
  author: string
  summary: string[]
  notes: string[]
  rating: number
}

const BOOKS: BookData[] = [
  {
    title: "Poor Charlie's Almanack",
    author: "Charlie Munger, Peter D. Kaufman",
    summary: [""],
    notes: [
      "An interesting book full of life wisdom based on Charlie Munger's life and his work as a lawyer and as vice chairman of Berkshire Hathaway.",
      "The first third or so of the book are various passages on Charlie: some by his kids while most are by people he worked with. The remainder is on various talks he held so there is repetition between the different talks.",
      "An incredibly interesting thought process that Charlie uses is he relates different fields through what he calls 'mental models' where each field has a couple of general ideas that sort of encompass the entire field. Some of the models he mentions are the Criticality Theory from Physics and Permutations and Combinations from Math.",
      "Another thing I found fascinating is Charlie's breadth of knowledge, in the book he referenced authors from Cicero to Pascal and Aristotle to Jack Welch."
    ],
    rating: 7
  },
  {
    title: "The Idea Factory",
    author: "Jon Gertner",
    summary: [""],
    notes: [""],
    rating: 6
  },
  {
    title: "When the heavens went on sale",
    author: "Ashley Vance",
    summary: [""],
    notes: [""],
    rating: 9
  },
  {
    title: "Elon Musk",
    author: "Ashley Vance",
    summary: [""],
    notes: [""],
    rating: 10
  },
  {
    title: "Elon Musk",
    author: "Walter Isaacson",
    summary: [""],
    notes: [""],
    rating: 8
  },
  {
    title: "American Prometheus: Oppenheimer",
    author: "Kai Bird, Martin J. Sherwin",
    summary: [""],
    notes: [""],
    rating: 7
  },
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    summary: [""],
    notes: [""],
    rating: 9
  },
  {
    title: "Titan",
    author: "Ron Chernow",
    summary: [""],
    notes: [""],
    rating: 7
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    summary: [""],
    notes: [""],
    rating: 9
  },
  {
    title: "1984",
    author: "George Orwell",
    summary: [""],
    notes: [""],
    rating: 8
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    summary: [""],
    notes: [""],
    rating: 9
  },
  {
    title: "Into the Wild",
    author: "John Krakeur",
    summary: [""],
    notes: [""],
    rating: 9
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Naval Ravikant, Eric Jorgenson",
    summary: [""],
    notes: [""],
    rating: 9
  },
  {
    title: "Cicero: Selected Works",
    author: "Cicero",
    summary: [""],
    notes: [""],
    rating: 7
  },
  {
    title: "Nichomachen Ethics",
    author: "Aristotle",
    summary: [""],
    notes: [""],
    rating: 0
  },
  {
    title: "Mediations",
    author: "Marcus Aurelius",
    summary: [""],
    notes: [""],
    rating: 9
  },
  {
    title: "Wool",
    author: "Hugh Howey",
    summary: [
      "A story set in a hundred lever underground bunker called the Silo where thousands of people live where the main protagonist, Jules, looks for reasons why the Silo exists, how it was built and if it's safe outside the Silo.",
      "Throughout the Silo only a handful of people know the secrets behind the Silo, most people are governed by 'The Pact' and 'The Order', books that were intentionally written to keep order throughout the Silo and to keep people from rebelling. The Silo has a very Orwellian vibe to it where people are afraid to ask questions and all citizens are monitored by the state through cameras in people's mirrors in their apartments.",
      "The story shows that that eventually people will find out secrets and that human curiosity is inevitable. "
    ],
    notes: [""],
    rating: 7
  },
  {
    title: "Shift",
    author: "Hugh Howey",
    summary: [
      "The second book of the Silo series behind Wool. This book mainly looks at the backstory behind why the Silo exists and how they were built. The story follows Donald (Donny), a (senator ?) from the state of Georgia as he works with Thurman (another senator ?) and Thurman's daughter Anna, who was Donald's girlfriend in college. ",
      "The threat of nanorobots, or tiny robots that go through your blood and interact with your body, is at large. While America has used this technology for good to help people live longer through repairing damaged cells, other countries like Iran have used it as a Biological proxy weapon where it goes into a body and destroys all the cells which they demonstrated with a town in Israel.",
      "To help protect and preserve humanity and avoid nanorobots from decimating the species (senator ?) Thurman unearthed a design that Donald had designed in Architecture school for a hundred story self-sustainable skyscraper and chose a plot of land in Georgia where he planned to build fifty of these buildings, except as an underground bunker instead of as a skyscraper.",
      "Donald and Anna must work together over several years to oversee the building of all these silos, much to Donald's wife Helen's dismay.",
      "Eventually when all the different silos are built, they are known as nuclear waste containment centers to the public, a huge festival takes place above them with a state named for each silo, Donald was standing above the Georgia silo attempting to contact his wife Helen and eventually he figured out that she was at the Tenessee silo so he tried to rush over but was pulled back by Anna and his sister Charlotte. At the end there are massive explosions that may have been thunder and that's the end of the present timeline.",
      "The story continues in 2110 in Silo 1 with a character called Troy who lives a mundane and monotone life where he handles the communication with the heads of IT (the de facto leaders) of the other 49 silos. Silo 1 is the only silo that uses hibernating technology to help people live for long stretches of time and is composed of only men to avoid conflict.",
      "At the end of Troy's first 'shift' in silo 1 as one of the silo's goes into rebellion he starts to vaguely remember details from his previous life including his wife Helen. He stops taking the medication they offer him and starts making irrational decisions, this is eventually found out and he is taken to 'deep freeze' an area reserved for long term preservation of people who are unlikely to be useful to the silo anytime soon.",
      "Troy eventually wakes up a century later on 2210 by 'Thaw Man' who he eventually recognizes is (sentator ?) Thurman. He is assigned to be on a task force with Anna (the only woman allowed to be outside deep freeze) to investigate the sudden onset of rebellion in several silos at the same time as he had written a report on the rebellion of the silo that had happened on his first shift. Thurman understands that Troy had started to remember details of his previous life and had even remembered his own name and his wife's name (as he realised that Troy resembled Helen of Troy).",
      "While Anna was taking a shower preparing for the funeral of a psychologist both of them had known who had shot himself Donald gained access to a computer and searched for his wife in the Tenessee silo finding that she had renamed herself Karma, the name of their dog. Her personnel file showed that she had died but got married and had kids and even grandkids and great-grandkids as over 150 years had passed. He' devastated by the fact that she had married his fellow (senator ?) and friend Mick, and he starts shedding tears.",
      "As Anna got out of the shower she realised what had been happening and closed the computer and hugged Donald to keep him company."
    ],
    notes: [""],
    rating: 8
  },
  {
    title: "The Road to Serfdom",
    author: "F.A. Hayek",
    summary: [""],
    notes: [
      "Central planning leads inevitably to authoritarianism.",
      "Economic freedom is inseparable from political freedom.",
      "The price system transmits information no planner can replicate.",
    ],
    rating: 0
  },
  {
    title: "Percy Jackson",
    author: "Rick Riordan",
    summary: [""],
    notes: [
      "Greek mythology made accessible and engaging for modern readers.",
      "Identity and belonging are central themes throughout.",
      "Friendship and loyalty triumph over individual power.",
    ],
    rating: 0
  },
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

export default function Reading() {
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

