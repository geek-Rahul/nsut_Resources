import TextGenerateEffect from '@/components/shared/TextGenerateEffect'
import dynamic from 'next/dynamic'
import React from 'react'
const GpaCalculator = dynamic(() => import('@/app/_sections/GpaCalculator'), {
    ssr: false,
})

const GPA = () => {
    return (
        <div className="container mx-auto w-full">
            <div className="mx-auto flex w-full max-w-md py-4 flex-col items-center gap-4 text-white md:max-w-screen-sm xl:max-w-screen-lg 2xl:max-w-screen-2xl">
                <TextGenerateEffect
                    words="Calculate Your GPA With Our Customizable GPA Calculator!"
                    className="text-center text-lg tracking-tight text-white selection:bg-gray-500 md:text-2xl md:tracking-normal lg:text-3xl"
                />
                <h2 className="w-full text-center text-lg font-light text-gray-400 md:text-xl">
                    Ensure you enter the{' '}
                    <strong className="font-bold text-white">
                        credit points
                    </strong>{' '}
                    as listed on your transcript (log in to imsnsit.org,
                    navigate to the examination section, and download your
                    transcript). For example, use values like 24, 28, 32, 40,
                    etc. Do not confuse these with{' '}
                    <strong className="font-bold text-white">
                        grade points
                    </strong>{' '}
                    (e.g., 7, 8, 9). You may ignore subjects with 0 credit
                    points.
                </h2>
                <GpaCalculator />
            </div>
        </div>
    )
}

export default GPA
