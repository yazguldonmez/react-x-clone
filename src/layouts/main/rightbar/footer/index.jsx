import { PopoverButton, PopoverPanel } from "@headlessui/react"
import { Popover } from "@headlessui/react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Terms of Service</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Privacy Policy</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Cookie Policy</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Imprint</Link>
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Accessibility</Link>
            <Popover className="relative leading-4 ">
                <PopoverButton
                    className="text-[#71767b] outline-none leading-4 text-[13px] hover:underline inline-flex items-center">
                    More
                    <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
                        <path
                            fill="currentColor"
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                    </svg>
                </PopoverButton>
                <PopoverPanel></PopoverPanel>
            </Popover>  
            <Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">© 2024 X Corp.</Link>
        </footer>
    )
}