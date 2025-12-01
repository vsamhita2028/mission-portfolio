import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Landing = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = "../../public/Samhita_Resume.pdf";
        link.download = 'Samhita_Vetcha_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full px-2 py-5 sm:px-8 md:px-16 lg:px-32 bg-transparent gap-5">
                <div className="order-2 md:order-1 flex flex-col items-center justify-center md:items-start text-center md:text-left">
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-1">Hello,</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-5">I'm Samhita</div>
                    <div className="text-white text-center font-extrabold mb-5">
                        <div className="align-center text-2xl sm:text-3xl md:text-4xl bg-[#00BF63] py-2 sm:py-3 w-48 sm:w-80 border-2 border-[#3B4150] rounded-lg shadow">Software</div>
                        <div className="text-xl sm:text-2xl md:text-3xl bg-[#B789FF] py-2 sm:py-3 w-36 sm:w-60 border-2 border-[#3B4150] rounded-lg shadow tilt">Engineer</div>
                    </div>
                    <p className="text-base sm:text-lg mb-8 max-w-xs sm:max-w-md">
                        I love turning ideas into interactive experiences whether it’s clean code or clever UI.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        {/* download resume functionality to be added */}
                        <button
                            onClick={downloadResume}
                            className="text-white inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#FF4EDB] border-2 border-[#3B4150] rounded-lg font-semibold hover:bg-[#e9b82b] transition text-sm sm:text-base"
                        >
                            Get my Resume!
                        </button>
                    </div>
                </div>
                <div className="order-1 md:order-2 relative flex justify-center items-center mb-8 md:mb-0">
                    <div className="group relative">
                        <DotLottieReact
                            src="https://lottie.host/80b0256e-f9dd-42a8-bb25-8309b2654bf9/3ad54tTuhg.lottie"
                            loop
                            autoplay
                            className="h-80 w-80 md:h-100 md:w-100 lg:h-140 lg:w-140"
                        />
                        {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 px-2 sm:px-4 py-1 sm:py-2 bg-indigo-600 text-white rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none whitespace-nowrap">
                                    Powered by coffee, curiosity, and a tiny bit of AI!
                                </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing