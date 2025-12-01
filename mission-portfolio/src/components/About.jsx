import React, { useRef } from "react";
import reactIcon from '../assets/slider/react.png';
import nodeIcon from '../assets/slider/node.png';
import jsIcon from '../assets/slider/javascript.png';
import javaIcon from '../assets/slider/java.png';
import dsaIcon from '../assets/slider/dsa.png';
import queryIcon from '../assets/slider/query.png';
import apiIcon from '../assets/slider/api.png';
import toolsIcon from '../assets/slider/tools.png';
import htmlIcon from '../assets/slider/html.png';
import cssIcon from '../assets/slider/css.png';
import jump from '../assets/jump.png'
import oops from '../assets/slider/oops.png';
// Import React Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";          // core styles
import "swiper/css/navigation"; // optional: navigation arrows
import Title from "./Title";


const About = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const techStacks = [
        { name: "JavaScript", icon: jsIcon, desc: "A strongly typed programming language that builds on JavaScript." },
        { name: "React", icon: reactIcon, desc: "A JavaScript library for building user interfaces." },
        { name: "HTML", icon: htmlIcon, desc: "A markup language for creating web pages." },
        { name: "DSA", icon: dsaIcon, desc: "A collaborative interface design tool." },
        { name: "CSS", icon: cssIcon, desc: "A style sheet language for describing the presentation of a document written in HTML." },
        { name: "Java", icon: javaIcon, desc: "A versatile language for web, data science, and automation." },
        { name: "Query Language", icon: queryIcon, desc: "A collaborative interface design tool." },
        { name: "API", icon: apiIcon, desc: "A collaborative interface design tool." },
        { name: "tools", icon: toolsIcon, desc: "A collaborative interface design tool." },
        { name: "NodeJs", icon: nodeIcon, desc: "A collaborative interface design tool." },
        { name: "oops", icon: oops }
    ];
    return (
        //fix the css looks so complicated
        <section className="min-h-screen flex flex-col mb-10">
            <Title title="Who Am I?" />
            <div className="grid grid-cols-1 md:grid-cols-5  flex justify-center items-center">
                <div className="md:col-span-2 lg:col-span-2 flex justify-center items-center">
                    <img
                        src={jump}
                        alt="Sammy"
                        className="h-80 w-80 sm:h-100 sm:w-100 md:h-140 md:w-140 lg:w-120 lg:h-120 object-contain z-10"
                    />
                </div>
                <div className="md:col-span-3 lg:col-span-3 max-w-full md:max-w-3xl px-5">
                    <div className="text-sm sm:text-base md:text-lg space-y-2 border-2 border-[#3B4150] rounded-xl shadow px-2 sm:px-4 md:px-8 py-4 sm:py-6">
                        <p>I’m a software engineer with a little over three years of experience, mainly focused on frontend development. I enjoy building clean, intuitive, and scalable web experiences using JavaScript, React, and solid engineering practices. What excites me most is finding that balance between great design and reliable architecture, making sure things not only look good but work smoothly.</p>
                        <p className="my-3 sm:my-5">I’m passionate about building products that feel intuitive, fast, and accessible to everyone. I’m constantly learning, whether it’s exploring better design systems, improving performance, or experimenting with new front-end tools.</p>

                    </div>
                </div>
            </div>

            <div className="relative w-full max-w-7xl mx-auto mt-10 px-2 sm:px-4 md:px-10 lg:px-12 overflow-hidden">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={5}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                >
                    {techStacks.map((item) => (
                        <SwiperSlide key={item.name}>
                            <div className="flex flex-col items-center px-1 sm:px-2">
                                <img src={item.icon} alt={item.name} className="h-30 w-30 object-contain" />
                                <h3 className="font-semibold text-xs sm:text-sm md:text-base text-center">{item.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default About