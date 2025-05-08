import { useState, useEffect } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        setIsOpen(false)
        const element = document.getElementById(id)
        const navHeight = 80
        const elementPosition = element?.getBoundingClientRect().top ?? 0
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
            isScrolled ? 'backdrop-blur-none bg-black/40' : 'backdrop-blur-none bg-transparent'
        } ${isOpen ? 'bg-black/90' : ''}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
                    PORTFOLIO
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-8">
                    {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleNavClick(e, item.toLowerCase())}
                            className="text-gray-300 hover:text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Hamburger button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-2 transition"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[300px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
            }`}>
                <div className="flex flex-col items-center bg-black/90 mt-4 rounded-xl py-4 space-y-4 border border-white/10 shadow-lg">
                    {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleNavClick(e, item.toLowerCase())}
                            className="text-gray-300 hover:text-white w-full text-center py-2 px-4 hover:bg-white/5 rounded transition-all duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
