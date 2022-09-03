function FooterComponent(){
    return(<footer className="p-4 bg-neutral-900 sm:p-6 dark:bg-gray-900">
    <div className="md:flex md:justify-center md:grow">
        <div className="mb-6 md:mb-0">

        </div>
        <div className="grid grid-cols-1 grow gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="justify-center flex flex-col items-center sm:block">
                <h2 className="mb-6 text-sm font-bold uppercase text-blue-400">Social</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://www.linkedin.com/in/elyes-saddem-249787224/" className="hover:underline text-white sm:text-md md:text-lg text-xs"><i class="devicon-linkedin-plain"></i> Linkedin</a>
                    </li>
                    <li>
                        <a href="https://www.github.com/Elyes5" className="hover:underline text-white sm:text-md md:text-lg text-xs"><i class="devicon-github-plain"></i> GitHub</a>
                    </li>
                </ul>
            </div>
            <div className="justify-center flex flex-col items-center sm:block">
                <h2 className="mb-6 text-sm font-bold text-blue-400 uppercase dark:text-white">CONTACT</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4 text-center sm:text-left">
                        <p className="hover:underline text-white sm:text-md md:text-lg text-xs"><img src="images/phone.svg" alt="phone" className="inline-block" height="20" width="20"/> (+216) 58 079 399</p>
                    </li>
                    <li>
                        <p className="hover:underline text-white sm:text-md md:text-lg text-xs"><img src="images/mail.svg" alt="mail" className="inline-block align-middle" height="20" width="20"/> saddemelyes67@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div className="justify-center flex flex-col items-center sm:block">
                <h2 className="mb-6 text-sm font-bold text-blue-400 uppercase dark:text-white md:text-xl te">CERTIFICATIONS</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://www.credly.com/users/elyes-saddem/badges" className="hover:underline flex items-center text-white sm:text-md md:text-lg text-xs"><img src="images/IBM.svg" alt="ibm" className="inline-block"/> IBM</a>
                    </li>
                </ul>
            </div>
            

        </div>
    </div>
    <div className="flex justify-center mb-6 mt-6">
    <hr className="w-4/12 sm:w-3/12 border-blue-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </div>
    <div className="sm:flex sm:items-center sm:justify-between">
    <div className="flex justify-center items-center min-w-full flex-col">
        <span className="text-sm mb-3 text-white DMMono flex items-center gap-x-2 font-bold">CREATED WITH <i class="devicon-react-original colored text-2xl"></i>&nbsp;<i class="devicon-tailwindcss-plain colored text-2xl"></i>&nbsp;<i class="devicon-spring-plain colored text-2xl"></i></span>
        <span className="text-sm text-white DMMono">© 2022 <a href="https://elyessaddem.me/" className="hover:underline">Made by <span className="text-bold text-blue-400">Elyes Saddem</span></a>. All Rights Reserved.</span>
    </div>
    </div>
</footer>
)
}
export default FooterComponent;