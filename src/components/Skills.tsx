import { useEffect, useRef, useState } from 'react'

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" ref={sectionRef} className="py-20 relative bg-gradient-to-b from-[#1d1233] to-[#0f051d]">
            <div className="absolute z-0 w-full h-full">
                <div className="absolute top-[-40%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#6a00f4]/30 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[40%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#ff005c]/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#0a2540]/30 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">My Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
                </div>

                {/* Tech Skills Logos */}
                {/* Tech Skills Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
                    {/* Row 1 */}
                    <div className="flex justify-center items-center p-4  rounded-lg drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="laravel.png" alt="Laravel" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="livewire.png" alt="Livewire" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="filament.png" alt="Filament" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="tailwind.png" alt="Tailwind" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="html.png" alt="HTML" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="css.png" alt="CSS" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="js.png" alt="JavaScript" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="react.png" alt="React" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="git.png" alt="Git" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex justify-center items-center p-4  drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                        <img src="mysql.png" alt="MySQL" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2  gap-4 sm:gap-6">
                    {[
                        {
                            value: '6+',
                            label: 'Month Experience',
                        },
                        {
                            value: '5+',
                            label: 'Projects Completed',
                        }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="backdrop-blur-md bg-[#0f051d] border border-white/10 rounded-2xl p-4 sm:p-6">
                                <div
                                    className={`text-2xl sm:text-4xl font-bold mb-2 ${index === 0 ? 'text-pink-500' :
                                        index === 3 ? 'text-purple-500' : 'text-blue-500'
                                        }`}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}