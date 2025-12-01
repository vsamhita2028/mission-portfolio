import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#B789FF]">
      <DotLottieReact
        src="https://lottie.host/caab0125-cd28-4eaf-ba1a-3a5f99b1ee51/6rQu8l7TDY.lottie"
        loop
        autoplay
      />
    </div>
  );
}

export default Loader