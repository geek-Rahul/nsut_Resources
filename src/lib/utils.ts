import { Analytics, CreditAnalytics, Ranking, SubjectCredits } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const calculateGPA = (subjects: SubjectCredits[]): number => {
    const totalCredits = subjects.reduce(
        (acc, subject) => acc + subject.credits,
        0
    )
    const gpa = totalCredits / (subjects.length * 10)
    return isNaN(gpa) ? 0 : parseFloat((gpa * 10).toFixed(2))
}

const calculateCreditFrequency = (
    subjects: SubjectCredits[]
): Record<number, number> => {
    const creditFrequency: Record<number, number> = {}
    subjects.forEach((subject) => {
        creditFrequency[subject.credits] =
            (creditFrequency[subject.credits] || 0) + 1
    })
    return creditFrequency
}

const calculateSemesterGPA = (
    subjects: SubjectCredits[]
): Record<number, number> => {
    const semesterCredits: Record<number, number> = {}
    const semesterSubjectCounts: Record<number, number> = {}

    subjects.forEach((subject) => {
        if (subject.semester !== undefined) {
            semesterCredits[subject.semester] =
                (semesterCredits[subject.semester] || 0) + subject.credits
            semesterSubjectCounts[subject.semester] =
                (semesterSubjectCounts[subject.semester] || 0) + 1
        }
    })

    const semesterGPA: Record<number, number> = {}
    Object.keys(semesterCredits).forEach((semester) => {
        const semesterNumber = parseInt(semester)
        const totalSemesterCredits = semesterCredits[semesterNumber]
        const subjectCount = semesterSubjectCounts[semesterNumber]
        const semesterGPAValue = totalSemesterCredits / (subjectCount * 10)
        semesterGPA[semesterNumber] = isNaN(semesterGPAValue)
            ? 0
            : parseFloat((semesterGPAValue * 10).toFixed(2))
    })

    return semesterGPA
}

const calculateCreditAnalytics = (
    subjects: SubjectCredits[]
): CreditAnalytics => {
    const totalSubjects = subjects.length
    const totalCreditsSecured = totalSubjects * 4
    const totalCreditPoints = totalSubjects * 40
    const totalCreditPointsEarned = subjects.reduce(
        (acc, subject) => acc + subject.credits * 4,
        0
    )

    return {
        totalCreditPointsEarned,
        totalCreditsPoints: totalCreditPoints,
        totalCreditsSecured,
    }
}

const calculateTotalSemesters = (subjects: SubjectCredits[]): number => {
    const uniqueSemesters = new Set(subjects.map((subject) => subject.semester))
    return uniqueSemesters.size
}

const calculateTotalSubjects = (subjects: SubjectCredits[]): number => {
    return subjects.length
}

export const calculateAnalytics = (subjects: SubjectCredits[]): Analytics => {
    const gpaBeforeDrop = calculateGPA(subjects)
    const selectedSubjects = subjects.filter((subject) => subject.isSelected)
    const gpaAfterDrop = calculateGPA(selectedSubjects)
    const creditFrequency = calculateCreditFrequency(selectedSubjects)
    const semesterGPA = calculateSemesterGPA(selectedSubjects)
    const creditAnalytics = calculateCreditAnalytics(subjects)
    const totalSemesters = calculateTotalSemesters(subjects)
    const totalSubjects = calculateTotalSubjects(subjects)
    const rankingAfterDrop = getBadgeDetails(gpaAfterDrop)
    const rankingBeforeDrop = getBadgeDetails(gpaBeforeDrop)

    return {
        gpaBeforeDrop,
        gpaAfterDrop,
        creditFrequency,
        semesterGPA,
        rankingAfterDrop: rankingAfterDrop,
        rankingBeforeDrop: rankingBeforeDrop,
        totalSemesters,
        totalSubjects,
        creditAnalytics,
    }
}

// Function to get class names based on credit value
export const getCreditClassNames = (credit: number) => {
    switch (credit) {
        case 10:
            return 'bg-green-950/45 text-green-500' // Very Good
        case 9:
            return 'bg-green-800/45 text-green-400' // Very Good
        case 8:
            return 'bg-blue-950/45 text-blue-500' // Good
        case 7:
            return 'bg-blue-800/45 text-blue-400' // Good
        case 6:
            return 'bg-purple-950/45 text-purple-500' // Average
        case 5:
            return 'bg-purple-800/45 text-purple-400' // Average
        case 4:
            return 'bg-yellow-950/45 text-yellow-500' // Below Average
        case 3:
            return 'bg-yellow-800/45 text-yellow-400' // Below Average
        case 2:
            return 'bg-red-950/45 text-red-500' // Poor
        case 1:
            return 'bg-red-800/45 text-red-400' // Poor
        default:
            return 'bg-gray-950/45 text-gray-500' // Default
    }
}
export const getBadgeDetails = (gpa: number): Ranking => {
    if (gpa >= 9.7) {
        return {
            title: 'Radiant',
            imageSrc: '/Radiant_Rank.png',
        }
    } else if (gpa >= 9.3) {
        return {
            title: 'Immortal 3',
            imageSrc: '/Immortal_3_Rank.png',
        }
    } else if (gpa >= 9.0) {
        return {
            title: 'Immortal 2',
            imageSrc: '/Immortal_2_Rank.png',
        }
    } else if (gpa >= 8.7) {
        return {
            title: 'Immortal 1',
            imageSrc: '/Immortal_1_Rank.png',
        }
    } else if (gpa >= 8.4) {
        return {
            title: 'Ascendant 3',
            imageSrc: '/Ascendant_3_Rank.png',
        }
    } else if (gpa >= 8.2) {
        return {
            title: 'Ascendant 2',
            imageSrc: '/Ascendant_2_Rank.png',
        }
    } else if (gpa >= 7.9) {
        return {
            title: 'Ascendant 1',
            imageSrc: '/Ascendant_1_Rank.png',
        }
    } else if (gpa >= 7.6) {
        return {
            title: 'Diamond 3',
            imageSrc: '/Diamond_3_Rank.png',
        }
    } else if (gpa >= 7.4) {
        return {
            title: 'Diamond 2',
            imageSrc: '/Diamond_2_Rank.png',
        }
    } else if (gpa >= 7.2) {
        return {
            title: 'Diamond 1',
            imageSrc: '/Diamond_1_Rank.png',
        }
    } else if (gpa >= 7) {
        return {
            title: 'Platinum 3',
            imageSrc: '/Platinum_3_Rank.png',
        }
    } else if (gpa >= 6.8) {
        return {
            title: 'Platinum 2',
            imageSrc: '/Platinum_2_Rank.png',
        }
    } else if (gpa >= 6.6) {
        return {
            title: 'Platinum 1',
            imageSrc: '/Platinum_1_Rank.png',
        }
    } else if (gpa >= 6.4) {
        return {
            title: 'Gold 3',
            imageSrc: '/Gold_3_Rank.png',
        }
    } else if (gpa >= 6.2) {
        return {
            title: 'Gold 2',
            imageSrc: '/Gold_2_Rank.png',
        }
    } else if (gpa >= 6) {
        return {
            title: 'Gold 1',
            imageSrc: '/Gold_1_Rank.png',
        }
    } else if (gpa >= 5.8) {
        return {
            title: 'Silver 3',
            imageSrc: '/Silver_3_Rank.png',
        }
    } else if (gpa >= 5.6) {
        return {
            title: 'Silver 2',
            imageSrc: '/Silver_2_Rank.png',
        }
    } else if (gpa >= 5.4) {
        return {
            title: 'Silver 1',
            imageSrc: '/Silver_1_Rank.png',
        }
    } else if (gpa >= 5.2) {
        return {
            title: 'Bronze 3',
            imageSrc: '/Bronze_3_Rank.png',
        }
    } else if (gpa >= 5) {
        return {
            title: 'Bronze 2',
            imageSrc: '/Bronze_2_Rank.png',
        }
    } else if (gpa >= 4.8) {
        return {
            title: 'Bronze 1',
            imageSrc: '/Bronze_1_Rank.png',
        }
    } else if (gpa >= 4.6) {
        return {
            title: 'Iron 3',
            imageSrc: '/Iron_3_Rank.png',
        }
    } else if (gpa >= 4.4) {
        return {
            title: 'Iron 2',
            imageSrc: '/Iron_2_Rank.png',
        }
    } else {
        return {
            title: 'Iron 1',
            imageSrc: '/Iron_1_Rank.png',
        }
    }
}
