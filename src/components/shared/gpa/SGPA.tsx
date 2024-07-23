import { cn, getBadgeDetails, getCreditClassNames } from '@/lib/utils'
import { Analytics } from '@/types'
import Image from 'next/image'
import React from 'react'

const SGPA = ({ analytics }: { analytics: Analytics }) => {
    return (
        <>
            <hr className="w-full border-2 border-gray-800" />
            <h1 className="w-full text-center text-2xl font-bold text-white">
                SGPA
            </h1>

            <div className="grid w-full grid-cols-2 place-content-center place-items-stretch gap-2.5 sm:grid-cols-2 md:grid-cols-3">
                {Object.entries(analytics.semesterGPA).map(
                    ([semester, frequency]) => {
                        const { imageSrc, title } = getBadgeDetails(
                            Number(frequency)
                        )
                        const classes = getCreditClassNames(
                            Math.floor(frequency)
                        )
                        return (
                            <span
                                key={semester}
                                className={cn(
                                    'col-span-1 flex w-full flex-row items-center justify-start gap-3 rounded-lg px-1 py-2',
                                    classes
                                )}
                            >
                                <div
                                    className={cn(
                                        'flex w-fit max-w-fit justify-center overflow-hidden rounded-lg'
                                    )}
                                >
                                    <Image
                                        src={imageSrc}
                                        alt="GPA Badge"
                                        width={36}
                                        height={36}
                                        title={title}
                                        className="object-cover object-center brightness-125 contrast-150 saturate-200"
                                    />
                                </div>
                                <span>
                                    <h3
                                        className={cn(
                                            'text-lg font-bold leading-4',
                                            classes,
                                            'bg-transparent'
                                        )}
                                    >
                                        SEM : {semester}
                                    </h3>
                                    <p>{frequency}</p>
                                </span>
                            </span>
                        )
                    }
                )}
            </div>
        </>
    )
}

export default SGPA
