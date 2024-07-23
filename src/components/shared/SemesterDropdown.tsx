import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

// Define an interface for the component props
interface SemesterDropdownProps {
    title: string
    subtitle: string
    options: { value: string; label: string }[] // options is an array of objects with value and label
    currentValue: string // Type for the currently selected value
    onChange: (value: string) => void // onChange function type
}

export default function SemesterDropdown({
    title,
    subtitle,
    options,
    currentValue,
    onChange,
}: SemesterDropdownProps) {
    return (
        <Select onValueChange={onChange} value={currentValue}>
            <SelectTrigger className="w-full max-w-xs" name='dropdown'>
                <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{subtitle}</SelectLabel>{' '}
                    {/* Use the title prop */}
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
