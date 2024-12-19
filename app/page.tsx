'use client';

import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-200 to-gray-100 flex flex-col">

      {/* Animated Grid Pattern in Background */}
      <AnimatedGridPattern className="absolute inset-0 z-0 blur-sm " />

      {/* Header Section */}
      <header className="bg-gradient-to-r from-slate-400 to-blue-400 p-7 text-white text-center rounded-b-lg shadow-md relative z-10">
      <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
        AI Content Generator
      </h1>
      <p className="mt-4 text-lg font-medium">
        Create professional, SEO-friendly content with AI effortlessly.
      </p>
    </header>


      {/* Main Content Section */}
      <main className="flex-grow px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
          <Link href="/dashboard">
            <Button className="px-10 py-4 text-lg font-bold text-black  rounded-lg shadow-lg bg-gradient-to-r from-orange-300 via-green-200 to-teal-400 hover:from-green-300 hover:to-teal-300 transform hover:scale-105 transition-all duration-300 ease-in-out">
              Go to Dashboard
            </Button>
          </Link>

          </div>
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Welcome to the Future of Content Creation
          </h2>

          {/* About Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">About the Tool</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-justify">
              Leverage our AI Content Generator to produce high-quality, SEO-friendly content effortlessly. Ideal for content creators, marketers, and businesses, this tool saves time and enhances productivity by generating tailored content ideas and copy to engage your audience effectively.
            </p>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center z-10">
        <p className="text-sm">&copy; 2024 AI Content Generator. Create By Jatin Sharma.</p>
      </footer>
    </div>
  );
}

export default Page;
