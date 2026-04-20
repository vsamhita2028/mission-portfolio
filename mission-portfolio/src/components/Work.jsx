import React from 'react'
import Title from './Title'

const Work = () => {
    const experiences = [
        {
            company: "Bank of America",
            role: "Software Engineer I",
            duration: "June 2022 - Present",
            achievements: [
                "Designed and built a real-time ATM monitoring platform tracking transactions and device health across distributed systems, improving reliability and alert response time.",
                "Developed 400+ React/TypeScript screens using component-based architecture, improving frontend maintainability and reducing code duplication.",
                "Improved frontend performance by 20% through code splitting, lazy loading, bundle optimization, memoization, and optimized state management.",
                "Built an AI-based defect triage system (Node.js + NLP) that automated duplicate detection and issue classification, reducing manual triage effort by 35%.",
                "Created API virtualization services using Parasoft Virtualize and Groovy to simulate backend dependencies, reducing integration delays by 30% and enabling parallel development.",
                "Built a full-stack engineering metrics dashboard using AI-assisted development tools, aggregating data from multiple sources and reducing manual reporting effort by 40%.",
                "Designed and maintained RESTful APIs with Node.js/Express.js for transaction processing and system alerts; defined API contracts ensuring frontend/backend consistency."
            ]
        },
        {
            company: "Navrang Consultancy and Technologies",
            role: "Full Stack Developer Intern",
            duration: "Feb 2022 - May 2022",
            achievements: [
                "Delivered a React + Node.js Business Management MVP end-to-end within the internship period.",
                "Built a cross-team test automation tool that improved defect identification efficiency and reduced defect rates by 22%."
            ]
        }
    ];

    return (
        <section className="min-h-screen flex flex-col px-4 sm:px-8 md:px-10 mb-10">
            <div className='items-center justify-center w-full px-2 py-5 xs:px-8 sm:px-16'>
                <Title title="Work Experience" />
                <div className="mt-10 flex flex-col gap-8 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col gap-4 py-8 px-6 sm:px-10 border-2 border-[#3B4150] rounded-xl shadow">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 border-b  border-[#3B4150]/50 pb-6">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold tracking-wide">{exp.role}</h3>
                                    <p className="text-[#FF4EDB] font-medium text-lg mt-1">{exp.company}</p>
                                </div>
                                <div className="font-medium px-5 py-2.5 rounded-full inline-flex items-center w-max text-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#FF4EDB] mr-2 animate-pulse"></span>
                                    {exp.duration}
                                </div>
                            </div>
                            <ul className="mt-4 space-y-4">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start text-sm sm:text-base hover:text-[#FF4EDB] transition-colors duration-200">
                                        <span className="text-[#FF4EDB] mr-4 mt-1.5 text-[10px]">❖</span>
                                        <span className="leading-relaxed">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work