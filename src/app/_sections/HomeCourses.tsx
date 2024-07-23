'use client'
import { Subject } from '@/types'
import dynamic from 'next/dynamic'

import RecentlyViewedTab from '@/components/shared/RecentlyViewedTab'
import SemesterDropdown from '@/components/shared/SemesterDropdown'
import { useCourseSelection } from '@/hooks/useCourseSelection'
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed'
import { useRouter } from 'next/navigation'
import Loading from '../loading'
const CourseData = dynamic(() => import('@/components/shared/CourseData'), {
    loading: () => <Loading />,
})

const semOptions = [
    { value: 'Semester-1', label: 'Semester-1' },
    { value: 'Semester-2', label: 'Semester-2' },
    { value: 'Semester-3', label: 'Semester-3' },
    { value: 'Semester-4', label: 'Semester-4' },
    { value: 'Semester-5', label: 'Semester-5' },
    { value: 'Semester-6', label: 'Semester-6' },
    // { value: "Semester-7", label: "Semester-7" },
    // { value: "Semester-8", label: "Semester-8" },
]

const HomeCourses = () => {
    const {
        semester,
        setSemester,
        subject,
        setSubject,
        course,
        courseOptions,
    } = useCourseSelection()
    const router = useRouter()
    const { recentlyViewed, saveToLocalStorage } = useRecentlyViewed()
    return (
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 md:max-w-screen-sm lg:gap-6 xl:max-w-screen-lg">
            <div className="relative z-10 flex w-full flex-col items-center justify-center gap-5 md:w-4/5 md:flex-row">
                <SemesterDropdown
                    title="Select Semester"
                    subtitle="Semesters"
                    options={semOptions}
                    currentValue={semester}
                    onChange={setSemester}
                />

                {courseOptions.length > 0 && (
                    <SemesterDropdown
                        title="Select Course"
                        subtitle="Courses"
                        options={courseOptions}
                        currentValue={subject}
                        onChange={setSubject}
                    />
                )}
            </div>
            {subject.length > 0 && courseOptions.length > 0 && course && (
                <CourseData
                    course={course as Subject}
                    subject={subject}
                    saveToLocalStorage={saveToLocalStorage}
                />
            )}
            <RecentlyViewedTab
                list={recentlyViewed}
                saveToLocalStorage={saveToLocalStorage}
            />
            <button
                className="rounded-lg bg-neutral-800 px-5 py-3.5 text-white hover:bg-white hover:text-black"
                onClick={() => router.push('/gpacalculator')}
            >
                Check out GPA Calculator
            </button>
        </div>
    )
}

export default HomeCourses
