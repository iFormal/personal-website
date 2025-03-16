import { Metadata } from "next";
import React from "react";
import Gradientdiv from "@/components/gradientdiv";
import Image from "next/image";

export const metadata: Metadata = {
  title: "James Ang",
  description: "Personal Portfolio project created in NextJS 14.",
};

export default function Home() {
  return (
    <Gradientdiv className="w-full overflow-x-hidden text-white">
    <main className="w-full overflow-x-hidden bg-transparent text-white">
        {/* About Me */}
        <section id="about-me" className="min-h-screen flex items-center relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black" />
          </div>
          <div className="container mx-auto px-6 py-24 relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              James Ang
            </h1>
            <p className="text-2xl md:text-4xl mb-8 max-w-2xl leading-relaxed">
              Software Developer & Creative UI/UX Designer
            </p>
            <p className="text-lg max-w-2xl leading-relaxed text-gray-300">
            Hello! I am a Year 3 Student currently studying at Nanyang Polytechnic, Diploma in Information Technology. <br /><br /> I was a former Govtech Intern as a UI / UX Designer and I&apos;m currently serving National Service!
            </p>
            <div className="mt-12">
              <a 
                href="#projects" 
                className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                View My Work (Work-in-Progress)
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen flex items-center relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl hover:shadow-blue-500/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl hover:shadow-purple-500/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>TBC</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl hover:shadow-indigo-500/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Other Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Git & GitHub</li>
                  <li>TBC</li>
                  <li>TBC</li>
                  <li>TBC</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="h-64 bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <Image
                      src="/keyboard.png"
                      alt="Project 1 Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-300 mb-4">
                    A fully working, niche design of a custom keyboard e-commerce website that I developed in Year 1 of NYP
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">CSS</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Javascript</span>
                  </div>
                  <a href="https://ikb.vercel.app/" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="h-64 bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    Project Screenshot
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Idk what website, should build something</h3>
                  <p className="text-gray-300 mb-4">
                    TO BE CONTINUED
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TBC</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TBC</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TBC</span>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiences" className="min-h-screen relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900/20 to-black opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work Experience</h2>
            <div className="space-y-12 max-w-3xl mx-auto">
              {/* Experience 1 */}
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
                <div className="mb-1 text-blue-400 font-semibold">2023 - 2024</div>
                <h3 className="text-2xl font-bold mb-2">UI / UX Designer Intern</h3>
                <h4 className="text-lg text-gray-300 mb-4">Government Technology Agency (GovTech)</h4>
                <p className="text-gray-400">
                  Job Description (TBC)
                </p>
              </div>
              
              {/* Experience 2 */}
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-purple-500"></div>
                <div className="mb-1 text-purple-400 font-semibold">2020 - 2021</div>
                <h3 className="text-2xl font-bold mb-2">Cyber Security Analyst</h3>
                <h4 className="text-lg text-gray-300 mb-4">Cyberproof Inc.</h4>
                <p className="text-gray-400">
                  Job Description (TBC)
                </p>
              </div>
              
              {/* Experience 3 */}
              <div className="relative pl-8 border-l-2 border-indigo-500">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-indigo-500"></div>
                <div className="mb-1 text-indigo-400 font-semibold">2018 - 2019</div>
                <h3 className="text-2xl font-bold mb-2">Retail Assistant</h3>
                <h4 className="text-lg text-gray-300 mb-4">Sony</h4>
                <p className="text-gray-400">
                  Assisted in selling Sony products lol
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me */}
        <section id="contact" className="min-h-screen relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Get In Touch</h2>
            
            <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 hover:shadow-blue-500/20 hover:shadow-lg transition-all duration-300">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-8 py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:" className="text-blue-400 hover:text-blue-300">willhideemail@scraper.com</a>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Social</h3>
                  <div className="flex space-x-3 mt-1">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Singapore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-16"></div>
        </section>

        {/* Footer */}
        <section id="footer" className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20 opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            {/* Main footer content */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              {/* Logo/name section */}
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  James Ang
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Software Developer & Creative UI / UX Designer
                </p>
              </div>
              
              {/* Social links */}
              <div className="flex space-x-4 mt-6 md:mt-0">
                <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
            
            {/* Copyright section */}
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} James Ang. All Rights Reserved.</p>
              <p className="mt-1">Made with Next.js 14 & Tailwind CSS</p>
            </div>
          </div>
        </section>
    </main>
    </Gradientdiv>
  );
}
