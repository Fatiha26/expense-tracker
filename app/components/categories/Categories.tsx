'use client'

import useCategory from '@/app/hooks/useCategory';

function Categories() {
    const { categories, loadingCategories } = useCategory();

    return (
        <div>   {categories?.map((item: any, index: number) => (
            <p>{item?.categoryName}</p>
        ))}</div>
    )
}

export default Categories