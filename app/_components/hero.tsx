import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="py-18 py-20 pt-0">
            <div className="pt-28">
                <h1 className="text-5xl font-light text-center lg:max-w-[900px] leading-tight mx-auto font-aeonik">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, alias!</h1>
                <h2 className="my-6 text-base font-light text-[#F5F5F5] sm:px-0 leading-light lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[800px] mx-auto font-aeonik">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia laudantium porro ducimus eos quas?</h2>
                <div className="items-center w-full mx-auto space-x-3 md:mb-0 xl:mb-9 max-w-max">
                    <Button size="sm" className="primary-button group inline-flex transition ease-in-out duration-150 hover:bg-secondary text-primary border border-accent">
                        Get Started
                        <span className="mx-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">→</span>
                    </Button>
                    <Button size="sm" className="bg-transparent hover:bg-transparent group inline-flex transition ease-in-out duration-150 text-primary">
                        View on Github
                        <span className="mx-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">→</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}