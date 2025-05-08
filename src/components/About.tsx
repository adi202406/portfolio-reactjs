import { CodeIcon, LayersIcon, PenToolIcon } from 'lucide-react'

export const About = () => {
    return (
        <section id="about" className="py-20 relative bg-gradient-to-b from-[#1d1233] to-[#0f051d]">
            <div className="absolute z-0 w-full h-full">
                <div className="absolute top-[-30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#6a00f4]/30 blur-[100px] animate-pulse"></div>
                <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#6a00f4]/30 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#ff005c]/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#0a2540]/30 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
                </div>

                {/* Three Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <CodeIcon size={32} className="text-purple-500" />,
                            title: 'Fullstack Web Developer',
                            description: 'Creating clean, efficient code for web applications',
                        },
                        {
                            icon: <LayersIcon size={32} className="text-pink-500" />,
                            title: 'Backend Developer',
                            description: 'Creating clean, efficient APIs for web applications.',
                        },
                        {
                            icon: <PenToolIcon size={32} className="text-cyan-400" />,
                            title: 'Digital Creative',
                            description: 'Creating innovative and user-focused digital experiences across platforms.',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] group"
                        >
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Journey and Expertise */}
                <div className="mt-20 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">My Journey</h3>
                            <p className="text-gray-400">
                                I am a graduate of SMKN 2 Surabaya, majoring in Software Engineering. During my studies,
                                I gained practical experience in web, desktop, and game development, as well as database
                                management. In my first year, I focused on mastering programming fundamentals, followed
                                by hands-on projects in my second year. In my final year, I completed a six-month
                                internship at Dako Indonesia as a Fullstack Web Developer. There, I was responsible for
                                developing the company&apos;s internal website using Laravel, handling both backend and
                                frontend tasks, and optimizing application performance. This experience strengthened my
                                technical skills and taught me how to collaborate effectively in a professional
                                environment.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-6">My Expertise</h3>
                            <p className="text-gray-400 mb-6">
                                I focus on developing structured, efficient web systems with clear logic and
                                user-friendly interfaces. Experienced in handling both backend and frontend, I&apos;m
                                confident in delivering reliable and maintainable solutions.
                            </p>
                            <div className="flex items-center gap-6 flex-wrap">
                                <img src="laravel.png" alt="laravel" className="h-13" />
                                <img src="livewire.png" alt="Livewire" className="h-10" />
                                <img src="filament.png" alt="Livewire" className="h-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
