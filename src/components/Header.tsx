import { ChevronDownIcon } from 'lucide-react'

export const Header = () => {
    const handleViewProjects = () => {
        const workSection = document.getElementById('work')
        const navHeight = 80
        const elementPosition = workSection?.getBoundingClientRect().top ?? 0
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }

    const handleContact = () => {
        const contactSection = document.getElementById('contact')
        const navHeight = 80
        const elementPosition = contactSection?.getBoundingClientRect().top ?? 0
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }

    return (
        <header
            id="home"
            className="relative min-h-screen w-full flex items-center justify-center pt-16 bg-gradient-to-b from-[#0f051d] to-[#1d1233] overflow-hidden"
        >
            {/* Glow Backgrounds */}
            <div className="absolute z-0 w-full h-full">
                <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#6a00f4]/30 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#ff005c]/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#0a2540]/30 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h1 className="text-6xl sm:text-6xl md:text-7xl font-bold mb-6 transition-all duration-300">
                        <span className="block transform hover:scale-105 transition-transform duration-300">
                            Hi I'm <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-transparent bg-clip-text inline-block">
                                Adi
                            </span>
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-transparent bg-clip-text inline-block">
                            Ramadhan
                        </span>
                    </h1>
                    <p className="text-gray-200 text-lg sm:text-xl mb-8 max-w-xl">
                        Fullstack Developer & Digital Creative
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button
                            onClick={handleViewProjects}
                            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-medium hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={handleContact}
                            className="px-6 sm:px-8 py-3 bg-transparent border border-white/20 rounded-full text-white font-medium backdrop-blur-sm hover:bg-white/10 transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative transform hover:scale-105 transition-all duration-500">
                        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                            <img
                                src="my_photo.jpg"
                                alt="Portrait"
                                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Icon */}
            <a
                href="#about"
                className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white animate-bounce p-2 rounded-full hover:bg-white/5 transition-colors duration-300"
                onClick={(e) => {
                    e.preventDefault()
                    const aboutSection = document.getElementById('about')
                    const navHeight = 80
                    const elementPosition = aboutSection?.getBoundingClientRect().top ?? 0
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    })
                }}
            >
                <ChevronDownIcon size={32} />
            </a>
        </header>
    )
}
