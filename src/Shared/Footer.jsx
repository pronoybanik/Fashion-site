
const Footer = () => {
    return (
        <div>

            <footer aria-label="Site Footer" className="bg-black">
                <div
                    className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
                >
                    

                    <div
                        className="grid grid-cols-1 gap-8 pt-8  border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
                    >
                        <div>
                            <p className="font-medium text-white">Services</p>

                            <nav aria-label="Footer Navigation - Services" className="mt-6">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            1on1 Coaching
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Company Review
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Accounts Review
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            HR Consulting
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            SEO Optimisation
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-white">Company</p>

                            <nav aria-label="Footer Navigation - Company" className="mt-6">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Meet the Team
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Accounts Review
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-white">Helpful Links</p>

                            <nav aria-label="Footer Navigation - Company" className="mt-6">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Contact
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            FAQs
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Live Chat
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-white">Legal</p>

                            <nav aria-label="Footer Navigation - Legal" className="mt-6">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Accessibility
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Returns Policy
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Refund Policy
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">
                                            Hiring Statistics
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <p className="text-xs text-white">
                        &copy; 2022. Company Name. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;