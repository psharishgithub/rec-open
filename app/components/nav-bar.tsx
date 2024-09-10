'use client'

import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";


export default function Header() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md w-full">
            <div className="flex justify-between items-center p-4 md:p-5 text-lg md:text-xl max-w-full mx-auto">
                <p className="text-2xl md:text-3xl font-bold">/open-space</p>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <FaDiscord className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400 cursor-pointer transition-colors" />
                    <Link href={"https://github.com/psharishgithub/rec-open-space"} passHref>
                        <FaGithub className="w-5 h-5 md:w-6 md:h-6 hover:text-gray-400 cursor-pointer transition-colors" />
                    </Link>
                
                    
                </div>
            </div>
        </header>
    );
}
