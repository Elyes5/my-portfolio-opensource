function FooterComponent() {
    return (
        <footer className="relative bg-gradient-to-b from-neutral-900 via-zinc-900 to-black border-t border-neutral-800/40 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle floating orbs */}
                <div className="absolute top-10 left-1/4 w-32 h-32 bg-neutral-800/20 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
                <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-zinc-800/20 rounded-full filter blur-2xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-neutral-700/15 rounded-full filter blur-xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
            </div>

            <div className="relative max-w-7xl mx-auto p-8 sm:p-12">
                {/* Main content grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Social Section */}
                    <div className="group">
                        <div className="text-center md:text-left">
                            <h2 className="mb-8 text-lg font-bold uppercase bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-wider relative">
                                Social
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-neutral-400 to-transparent rounded-full group-hover:w-20 transition-all duration-500" />
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/elyes-saddem/"
                                        className="flex items-center justify-center md:justify-start gap-3 text-neutral-300 hover:text-white transition-all duration-300 group/link p-3 rounded-xl hover:bg-neutral-800/30 backdrop-blur-sm"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                                            <i className="devicon-linkedin-plain text-white text-lg"></i>
                                        </div>
                                        <span className="font-medium text-base">LinkedIn</span>
                                        <div className="w-0 group-hover/link:w-2 h-0.5 bg-neutral-400 transition-all duration-300 ml-auto" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.github.com/Elyes3"
                                        className="flex items-center justify-center md:justify-start gap-3 text-neutral-300 hover:text-white transition-all duration-300 group/link p-3 rounded-xl hover:bg-neutral-800/30 backdrop-blur-sm"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                                            <i className="devicon-github-plain text-white text-lg"></i>
                                        </div>
                                        <span className="font-medium text-base">GitHub</span>
                                        <div className="w-0 group-hover/link:w-2 h-0.5 bg-neutral-400 transition-all duration-300 ml-auto" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="group">
                        <div className="text-center md:text-left">
                            <h2 className="mb-8 text-lg font-bold uppercase bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-wider relative">
                                Contact
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-neutral-400 to-transparent rounded-full group-hover:w-20 transition-all duration-500" />
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-neutral-300 p-3 rounded-xl bg-neutral-800/20 backdrop-blur-sm border border-neutral-700/30">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium text-base">(+33) 74 31 63 383</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-neutral-300 p-3 rounded-xl bg-neutral-800/20 backdrop-blur-sm border border-neutral-700/30">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium text-sm">elyes.saddem@etudiant-isi.utm.tn</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="group">
                        <div className="text-center md:text-left">
                            <h2 className="mb-8 text-lg font-bold uppercase bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-wider relative">
                                Certifications
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-neutral-400 to-transparent rounded-full group-hover:w-20 transition-all duration-500" />
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="https://www.credly.com/users/elyes-saddem/badges"
                                        className="flex items-center justify-center md:justify-start gap-3 text-neutral-300 hover:text-white transition-all duration-300 group/link p-3 rounded-xl hover:bg-neutral-800/30 backdrop-blur-sm"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900/50 to-blue-800/50 flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                                            <img src="images/IBM.svg" alt="ibm" className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-base">IBM</span>
                                        <div className="w-0 group-hover/link:w-2 h-0.5 bg-neutral-400 transition-all duration-300 ml-auto" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.credly.com/badges/b1202e62-3a59-43b9-843d-fa2f076dadce/linked_in_profile"
                                        className="flex items-center justify-center md:justify-start gap-3 text-neutral-300 hover:text-white transition-all duration-300 group/link p-3 rounded-xl hover:bg-neutral-800/30 backdrop-blur-sm"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-900/50 to-orange-800/50 flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                                            <img src="images/AWS.svg" alt="aws" className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-base">AWS</span>
                                        <div className="w-0 group-hover/link:w-2 h-0.5 bg-neutral-400 transition-all duration-300 ml-auto" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.credly.com/users/elyes-saddem/badges"
                                        className="flex items-center justify-center md:justify-start gap-3 text-neutral-300 hover:text-white transition-all duration-300 group/link p-3 rounded-xl hover:bg-neutral-800/30 backdrop-blur-sm"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900/50 to-blue-700/50 flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                                            <img src="images/azure.svg" alt="azure" className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-base">Azure</span>
                                        <div className="w-0 group-hover/link:w-2 h-0.5 bg-neutral-400 transition-all duration-300 ml-auto" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Elegant divider */}
                <div className="flex justify-center mb-12">
                    <div className="relative w-48 h-px">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300 to-transparent animate-pulse" style={{animationDuration: '3s'}} />
                    </div>
                </div>

                {/* Bottom section */}
                <div className="text-center space-y-6">
                    {/* Tech stack */}
                    <div className="flex justify-center items-center gap-2 flex-wrap">
            <span className="text-neutral-400 text-sm font-medium tracking-wider uppercase">
              Created with
            </span>
                        <div className="flex items-center gap-3 bg-neutral-800/30 px-4 py-2 rounded-full border border-neutral-700/40 backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 flex items-center justify-center group hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <i className="devicon-react-original text-cyan-400 text-lg"></i>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-900/50 to-teal-800/50 flex items-center justify-center group hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <i className="devicon-tailwindcss-plain text-teal-400 text-lg"></i>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-900/50 to-green-800/50 flex items-center justify-center group hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <i className="devicon-spring-plain text-green-400 text-lg"></i>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-neutral-400 text-sm">
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            <span>© 2025</span>
                            <span className="text-neutral-500">•</span>
                            <span>Made by</span>
                            <a
                                href="https://elyessaddem.me/"
                                className="text-neutral-200 hover:text-white font-semibold transition-colors duration-300 relative group"
                            >
                                Elyes Saddem
                                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-600 transition-all duration-300" />
                            </a>
                            <span className="text-neutral-500">•</span>
                            <span>All Rights Reserved</span>
                        </div>
                    </div>

                    {/* Subtle bottom accent */}
                    <div className="flex justify-center">
                        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </footer>
    );
}

export default FooterComponent;