import { useState, useEffect, useMemo } from 'react'
import { SemesterItem, Subject } from '@/types'
import Semesters from '@/utils/Semesters'

type Options = {
    value: string
    label: string
}

export const useCourseSelection = () => {
    const [semester, setSemester] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [course, setCourse] = useState<Subject | {}>({} as Subject)

    const courseOptions = useMemo(() => {
        if (semester.length > 0) {
            let chosenSem: SemesterItem = Semesters.find(
                (sem) => sem.Semester === semester
            )!
            return chosenSem.items.map((item) => ({
                value: item.subjectName,
                label: item.subjectName,
            }))
        }
        return []
    }, [semester])

    useEffect(() => {
        if (semester.length > 0) {
            setSubject('')
            let chosenSem: SemesterItem = Semesters.find(
                (sem) => sem.Semester === semester
            )!
            let options: Options[] = []
            chosenSem.items.forEach((item) => {
                options.push({
                    value: item.subjectName,
                    label: item.subjectName,
                })
            })
        }
    }, [semester])

    useEffect(() => {
        if (subject.length > 0) {
            let chosenSem: Subject = Semesters.find(
                (sem) => sem.Semester === semester
            )!.items.find((item) => item.subjectName === subject)!
            setCourse(chosenSem)
        }
    }, [subject])

    return {
        semester,
        setSemester,
        subject,
        setSubject,
        course,
        courseOptions,
    }
}
