'use client'

import { useEffect, useState } from "react"

export interface Category {
    id: number;
    name: string;
}

export default function useCategory() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true)

    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json() as Promise<Category[]>)
            .then(data => setCategories(data))
            .finally(() => setLoadingCategories(false))
    }, [])

    return {
        categories,
        loadingCategories
    }
}
