'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Cognitive Neuroscience</h1>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection('cv')}
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === 'cv'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              CV
            </button>
            <button
              onClick={() => setActiveSection('thesis')}
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === 'thesis'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              Thesis
            </button>
            <button
              onClick={() => setActiveSection('blog')}
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === 'blog'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Welcome</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I am a Master's student in Cognitive Neuroscience passionate about understanding the neural mechanisms underlying cognition and behavior. This portfolio showcases my research, academic work, and insights in the field.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Research Interests</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Neural plasticity and learning</li>
                    <li>• Memory systems</li>
                    <li>• Neuroimaging methods</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-slate-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Skills</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• fMRI data analysis</li>
                    <li>• Statistical analysis (R, Python)</li>
                    <li>• Experimental design</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-slate-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Experience</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Laboratory research</li>
                    <li>• Data collection & analysis</li>
                    <li>• Literature review</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CV Section */}
        {activeSection === 'cv' && (
          <section className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Curriculum Vitae</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Download my complete CV to learn more about my academic background, research experience, publications, and skills.
              </p>
              <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg inline-block">
                <Link
                  href="/documents/CV.pdf"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                  download
                >
                  📄 Download CV (PDF)
                </Link>
              </div>

              {/* CV Preview */}
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Education</h3>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">Master of Science in Cognitive Neuroscience</h4>
                    <p className="text-gray-700 dark:text-gray-300">University Name • 2024-2026</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Thesis focus: [Your research topic]</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Professional Experience</h3>
                  <div className="border-l-4 border-green-600 pl-4 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Research Assistant</h4>
                      <p className="text-gray-700 dark:text-gray-300">Lab Name • 2023-Present</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Laboratory Internship</h4>
                      <p className="text-gray-700 dark:text-gray-300">Institution • 2022-2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Thesis Section */}
        {activeSection === 'thesis' && (
          <section className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Master's Thesis</h2>
              <div className="bg-green-50 dark:bg-slate-700 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  [Your Thesis Title]
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A comprehensive study investigating [main topic]. This research contributes to our understanding of...
                </p>
                <Link
                  href="/documents/Masters_Thesis.pdf"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                  download
                >
                  📖 Download Thesis (PDF)
                </Link>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Abstract</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    [Add your thesis abstract here. Describe the background, methodology, key findings, and implications of your research.]
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Findings</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Finding 1: [Description]</li>
                    <li>Finding 2: [Description]</li>
                    <li>Finding 3: [Description]</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Methodology</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    [Briefly describe your research methods, participant demographics, data collection procedures, and analysis techniques.]
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Section */}
        {activeSection === 'blog' && (
          <section className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Blog</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Thoughts and insights on cognitive neuroscience research, methodology, and career development.
              </p>

              <div className="space-y-6">
                {/* Blog Post 1 */}
                <article className="border-l-4 border-purple-600 pl-6 py-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Understanding fMRI: A Beginner's Guide
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Published on July 1, 2026
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    An introduction to functional Magnetic Resonance Imaging, how it works, its applications in cognitive neuroscience, and limitations to consider when interpreting fMRI studies.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold">
                    Read more →
                  </button>
                </article>

                {/* Blog Post 2 */}
                <article className="border-l-4 border-purple-600 pl-6 py-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Navigating the PhD Application Process
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Published on June 15, 2026
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Tips and strategies for applying to PhD programs in neuroscience, including how to choose advisors, craft compelling research statements, and prepare for interviews.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold">
                    Read more →
                  </button>
                </article>

                {/* Blog Post 3 */}
                <article className="border-l-4 border-purple-600 pl-6 py-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Neuroplasticity: How the Brain Adapts and Learns
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Published on June 1, 2026
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Exploring the mechanisms of neuroplasticity, recent research findings, and implications for learning, recovery from brain injury, and cognitive enhancement.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold">
                    Read more →
                  </button>
                </article>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 shadow-md mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-700 dark:text-gray-300">
          <p>&copy; 2026 Cognitive Neuroscience Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">Contact: your.email@example.com</p>
        </div>
      </footer>
    </div>
  );
}
