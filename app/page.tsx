import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './components/ui/ContactForm';
import BacteriaBackground from './components/ui/BacteriaBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-gray-300">
      <BacteriaBackground />
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="h-[calc(100vh-5rem)] flex flex-col items-center pt-[15%] text-center p-8">
          <div className="max-w-4xl mx-auto space-y-6 bg-black bg-opacity-70 p-8 rounded-lg">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-600 mb-4 leading-tight">
              An Old World Killer<br />is Back
            </h1>
            <p className="text-2xl md:text-4xl text-gray-400 mb-8">
              Will mankind survive?
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="bg-black bg-opacity-70 p-9 rounded-lg">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 mb-4">
              Amid a lethal pandemic's sweep, a chilling revelation emerges: the plague isn't the deadliest force at play—it's the darkness it unleashes in humanity.
            </h2>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="bg-black bg-opacity-70 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">Books</h2>
            <Link href="https://www.amazon.com/dp/B08D6Z3L3R">
              <Image
                src="https://res.cloudinary.com/dko9vskvn/image/upload/v1727676098/books_vaa8ej.png"
                alt="DRYP Trilogy Books"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </Link>
          </div>
        </section>

        {/* Author and Bio Section */}
        <section id="about" className="min-h-screen flex items-center justify-center p-8">
          <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-5xl w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 mb-4">
                  R.A. Scheuring
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-4">
                  Author of <strong>The DRYP Trilogy</strong>
                </p>
                <p className="text-lg text-gray-300">
                  R.A. Scheuring is a physician and author. <em>DRYP: The Final Pandemic</em> and <em>DRYP: Revelation</em> are her first novels. She is busily writing Book 3 of the DRYP Trilogy.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dko9vskvn/image/upload/v1727676097/headshot_gwj0o1.png"
                  alt="R.A. Scheuring"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-5xl w-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-yellow-600 mb-4">Get in Touch</h2>
                <p className="text-xl text-gray-300 font-semibold">
                  Get in touch. R.A. Scheuring loves to hear from her readers.
                </p>
              </div>
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}