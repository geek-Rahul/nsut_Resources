'use client'
import Analytics from '@/components/shared/gpa/Analytics'
import FormSubmitBtn from '@/components/shared/gpa/FormSubmitBtn'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSubjects } from '@/hooks/useSubjects'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'
const SubjectListCard = dynamic(
    () => import('@/components/shared/gpa/SubjectListCard')
)
const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div className={cn('flex w-full flex-col space-y-2', className)}>
            {children}
        </div>
    )
}
const SubjectManager: React.FC = () => {
    const { subjects, addSubject, removeSubject, toggleSubjectSelection } =
        useSubjects()
    const [subjectDetails, setSubjectDetails] = useState({
        name: '',
        credits: '',
        semester: '',
    })
    const [error, setError] = useState('')
    const [isUpdatingSubject, setIsUpdatingSubject] = useState('')

    const nameInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isUpdatingSubject) {
            const subject = subjects.find(
                (subject) => subject.id === isUpdatingSubject
            )
            if (subject) {
                setSubjectDetails({
                    name: subject.subjectName,
                    credits: (subject.credits * 4).toString(),
                    semester: subject.semester?.toString() || '',
                })
            }
            nameInputRef.current?.focus()
        }
    }, [isUpdatingSubject])

    const handleAddSubject = () => {
        const { name, credits, semester } = subjectDetails
        const parsedCredits = parseInt(credits)
        const parsedSemester = parseInt(semester)

        if (!credits || isNaN(parsedCredits)) {
            setError('Please enter a valid number for credits')
            return
        } else if (parsedCredits < 1 || parsedCredits > 40) {
            setError('Please enter a number between 1 and 40')
            return
        } else if (parsedCredits % 4 !== 0) {
            setError('Please enter a multiple of 4')
            return
        } else if (!name) {
            setError('Please enter a subject name')
            return
        } else if (
            !semester ||
            isNaN(parsedSemester) ||
            parsedSemester < 1 ||
            parsedSemester > 8
        ) {
            setError('Please enter a valid semester between 1 and 8')
            return
        } else if (isUpdatingSubject.length > 0) {
            removeSubject(isUpdatingSubject)
        }

        addSubject({
            subjectName: name,
            credits: parsedCredits / 4,
            isSelected: true,
            semester: parsedSemester,
            id: crypto.randomUUID(),
        })

        setIsUpdatingSubject('')
        setSubjectDetails({ name: '', credits: '', semester: '' })
        setError('')
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSubjectDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }))
    }

    return (
        <>
            <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    handleAddSubject()
                }}
                className="flex w-full max-w-2xl flex-col items-stretch justify-center md:gap-2"
            >
                <LabelInputContainer className="mb-4">
                    <Label
                        className="text-sm text-white md:text-base"
                        htmlFor="subjectName"
                    >
                        Subject Name
                    </Label>
                    <Input
                        id="subjectName"
                        placeholder="E.x : Micro Electronics"
                        type="text"
                        ref={nameInputRef}
                        name="name"
                        minLength={1}
                        value={subjectDetails.name}
                        onChange={handleChange}
                        maxLength={50}
                        className="bg-neutral-900 text-white"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label
                        className="text-sm text-white md:text-base"
                        htmlFor="credits"
                    >
                        Credits
                    </Label>
                    <Input
                        id="credits"
                        placeholder="E.x : 28"
                        type="text"
                        name="credits"
                        value={subjectDetails.credits}
                        onChange={handleChange}
                        className="bg-neutral-900 text-white"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label
                        className="text-sm text-white md:text-base"
                        htmlFor="semester"
                    >
                        Semester
                    </Label>
                    <Input
                        id="semester"
                        placeholder="E.x : 4"
                        type="text"
                        name="semester"
                        value={subjectDetails.semester}
                        onChange={handleChange}
                        className="bg-neutral-900 text-white"
                    />
                </LabelInputContainer>
                <p className="text-red-500">{error}</p>
                <FormSubmitBtn
                    buttonText={
                        isUpdatingSubject.length > 0
                            ? 'Update Subject'
                            : 'Add Subject'
                    }
                />
            </form>

            <div
                role="grid"
                className="grid w-full grid-cols-1 place-content-center place-items-stretch gap-3.5 p-2.5 outline outline-gray-500 md:grid-cols-2 md:p-4 xl:grid-cols-3 2xl:grid-cols-4"
            >
                {subjects?.map((subject) => (
                    <span
                        key={subject.id}
                        className="col-span-1 w-full md:max-w-80"
                    >
                        <SubjectListCard
                            subject={subject}
                            removeSubject={removeSubject}
                            toggleSubjectSelection={toggleSubjectSelection}
                            setIsUpdatingSubject={setIsUpdatingSubject}
                        />
                    </span>
                ))}
                {subjects?.length === 0 && (
                    <p className="col-span-full w-full text-center text-lg text-gray-300">
                        No subjects added yet
                    </p>
                )}
            </div>
            <Analytics subjects={subjects} />
        </>
    )
}

export default SubjectManager
