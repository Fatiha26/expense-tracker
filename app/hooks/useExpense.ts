import { useEffect, useState } from "react"

type ExpenseItems = {
    amount?: number;
    date?: Date;
    categoryName?: string
}

export default function useExpense() {
    const [expenses, setExpenses] = useState<ExpenseItems[]>();
    const [expenseLoading, setExpenseLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('./api/expenses')
            .then(res => res.json())
            .then(data => setExpenses(data))
            .finally(() => setExpenseLoading(false))
    }, [])



    return {
        expenses,
        expenseLoading
    }

}