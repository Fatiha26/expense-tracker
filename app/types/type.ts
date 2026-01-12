interface Category {
    id: number;
    name: string
}

interface Expense {
    id: number;
    amount: number;
    date: string;
    category: Category
}