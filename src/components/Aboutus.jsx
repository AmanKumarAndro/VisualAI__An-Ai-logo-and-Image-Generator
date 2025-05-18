import React from 'react';
import { ArrowRight, Code, Sparkles, Cpu, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Aman from '../assets/Croped its mee.png';

function About() {
  return (
    <div className="text-white relative overflow-hidden min-h-screen pb-16">
    
      <div className="max-w-6xl mx-auto px-4 pt-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About <span className="text-[#00df9a]">VisualAI</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A personal developer project for generating images and creating logos using AI technology.
          </p>
        </div>
        
        {/* Project Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Project Background</h2>
            <p className="text-gray-300 mb-4">
              VisualAI is a personal project I developed to explore AI-powered image and logo generation. This is not a commercial product, but rather my individual exploration into creative AI applications.
            </p>
            <p className="text-gray-300 mb-4">
              Through this project, I'm learning to integrate modern AI models from Hugging Face and similar platforms with web development technologies. It serves as both a practical learning experience and a showcase of what's possible when combining these tools.
            </p>
            <p className="text-gray-300">
              I built VisualAI to experiment with different image generation techniques and to create a simple interface that makes AI-powered visual creation more accessible to myself and other developers interested in similar technologies.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-[#00df9a]">Project Focus</h3>
            <p className="text-lg mb-6">
              Creating AI-generated images and logos through an intuitive interface built with modern web technologies.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-[#00df9a]">Key Features</h3>
            <p className="text-lg">
              Text-to-image generation, logo creation, and customizable visual outputs that showcase the capabilities of current AI models.
            </p>
          </div>
        </div>
        
        {/* Technologies Used Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="text-[#00df9a]" size={32} />,
                title: "React.js",
                description: "Frontend built with React for a responsive and dynamic user interface."
              },
              {
                icon: <Sparkles className="text-[#00df9a]" size={32} />,
                title: "Tailwind CSS",
                description: "Styling implemented with Tailwind for efficient and consistent design elements."
              },
              {
                icon: <Cpu className="text-[#00df9a]" size={32} />,
                title: "Hugging Face APIs",
                description: "Integration with Hugging Face's powerful AI models for image and logo generation."
              },
              {
                icon: <Github className="text-[#00df9a]" size={32} />,
                title: "Open Source Tools",
                description: "Utilizing various open-source libraries and frameworks to enhance functionality."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00df9a] transition duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Developer Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Developer</h2>
          <div className="flex flex-wrap justify-center">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <img src={Aman} alt="Aman Kumar" className="w-24 h-24 rounded-full mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-center">Aman Kumar</h3>
              <p className="text-[#00df9a] text-center mb-3">Developer & AI Enthusiast</p>
              <p className="text-gray-300 text-center">A developer passionate about exploring AI applications for creative visual generation.</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
          <h2 className="text-3xl font-bold mb-4">Try the Generator</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate custom images and logos using AI technology. This personal project showcases what's possible with today's AI tools.
          </p>
          <Link to="/image-generator">
            <button className="bg-[#00df9a] text-black font-medium py-3 px-8 rounded-lg hover:bg-[#00c589] transition duration-300 flex items-center mx-auto">
              Start Creating
              <ArrowRight size={20} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
   
    </div>
  );
}

export default About;