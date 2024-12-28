import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { useAccount } from "~/store/auth/hooks"
import More from "./more"

export default function Account() {

    const account = useAccount()

    return (
        <div className="mt-auto">
            <Popover className="relative">
                <PopoverButton
                    className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center transition-colors outline-none">
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 text-[15px]">
                        <div className="font-bold leading-[20px]">
                            {account.fullName}
                        </div>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                    <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
                        <path
                            fill="currentColor"
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                        />
                    </svg>
                </PopoverButton>
                <PopoverPanel className="absolute bottom-full py-3 w-[300px] overflow-hidden left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
                    <More />
                </PopoverPanel>
            </Popover>
        </div>
    )
}