import { SubjectCredits } from '@/types'
import { cn } from '@/lib/utils'
import { BookCheck, BookIcon, CreditCard, Edit2 } from 'lucide-react'

interface SubjectListCardProps {
    subject: SubjectCredits
    removeSubject: (id: string) => void
    toggleSubjectSelection: (id: string) => void
    setIsUpdatingSubject: React.Dispatch<React.SetStateAction<string>>
}
const SubjectListCard: React.FC<SubjectListCardProps> = ({
    subject,
    removeSubject,
    toggleSubjectSelection,
    setIsUpdatingSubject,
}) => {
    return (
        <div
            className={cn(
                'w-full space-y-2.5 rounded-xl border border-cyan-400 bg-neutral-900 p-3.5',
                {
                    'border-red-600 bg-zinc-600': !subject.isSelected,
                }
            )}
        >
            <span className="flex flex-row items-center justify-between gap-1.5">
                <span className="flex flex-row items-center gap-1.5">
                    <BookCheck size={24} className="text-white" />
                    <h1 className="line-clamp-2 text-ellipsis text-wrap text-lg font-bold text-white md:text-xl">
                        {subject.subjectName}
                    </h1>
                </span>
                <Edit2
                    size={30}
                    className="rounded-full bg-neutral-600 p-1.5"
                    onClick={() => setIsUpdatingSubject(subject.id)}
                />
            </span>

            <span className="flex flex-row items-center gap-1.5">
                <CreditCard size={20} className="text-white" />
                <h3 className="text-sm font-normal text-gray-300 md:text-base">
                    Credits Scored : {subject.credits}
                </h3>
            </span>
            <span className="flex flex-row items-center gap-1.5">
                <BookIcon size={20} className="text-white" />
                <h3 className="text-sm font-normal text-gray-300 md:text-base">
                    Semester : {subject?.semester || 'N/A'}
                </h3>
            </span>
            <span className="flex w-full flex-row items-center justify-between">
                <button
                    type="button"
                    name="remove"
                    onClick={() => removeSubject(subject.id)}
                    className="rounded-md bg-red-600 px-3.5 py-1.5 text-sm font-semibold text-white"
                >
                    Remove
                </button>
                <button
                    type="button"
                    name="disable"
                    onClick={() => toggleSubjectSelection(subject.id)}
                    className={cn(
                        'rounded-md bg-yellow-600 px-3.5 py-1.5 text-sm font-semibold text-white',
                        {
                            'bg-green-600': !subject.isSelected,
                        }
                    )}
                >
                    {subject.isSelected ? 'Drop' : 'Consider'}
                </button>
            </span>
        </div>
    )
}

export default SubjectListCard
