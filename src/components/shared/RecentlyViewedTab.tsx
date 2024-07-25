import Button from './Button'

type propsType = {
    key: string
    value: string
}
const RecentlyViewedTab = ({
    list,
    saveToLocalStorage,
}: {
    list: propsType[]
    saveToLocalStorage: (key: string, value: string) => void
}) => {
    return (
        <div className="container z-10 mt-8 rounded-xl border bg-opacity-20 bg-clip-padding px-5 py-8 shadow-sm shadow-white backdrop-blur-sm backdrop-filter md:mt-10">
            <h1 className="text-center text-2xl font-semibold text-cyan-400 lg:text-3xl">
                Recently Viewed
            </h1>
            {list.length > 0 ? (
                list.map((item, index) =>(
                    <div
                        key={index}
                        className="md:2/3 mx-auto mt-2 flex items-center justify-between sm:justify-evenly md:justify-between lg:w-3/4 xl:w-5/6"
                    >
                        <h1 className="text-left text-base font-semibold text-white md:text-xl">{`${item.key}`}</h1>
                        <Button
                            href={item.value}
                            onClick={() =>
                                saveToLocalStorage(item.key, item.value)
                            }
                        />
                    </div>
                ))
            ) : (
                <h1 className="text-center text-lg font-semibold text-red-400">
                    No recent items
                </h1>
            )}
        </div>
    )
}

export default RecentlyViewedTab
