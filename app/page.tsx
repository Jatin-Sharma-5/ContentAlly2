"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';

function Page() {
  const cardData = [
    { title: 'Content Idea 1', description: 'Generate engaging content with AI tools.' },
    { title: 'Content Idea 2', description: 'Utilize AI for personalized content creation.' },
    { title: 'Content Idea 3', description: 'Create SEO-friendly content with AI.' },
    { title: 'Content Idea 4', description: 'Automate content generation for productivity.' },
    { title: 'Content Idea 5', description: 'Enhance engagement with AI-powered content.' },
    { title: 'Content Idea 6', description: 'Create blog posts in seconds with AI tools.' },
    { title: 'Content Idea 7', description: 'Generate newsletters with AI assistance.' },
    { title: 'Content Idea 8', description: 'Create compelling content effortlessly with AI.' },
  ];

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    
    timeline.to('.card', {
      x: '100%',
      duration: 2,
      stagger: 0.3,
      ease: 'power2.inOut',
    });
    timeline.to('.card', {
      x: 0,
      duration: 2,
      stagger: 0.3,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 p-12 text-white text-center rounded-b-3xl shadow-xl">
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
          AI Content Generator
        </h1>
        <p className="mt-4 text-lg font-medium">
          Effortlessly create professional, SEO-friendly content with AI
        </p>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow px-6 py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10 text-gray-800">
            Welcome to the AI Content Generator
          </h2>

          {/* About Section */}
          <section className="max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">About the Tool</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI Content Generator helps you create high-quality, SEO-friendly content in just minutes.
              Whether you're a content creator, marketer, or business owner, this tool streamlines your content
              creation process by generating tailored ideas, copy, and even blog posts that resonate with your audience.
            </p>
          </section>

          {/* Cards Section */}
          <section className="relative flex overflow-hidden mt-12">
            <div className="cards-wrapper flex">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="card bg-gradient-to-r w-72 h-72 mx-4 rounded-xl shadow-lg p-6 flex flex-col justify-between"
                  style={{
                    background: `hsl(${(index * 360) / cardData.length}, 70%, 70%)`, // Different colors for each card
                  }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h4>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Button Section */}
          <div className="flex justify-center mt-12">
            <Link href="/dashboard">
              <Button color="primary" className="px-8 py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">&copy; 2024 AI Content Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page;
