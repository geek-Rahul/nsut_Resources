import React from 'react'

const FormSubmitBtn = ({ buttonText }: { buttonText: string }) => {
    return (
        <button
            type="submit"
            name="connect"
            className="group relative mx-auto inline-block w-full max-w-xs cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900 disabled:cursor-not-allowed disabled:bg-slate-600 md:max-w-sm lg:max-w-full"
        >
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-900 px-4 py-2.5 ring-1 ring-white/10">
                <span className="w-full text-center">
                    {buttonText ?? 'Add Subject'}
                </span>
                <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
    )
}

export default FormSubmitBtn
