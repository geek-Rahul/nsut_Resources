interface YoutubeLink {
    unit: string | number
    link: string
}

interface Subject {
    subjectName: string
    syllabusLink?: string
    driveLink?: string
    youtubeLink?: YoutubeLink[]
}

interface SemesterItem {
    id: number
    Semester: string
    items: Subject[]
}
interface SemesterDropdownProps {
    title: string
    subtitle: string
    options: { value: string; label: string }[] // options is an array of objects with value and label
    currentValue: string // Type for the currently selected value
    onChange: (value: string) => void // onChange function type
}

interface SubjectCredits {
    subjectName: string
    credits: number
    isSelected: boolean
    id: string
    semester: number
}
type Ranking = {
    title: string
    imageSrc: string
}

type CreditAnalytics = {
    totalCreditPointsEarned: number
    totalCreditsPoints: number
    totalCreditsSecured: number
}

interface Analytics {
    gpaBeforeDrop: number
    gpaAfterDrop: number
    creditFrequency: Record<number, number>
    semesterGPA: Record<number, number>
    rankingAfterDrop: Ranking
    rankingBeforeDrop: Ranking
    totalSemesters: number
    totalSubjects: number
    creditAnalytics: CreditAnalytics
}

export type {
    YoutubeLink,
    Subject,
    SemesterItem,
    SemesterDropdownProps,
    SubjectCredits,
    Analytics,
    Ranking,
    CreditAnalytics,
}
