
import React, { useRef, useState } from 'react';

const Loader = () => {
  return (
    <div className='flex justify-center items-center p-10'>
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100"></div>
    </div>
  );
};

function Generator() {
  const [ImageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const InputRef = useRef();

  const HandleGenerator = async () => {
    const inputValue = InputRef.current.value;
    setLoading(true);
    
    if (!inputValue) {
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch(
        import.meta.env.VITE_HF_API_URL,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: inputValue,
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
      setImageUrl(imageUrl);
    } catch (err) {
      console.error("Error generating image:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-white'>
      <div className='flex flex-col justify-center max-w-[800px] w-full mx-auto text-center py-16'>
        <h1 className='font-bold text-3xl'>AI Image <span className='text-[#00df9a]'>Generator</span></h1>
        <p className='md:text-5xl sm:text-4xl text-3xl font-bold my-4'>Bring Your <span className='text-[#00df9a]'>Imagination</span> To Life</p>
        
        <div className='w-full md:w-2/3 mx-auto mt-8'>
          {loading ? (
            <Loader />
          ) : ImageUrl ? (
            <img className='rounded-xl mx-auto max-h-96' src={ImageUrl} alt="Generated" />
          ) : (
            <div className='bg-[#1a2b3c] rounded-xl p-8 flex items-center justify-center h-64'>
              <p className='text-gray-400'>Your image will appear here</p>
            </div>
          )}
        </div>
        
        <div className='flex flex-col md:flex-row gap-4 mt-8 w-full md:w-2/3 mx-auto'>
          <input 
            ref={InputRef}
            className='flex-1 px-4 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00df9a] font-light placeholder-gray-400 text-white bg-[#32475a]' 
            placeholder='Describe the image you want to create...' 
            type="text" 
          />
          
          <button
            disabled={loading}
            className={`px-8 py-3 rounded-lg text-black font-semibold ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00df9a]'}`}
            onClick={HandleGenerator}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>
        
        <div className='mt-8 text-left w-full md:w-2/3 mx-auto'>
          <h3 className='text-[#00df9a] text-xl font-bold mb-2'>Try these prompts:</h3>
          <ul className='text-gray-300 space-y-2'>
            <li className='cursor-pointer hover:text-white' onClick={() => InputRef.current.value = "A futuristic city at sunset with flying cars"}>
              • A futuristic city at sunset with flying cars
            </li>
            <li className='cursor-pointer hover:text-white' onClick={() => InputRef.current.value = "A magical forest with glowing mushrooms and fairies"}>
              • A magical forest with glowing mushrooms and fairies
            </li>
            <li className='cursor-pointer hover:text-white' onClick={() => InputRef.current.value = "An underwater scene with colorful coral reef and exotic fish"}>
              • An underwater scene with colorful coral reef and exotic fish
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Generator;