import React, { useRef, useState } from 'react';

const Loader = () => {
  return (
    <div className='flex justify-center items-center p-10'>
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100"></div>
    </div>
  );
};

function LogoGenerator() {
  const [logoUrl, setLogoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [style, setStyle] = useState('minimal');
  
  const handleLogoGeneration = async () => {
    if (!companyName) {
      alert('Please enter a company name');
      return;
    }
    
    setLoading(true);
    
    try {
      // Construct the prompt based on user inputs
      const prompt = `Generate a ${style} logo for a company named "${companyName}" ${slogan ? `with the slogan "${slogan}"` : ''}.`;
      
      const response = await fetch(
        import.meta.env.VITE_HF_API_URL,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              guidance_scale: 7.5,
              num_inference_steps: 30,
              width: 512,
              height: 512
            }
          }),
        }
      );
      
      if (!response.ok) {
        console.error("Error in response", await response.text());
        return;
      }
      
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setLogoUrl(imageUrl);
    } catch (err) {
      console.error("Error generating logo:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-white'>
      <div className='flex flex-col justify-center max-w-[800px] w-full mx-auto text-center py-16'>
        <h1 className='font-bold'>AI Logo <span className='text-[#00df9a]'>Generator</span></h1>
        <p className='md:text-5xl sm:text-4xl text-3xl font-bold my-4'>Design Your <span className='text-[#00df9a]'>Brand</span></p>
        
        <div className='w-full md:w-2/3 mx-auto mt-8'>
          {loading ? (
            <Loader />
          ) : logoUrl ? (
            <div className='bg-white rounded-xl p-4'>
              <img className='max-h-64 mx-auto' src={logoUrl} alt="Generated Logo" />
            </div>
          ) : (
            <div className='bg-[#1a2b3c] rounded-xl p-8 flex items-center justify-center'>
              <p className='text-gray-400'>Your logo will appear here</p>
            </div>
          )}
        </div>
        
        <div className='flex flex-col gap-4 mt-8 w-full md:w-2/3 mx-auto'>
          <input 
            className='px-4 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#00df9a] font-light placeholder-gray-400 text-white bg-[#32475a]' 
            placeholder='Company Name'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          
          <input 
            className='px-4 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#00df9a] font-light placeholder-gray-400 text-white bg-[#32475a]' 
            placeholder='Slogan (optional)'
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
          />
          
          <select 
            className='px-4 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#00df9a] font-light text-white bg-[#32475a]'
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="minimal">Minimal</option>
            <option value="modern">Modern</option>
            <option value="colorful">Colorful</option>
            <option value="vintage">Vintage</option>
            <option value="tech">Tech</option>
            <option value="elegant">Elegant</option>
          </select>
          
          <button 
            disabled={loading}
            className={`py-3 rounded-lg text-black font-semibold mt-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00df9a]'}`}
            onClick={handleLogoGeneration}
          >
            {loading ? 'Generating...' : 'Generate Logo'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoGenerator;