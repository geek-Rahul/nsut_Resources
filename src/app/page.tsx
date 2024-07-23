import TextGenerateEffect from '@/components/shared/TextGenerateEffect'
import HomeCourses from './_sections/HomeCourses'

export default function Home() {
    return (
        <section className="container mb-4 flex flex-col items-center justify-center gap-4 px-2 md:px-4 lg:gap-6 xl:mb-0">
            <TextGenerateEffect
                words="Your Ultimate Destination for ECAM Studies! Explore our Comprehensive
    Collection of Study Materials for All Subjects. Don't Miss Out,
    Take a Peek Inside!"
                className="text-center text-lg tracking-tight text-white selection:bg-gray-500 md:text-xl md:tracking-normal lg:text-3xl"
            />

            <HomeCourses />
        </section>
    )
}
