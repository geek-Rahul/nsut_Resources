import { cn } from '@/lib/utils'
import { Analytics } from '@/types'
import React from 'react'
const GridItem = ({
    title,
    value,
}: {
    title: string
    value: string | number
}) => {
    return (
        <span
            className={cn(
                'col-span-1 flex w-full flex-col items-center justify-between rounded-lg bg-cyan-950 px-4 py-2'
            )}
        >
            <h3
                className={cn(
                    'bg-transparent text-sm font-bold leading-4 text-cyan-200'
                )}
            >
                {title}
            </h3>
            <p>{value}</p>
        </span>
    )
}
const AdditionalDetails = ({ analytics }: { analytics: Analytics }) => {
    return (
        <>
            <hr className="w-full border-2 border-gray-800" />
            <h1 className="w-full text-center text-2xl font-bold text-white">
                Additional Details
            </h1>
            <div className="grid w-full grid-cols-2 place-content-center place-items-stretch gap-2.5 sm:grid-cols-2 md:grid-cols-3">
                <GridItem
                    title="Total Semesters"
                    value={analytics.totalSemesters}
                />
                <GridItem
                    title="Total Subjects"
                    value={analytics.totalSubjects}
                />
                <GridItem
                    title="Credit Secured"
                    value={analytics.creditAnalytics.totalCreditsSecured}
                />
                <GridItem
                    title="Credit Points Earned"
                    value={analytics.creditAnalytics.totalCreditPointsEarned}
                />
                <GridItem
                    title="Total Credit Points"
                    value={analytics.creditAnalytics.totalCreditsPoints}
                />
                <GridItem
                    title="CP / Total CP"
                    value={
                        (
                            (analytics.creditAnalytics.totalCreditPointsEarned /
                                Math.max(
                                    1,
                                    analytics.creditAnalytics.totalCreditsPoints
                                )) *
                            100
                        ).toFixed(2) + ' %'
                    }
                />
            </div>
        </>
    )
}

export default AdditionalDetails
