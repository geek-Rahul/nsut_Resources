export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="aspect-square h-32 w-32 animate-spin rounded-full bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 p-3 drop-shadow-2xl md:h-48 md:w-48">
            <div className="background-blur-md h-full w-full rounded-full bg-slate-100 dark:bg-zinc-900"></div>
        </div>
    )
}
