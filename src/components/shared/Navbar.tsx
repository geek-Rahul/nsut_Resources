import Image from 'next/image'
import { TypewriterEffectSmooth } from './TypewriterEffect'

const Navbar = () => {
    return (
        <nav className="relative z-10 mx-auto flex w-full max-w-xs items-center justify-between rounded-md bg-zinc-950 bg-opacity-75 px-4 py-2 transition-all duration-300 hover:shadow-md hover:shadow-cyan-400 hover:outline-double hover:outline-2 hover:outline-cyan-400 sm:max-w-md lg:max-w-2xl lg:py-0">
            <Image
                src={'/nsuticon.png'}
                alt="logo"
                width={50}
                height={50}
                className="brightness-200 saturate-0 transition-transform duration-1000 hover:rotate-180 hover:saturate-200 xl:hover:scale-105"
            />
            <TypewriterEffectSmooth
                cursorClassName="hidden"
                words={[
                    {
                        text: 'Ecam',
                        className: 'text-xl md:text-4xl font-bold text-white',
                    },
                    {
                        text: 'Resources',
                        className:
                            'text-xl md:text-4xl font-bold text-cyan-400',
                    },
                ]}
            />
            <Image
                src={'/nsuticon.png'}
                alt="logo"
                width={50}
                height={50}
                className="brightness-200 saturate-0 transition-transform duration-1000 hover:rotate-180 hover:saturate-200 xl:hover:scale-105"
            />
        </nav>
    )
}

export default Navbar
