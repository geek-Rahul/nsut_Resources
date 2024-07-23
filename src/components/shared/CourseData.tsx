import { Subject } from '@/types'
import Button from './Button'
const beautifyTextYoutube = (unit: number | string, subject: string) => {
    {
        return unit
            ? `${subject} unit - ${unit} playlist`
            : `${subject} full playlist`
    }
}
const CourseData = ({
    course,
    subject,
    saveToLocalStorage,
}: {
    course: Subject
    subject: string
    saveToLocalStorage: (key: string, value: string) => void
}) => {
    return (
        <section className="mb-3 w-full max-w-2xl selection:bg-gray-500">
            <div className="container z-10 mt-8 rounded-xl border bg-opacity-20 bg-clip-padding px-5 py-8 shadow-sm shadow-white backdrop-blur-sm backdrop-filter md:mt-10">
                <div className="md:2/3 mx-auto mt-2 flex items-center justify-between sm:justify-evenly md:justify-between lg:w-3/4 xl:w-5/6">
                    <h1 className="text-left text-base font-semibold text-white md:text-xl">{`${subject} Syllabus  `}</h1>

                    <Button
                        href={course.syllabusLink!}
                        onClick={() =>
                            saveToLocalStorage(
                                `${subject} syllabus`,
                                course.syllabusLink!
                            )
                        }
                    />
                </div>
                <div className="md:2/3 mx-auto mt-2 flex items-center justify-between sm:justify-evenly md:justify-between lg:w-3/4 xl:w-5/6">
                    <h1 className="text-left text-base font-semibold text-white md:text-xl">{`${subject} Drive link material  `}</h1>
                    <Button
                        href={course.driveLink!}
                        onClick={() =>
                            saveToLocalStorage(
                                `${subject} drive link`,
                                course.driveLink!
                            )
                        }
                    />
                </div>
                {course.youtubeLink &&
                    course.youtubeLink.map((unit, idx) => {
                        return (
                            <div
                                key={idx + 1}
                                className="md:2/3 mx-auto mt-2 flex items-center justify-between sm:justify-evenly md:justify-between lg:w-3/4 xl:w-5/6"
                            >
                                <h1 className="text-left text-base font-semibold text-white md:text-xl">
                                    {beautifyTextYoutube(unit.unit, subject)}
                                </h1>
                                <Button
                                    href={unit.link!}
                                    onClick={() =>
                                        saveToLocalStorage(
                                            beautifyTextYoutube(
                                                unit.unit,
                                                subject
                                            ),
                                            unit.link!
                                        )
                                    }
                                />
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default CourseData
