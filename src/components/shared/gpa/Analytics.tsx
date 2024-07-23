import React from 'react'
import { SubjectCredits } from '@/types'
import { calculateAnalytics } from '@/lib/utils'
import CGPA from './CGPA'
import SGPA from './SGPA'
import AdditionalDetails from './AdditionalDetails'

const Analytics = ({ subjects }: { subjects: SubjectCredits[] }) => {
    const analytics = calculateAnalytics(subjects)
    return (
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-2.5 rounded-lg border border-gray-800 p-4">
            <h1 className="w-full text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Analytics
            </h1>
            <div className="relative w-full max-w-screen-sm space-y-4 overflow-hidden rounded-xl p-2 md:space-y-6">
                <CGPA analytics={analytics} />
                <SGPA analytics={analytics} />
                <AdditionalDetails analytics={analytics} />
            </div>
        </div>
    )
}

export default Analytics
 