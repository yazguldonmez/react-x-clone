import Button from "~/components/button";

export default function Premium() {
    return (
        <section className="bg-black mb-4 rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]">
            <h6 className="font-extrabold text-xl">
                Subscribe to Premium
            </h6>
            <p className=" leading-6 text-[15px]">
                Subscribe to unlock new features and if eligible, receive a share of revenue.
            </p>
            <div className="self-start">
                <Button>Subscribe</Button>
            </div>
        </section >
    )
}