import { cn, getBadgeDetails, getCreditClassNames } from '@/lib/utils'
import { Analytics } from '@/types'
import Image from 'next/image'
import React from 'react'
const GpaBadge = ({
    imageSrc,
    title,
    gpa,
    gpaText,
}: {
    imageSrc: string
    title: string
    gpa: number
    gpaText: string
}) => {
    return (
        <span className="flex flex-row items-center justify-start gap-2.5">
            <div
                className={cn(
                    'flex w-fit max-w-fit justify-center overflow-hidden rounded-lg'
                )}
            >
                <Image
                    src={imageSrc}
                    alt="GPA Badge"
                    width={64}
                    height={64}
                    title={title}
                    className="object-cover object-center brightness-125 contrast-150 saturate-200"
                />
            </div>
            <h3 className="w-fit text-center text-xl font-normal text-white">
                {gpaText} : {gpa}
            </h3>
        </span>
    )
}
const CGPA = ({ analytics }: { analytics: Analytics }) => {
    return (
        <>
            <div className="flex flex-col gap-4 md:gap-0 items-stretch justify-center md:flex-row md:justify-between">
                <GpaBadge
                    imageSrc={analytics.rankingBeforeDrop.imageSrc}
                    title={analytics.rankingBeforeDrop.title}
                    gpa={analytics.gpaBeforeDrop}
                    gpaText="Before Drop"
                />
                <GpaBadge
                    imageSrc={analytics.rankingAfterDrop.imageSrc}
                    title={analytics.rankingAfterDrop.title}
                    gpa={analytics.gpaAfterDrop}
                    gpaText="After Drop"
                />
            </div>
            <div className="grid w-full grid-cols-2 place-content-center place-items-stretch gap-2.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {Object.entries(analytics.creditFrequency).map(
                    ([credit, frequency]) => (
                        <span
                            key={credit}
                            className={cn(
                                'col-span-1 flex w-full flex-col items-center rounded-lg px-4 py-2',
                                getCreditClassNames(Number(credit))
                            )}
                        >
                            <h3
                                className={cn(
                                    'text-lg font-bold leading-4',
                                    getCreditClassNames(Number(credit)),
                                    'bg-transparent'
                                )}
                            >
                                Credit : {credit}
                            </h3>
                            <p>{frequency}</p>
                        </span>
                    )
                )}
            </div>
        </>
    )
}

export default CGPA
