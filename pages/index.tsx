import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Aly Hassan Youssef</title>
      </Head>
      <div className="flex flex-col mx-auto mt-16 p-4 md:max-w-1/2 mb-12">
        <h1 className="text-5xl font-semibold">Aly Hassan Youssef</h1>
        <h2 className="text-2xl mt-8 font-semibold">Some things about me:</h2>

        <ul className="list-disc mt-4 pl-5 space-y-2">
          <li>I'm currently a Computer Science student at the American University in Cairo (AUC) <br /> [As of January 2026 I'm in my 2nd semester of junior year]</li>
          <li>I love going on deep dives on topics that interest me and building hands on projects</li>
          <li>I enjoy working long hours, mostly in the morning, to build momentum on the various projects I'm working on</li>
          <li>My most significant project so far is (<a target='blank' rel='noopener noreferrer' className='underline text-blue-600' href={'https://www.teachmegcse.com'}>Teach Me Gcse</a>) where I developed tools to help parse and extract questions and answers from GCSE exam sheets with wich we built tools to help students and teachers</li>
        </ul>

        <h2 className="text-2xl mt-8 font-semibold">Some of the things I'm interested in:</h2>
        <ul className="list-disc mt-4 pl-5 space-y-2">
          <li>Building intuitive and beatiful products that help people solve difficult problems that take a lot of time</li>
          <li>Understanding how innovation happens and how great products are developed (technological advances just don't just happen on their own)</li>
          <li>Interior design that makes people more productive on things they care deeply about</li>
        </ul>
        <p className='mt-8 font-semibold'>Checkout my <Link className='underline text-blue-600' href={'/reading'}>reading</Link> and <Link className='underline text-blue-600' href={'/deep-dives'}>deep dives</Link></p>
      </div >
    </>
  );
}
