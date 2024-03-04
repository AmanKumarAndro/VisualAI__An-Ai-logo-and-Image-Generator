import React, { useRef, useState } from 'react'
import Croped from '../assets/Croped its mee.png'
import Cropedsvg from '../assets/Croped its mee (1).svg'
function Generator() {
    const [ImageUrl, setImageUrl] = useState('/');
    let InputRef = useRef();
    const HandleGenerator = async () => {
        if (InputRef.current.value === "") {
            return 0;
        }
        const response = await fetch(
            "https://api.openai.com/vl/images/generations",
            {
                method: "POST",
                headers: {
                    Authorization: 'Bearer sk-kHK52tgCcX7tOVWnTnqfT3BlbkFJQZhuLYZJZuPIgL0LAm2',
                    "Content-Type": "application/json",
                    "User-Agent": "Chrome"
                },
                body: JSON.stringify({
                    prompt: `${InputRef.current.value}`,
                    n: 1,
                    size: '512x512'
                }),
            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImageUrl(data_array[0].url);
    }



    return (
        <div className='text-white' >
            <div className='flex flex-col justify-center max-w-[800px] mt-[-16px] w-full h-screen mx-auto text-center '>
                <h1 className='font-bold'>Ai Image <span className='text-[#00df9a]' >Generator</span> </h1>
                <p className='md:text-7xl sm:text-6xl text-4xl font-bold'>Make <span className='text-[#00df9a]'>Your</span> Own</p>

                <div className='w-1/2 mx-auto mt-4' >
                    <img className='rounded-xl' src={ImageUrl === '/' ? Croped : ImageUrl} alt="" />
                </div>
                <input ref={InputRef} className='w-1/2  px-4 rounded-2xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#00df9a] font-light placeholder-gray-400 text-white mx-auto mt-4 bg-[#32475a] ' placeholder='Enter Promt Here' type="text" />
                <div className='mt-2'>
                    <button className='w-[15%] bg-[#00df9a] py-2 rounded-2xl text-black font-semibold'onClick={()=>{HandleGenerator()}}  >Generate</button>
                </div>

            </div>


        </div>
    )
}

export default Generator