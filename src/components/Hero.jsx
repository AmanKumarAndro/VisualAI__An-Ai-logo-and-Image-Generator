import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Image, PenTool } from 'lucide-react';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const creativePhrases = ['stunning portraits', 'artistic landscapes', 'product mockups', 'brand visuals', 'logo designs'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhrase = creativePhrases[currentIndex];
      if (typedText.length < currentPhrase.length) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      } else {
        setTimeout(() => {
          setTypedText('');
          setCurrentIndex((currentIndex + 1) % creativePhrases.length);
        }, 1000);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [typedText, currentIndex]);

  return (
    <div className="text-white relative overflow-hidden">
      {/* Background gradient effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div> */}
      
      {/* Animated dots background */}
      {/* <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`
            }}
          ></div>
        ))}
      </div> */}

      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <Sparkles className="text-[#00df9a] mr-2" />
            <p className="text-[#00df9a] font-semibold tracking-wider">AI-POWERED VISUAL CREATION</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Your Ideas <br />
            <span className="text-[#00df9a]">Into Reality</span>
          </h1>
          
          <div className="mt-6 h-8">
            <p className="text-xl md:text-2xl font-medium">
              Create <span className="text-[#00df9a] font-bold">{typedText}</span><span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Harness the power of AI to generate professional-grade visuals for your projects, 
            brand, or creative needs - all with simple text prompts.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/image-generator" className="inline-block">
              <button className="bg-[#00df9a] text-black font-medium py-3 px-8 rounded-lg hover:bg-[#00c589] transition duration-300 flex items-center">
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </button>
            </Link>
            <Link to="/about" className="inline-block">
              <button className="bg-transparent border-2 border-[#00df9a] text-[#00df9a] font-medium py-3 px-8 rounded-lg hover:bg-[#00df9a] hover:bg-opacity-10 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/image-generator">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00df9a] transition duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#00df9a] bg-opacity-10 rounded-lg mr-4 group-hover:bg-opacity-20 transition duration-300">
                  <Image className="text-[#00df9a]" size={24} />
                </div>
                <h3 className="font-bold text-xl">Image Generator</h3>
              </div>
              <p className="text-gray-300 mb-4">Transform text descriptions into stunning visual creations with our AI-powered image generation tools.</p>
              <div className="flex items-center text-[#00df9a] font-medium">
                Try it now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition duration-300" />
              </div>
            </div>
          </Link>
          
          <Link to="/logo-generator">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00df9a] transition duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#00df9a] bg-opacity-10 rounded-lg mr-4 group-hover:bg-opacity-20 transition duration-300">
                  <PenTool className="text-[#00df9a]" size={24} />
                </div>
                <h3 className="font-bold text-xl">Logo Generator</h3>
              </div>
              <p className="text-gray-300 mb-4">Design professional logos and brand assets that perfectly capture your brand's identity and values.</p>
              <div className="flex items-center text-[#00df9a] font-medium">
                Try it now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition duration-300" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Add some custom CSS for the pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Hero;