import React, { useRef, useState } from 'react'
import Croped from '../assets/Croped its mee.png'
import Cropedsvg from '../assets/Croped its mee (1).svg'
const Loader = () => {
    return (
        <div className='flex justify-center items-center p-10 '>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100"></div>
        </div>
    )
}
function Generator() {
    const [ImageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    let InputRef = useRef();
    const HandleGenerator = async () => {
        const inputValue = InputRef.current.value;

        setLoading(true);
        if (!inputValue) {
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
            console.log(imageUrl);
            setImageUrl(imageUrl);
        } catch (err) {
            console.error("Error generating image:", err);
        } finally {
            setLoading(false);
        }
    };





    return (
        <div className='text-white' >
            <div className='flex flex-col justify-center max-w-[800px] mt-[-16px] w-full h-screen mx-auto text-center '>
                <h1 className='font-bold'>Ai Image <span className='text-[#00df9a]' >Generator</span> </h1>
                <p className='md:text-7xl sm:text-6xl text-4xl font-bold'>Make <span className='text-[#00df9a]'>Your</span> Own</p>

                <div className='w-1/2 mx-auto mt-4' >
                    {loading ? <Loader /> : ImageUrl ? (
                        <img className='rounded-xl' src={ImageUrl} alt="Generated" />
                    ) : (
                        <img className='rounded-xl' src={Croped} alt="Default" />
                    )}

                </div>
                <input ref={InputRef} className='w-1/2  px-4 rounded-2xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#00df9a] font-light placeholder-gray-400 text-white mx-auto mt-4 bg-[#32475a] ' placeholder='Enter Promt Here' type="text" />
                <div className='mt-2'>
                    <button
                        disabled={loading}
                        className={`w-[15%] py-2 rounded-2xl text-black font-semibold ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00df9a]'
                            }`}
                        onClick={HandleGenerator}
                    >
                        {loading ? 'Generating...' : 'Generate'}
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Generator