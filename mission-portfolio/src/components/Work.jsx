import React from 'react'
import Title from './Title'
import planner from '../assets/planner.png'
import mbti from '../assets/mbti.png'
import casestudy from '../assets/casestudy.png'
const Work = () => {
    const works = [{
        title: "Planner App",
        image: planner,
        description: "Comprehensive task management solution with progress tracking and inbox organization.",
        link: "https://github.com/vsamhita2028/Capstone"
    }, {
        title: "MBTI Personality Test",
        image: mbti,
        description: "Personality classifier mapping users to Marvel/DC characters based on questionnaire responses.",
        link: "https://github.com/vsamhita2028/NoSql"
    }, {
        title: "ATM UI Architecture Design",
        image: casestudy,
        description: "A project showcasing client-side architecture design principles of ReactJS for building an ATM UI.",
        link: "#"
    }
    ]
    return (
        <section className="min-h-screen flex flex-col px-4 sm:px-8 md:px-10 mb-10">
            <div className='items-center justify-center w-full px-2 py-5 xs:px-8 sm:px-16'>
                <Title title="My Work" />
                <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                    {works.map((work, index) => (
                        <li key={index} className='flex flex-col gap-4 py-10 px-4 border-2 border-[#3B4150] rounded-lg shadow hover:scale-105 transform transition duration-300'>
                            <h3 className="text-lg font-semibold text-center">{work.title}</h3>

                            <div className="flex justify-center">
                                <img src={work.image} alt={work.title} className="mb-4 rounded h-50 w-50 border-2 border-[#3B4150]" />
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <p className="text-gray-600 mb-4">{work.description}</p>
                                <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-white inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#FF4EDB] border-2 border-[#3B4150] rounded-lg font-semibold hover:bg-[#e9b82b] transition text-sm sm:text-base">View More</a>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Work