import { useState, useEffect } from 'react'

type RecentlyViewedItem = { key: string; value: string }

export const useRecentlyViewed = () => {
    const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedItem[]>(
        []
    )

    const saveToLocalStorage = (key: string, value: string): void => {
        const existingData = localStorage.getItem('recentlyViewed')
        let existing = existingData
            ? (JSON.parse(existingData) as RecentlyViewedItem[])
            : []

        const existingIndex = existing.findIndex((item) => item.key === key)
        if (existingIndex > -1) {
            existing.splice(existingIndex, 1)
        }

        existing.unshift({ key, value })

        if (existing.length > 5) {
            existing.pop()
        }

        localStorage.setItem('recentlyViewed', JSON.stringify(existing))
        setRecentlyViewed(existing)
    }

    useEffect(() => {
        let existingData = localStorage.getItem('recentlyViewed')
        if (existingData) {
            setRecentlyViewed(JSON.parse(existingData) as RecentlyViewedItem[])
        } else {
            setRecentlyViewed([])
        }
    }, [])

    return {
        recentlyViewed,
        saveToLocalStorage,
    }
}
