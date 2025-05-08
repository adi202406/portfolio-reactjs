import { useState } from 'react'
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    InstagramIcon,
    SendIcon,
    Loader2Icon
} from 'lucide-react'

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Format the message to be sent to WhatsApp
            const whatsappMessage = `*New Contact Form Submission*
------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
------------------------`.trim()

            const waNumber = import.meta.env.VITE_WHATSAPP_NO;
            const fonnteToken = import.meta.env.VITE_PUBLIC_FONNTE_TOKEN;
            
            console.log("Sending to:", waNumber);
            console.log("Message:", whatsappMessage);
            
            // Creating a FormData object as per Fonnte API documentation
            const formDataToSend = new FormData();
            formDataToSend.append('target', waNumber);
            formDataToSend.append('message', whatsappMessage);
            formDataToSend.append('countryCode', '62'); // Indonesia country code
            
            // Using FormData instead of JSON for the request
            const response = await fetch('https://api.fonnte.com/send', {
                method: 'POST',
                headers: {
                    'Authorization': fonnteToken,
                },
                body: formDataToSend
            })

            const result = await response.json()
            console.log("API response:", result);
            
            if (result.status === true) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                console.error('API error:', result)
                throw new Error(`Failed to send message: ${result.reason || 'Unknown error'}`)
            }
        } catch (error) {
            console.error('Error sending message:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <section id="contact" className="py-20 relative bg-gradient-to-b from-[#0f051d] to-[#1d1233]">
            <div className="absolute z-0 w-full h-full">
                <div className="absolute top-[-30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#6a00f4]/30 blur-[100px] animate-pulse"></div>
                <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#6a00f4]/30 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#ff005c]/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#0a2540]/30 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="absolute z-0 w-full h-full overflow-hidden">
                <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[100px]"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h3 className="text-2xl font-bold mb-6">Send Message to WhatsApp</h3>
                        <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Message"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center
                                    ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transform hover:scale-[1.02] active:scale-[0.98]'}
                                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black`}
                            >
                                {isSubmitting ? (
                                    <Loader2Icon className="animate-spin" size={24} />
                                ) : (
                                    <>
                                        <SendIcon size={18} className="mr-2" />
                                        Send to WhatsApp
                                    </>
                                )}
                            </button>
                            {submitStatus === 'success' && (
                                <div className="text-green-400 text-center">Message sent successfully!</div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="text-red-400 text-center">Failed to send message. Please check the console for errors and try again.</div>
                            )}
                        </form>
                    </div>
                    <div className="flex flex-col justify-between space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-gray-400 mb-8">
                                Feel free to reach out to me for any questions or opportunities.
                            </p>
                            <div className="space-y-6">
                                {[
                                    {
                                        label: 'Location',
                                        value: 'Surabaya, Indonesia',
                                    },
                                    {
                                        label: 'Email',
                                        value: 'adirmdhn111006@gmail.com',
                                    },
                                    {
                                        label: 'WhatsApp',
                                        value: '+62 878-1028-0556',
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-24 text-gray-400">{item.label}:</div>
                                        <div className="font-medium">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    {
                                        icon: <GithubIcon size={20} />,
                                        href: 'https://github.com/adi202406',
                                        color: 'hover:bg-gray-700',
                                    },
                                    {
                                        icon: <LinkedinIcon size={20} />,
                                        href: 'https://linkedin.com/in/adi-ramadhan-10a156219',
                                        color: 'hover:bg-blue-700',
                                    },
                                    {
                                        icon: <InstagramIcon size={20} />,
                                        href: 'https://instagram.com/adirmdhn',
                                        color: 'hover:bg-pink-600',
                                    },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} transform hover:scale-110 hover:shadow-lg`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl border border-white/10 p-6 sm:p-8">
                            <h3 className="text-xl font-bold mb-4">Direct WhatsApp Contact</h3>
                            <p className="text-gray-300 mb-6">
                                Need to chat immediately? Click below to reach me directly on WhatsApp.
                            </p>
                            <a
                                href={`https://wa.me/6287810280556?text=Hello%20Ramadhan,%20I%20would%20like%20to%20discuss%20something%20with%20you.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" className="mr-2" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
                    © {new Date().getFullYear()} Portfolio Adi Ramadhan.
                </div>
            </div>
        </section>
    )
}