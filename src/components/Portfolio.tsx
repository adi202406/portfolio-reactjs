import { useState } from 'react'
import { ExternalLink, Github, Code2 } from 'lucide-react'

type Filter = 'All' | 'Web' | 'Mobile' | 'UI/UX' | 'API' | 'Branding'

interface Project {
    title: string;
    category: string;
    image: string;
    link?: string;
    github?: string;
    techStack: string[];
    tags: Filter[];
}

export const Portfolio = () => {
    const [activeProject, setActiveProject] = useState(0)
    const [activeFilter, setActiveFilter] = useState<Filter>('All')

    const projects: Project[] = [
        {
            title: 'SchoolOne - School Management System',
            category: 'Web Development',
            image: 'schoolone.webp',
            link: 'https://adiy.my.id',
            techStack: ['Laravel 11', 'Livewire', 'Filament', 'Cloudinary', 'Tailwind CSS', 'MySQL', 'Spatie Roles & Permissions'], 
            tags: ['All', 'Web']
        },
        {
            title: 'Product Catalog Website',
            category: 'Web Development',
            image: 'web_product_catalog.webp',
            github: 'https://github.com/adi202406/product-catalog-website',
            techStack: ['Laravel 12', 'Filament', 'Laravel', 'MySQL', 'Tailwind CSS'],
            tags: ['All', 'Web']
        },
        {
            title: 'Gadget News Portal',
            category: 'Web Development',
            image: 'gadget_news.webp',
            github: 'https://github.com/adi202406/gadget-news-portal',
            techStack: ['Laravel 10', 'Bootsrap 5', 'MySQL'],
            tags: ['All', 'Web']
        },
        {
            title: 'Rest API Task Management System (In Progress)', 
            category: 'API Development',
            image: 'rest-api-todo-list.png',
            techStack: ['Laravel', 'Sanctum', 'Oauth', 'Cloudinary', 'MySQL'],
            tags: ['All', 'API']
        },
        {
            title: 'E-Sign Internship Project – Dako Brand & Communication', 
            category: 'Web Development',
            image: 'e-sign.jpeg',
            techStack: ['Laravel', 'MySql', 'Backend'],
            tags: ['All', 'Web']
        },
    ]

    const filteredProjects = projects.filter(project =>
        activeFilter === 'All' || project.tags.includes(activeFilter)
    )

    return (
        <section id="work" className="py-20 relative bg-gradient-to-b from-[#0f051d] to-[#1d1233]">
            <div className="absolute z-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-[100px]" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">My Work</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="order-2 lg:order-1">
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02]">
                            <img
                                src={projects[activeProject].image}
                                alt={projects[activeProject].title}
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-xs text-cyan-400 uppercase tracking-wider">
                                            {projects[activeProject].category}
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                                            {projects[activeProject].title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center mt-4 gap-2">
                                        {projects[activeProject].link && (
                                            <a
                                                href={projects[activeProject].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                                aria-label="Visit project"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {projects[activeProject].github && (
                                            <a
                                                href={projects[activeProject].github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                                aria-label="Visit GitHub"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
                        <div className="space-y-4">
                            {projects.slice(0,4).map((project, index) => (
                                <button
                                    key={index}
                                    className={`w-full cursor-pointer p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                                        activeProject === index
                                            ? 'bg-white/10 backdrop-blur-md border border-white/10 transform scale-[1.02]'
                                            : 'hover:bg-white/5'
                                    }`}
                                    onClick={() => setActiveProject(index)}
                                >
                                    <div className="flex items-center">
                                        <div className="mr-4">
                                            <div
                                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                    activeProject === index
                                                        ? 'bg-gradient-to-r from-purple-500 to-cyan-400'
                                                        : 'bg-white/10'
                                                }`}
                                            >
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-lg sm:text-xl font-bold">{project.title}</h4>
                                            <p className="text-gray-400">{project.category}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                        {(['All', 'Web', 'Mobile', 'UI/UX', 'API', 'Branding'] as Filter[]).map(
                            (filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                        activeFilter === filter
                                            ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white'
                                            : 'bg-white/5 hover:bg-white/10'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ),
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl aspect-[4/3] transform transition-all duration-300 hover:scale-[1.02]"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <h4 className="text-xl font-bold">{project.title}</h4>
                                        <p className="text-gray-300 mb-3">{project.category}</p>
                                        
                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm flex items-center"
                                                >
                                                    <Code2 size={12} className="mr-1" />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Project Links */}
                                        <div className="flex items-center gap-3">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm flex items-center hover:bg-white/20 transition-all duration-300"
                                                >
                                                    <ExternalLink size={14} className="mr-1" />
                                                    <span className="text-xs">Live Demo</span>
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm flex items-center hover:bg-white/20 transition-all duration-300"
                                                >
                                                    <Github size={14} className="mr-1" />
                                                    <span className="text-xs">Source Code</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}