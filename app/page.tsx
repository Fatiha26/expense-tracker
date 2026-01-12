'use client'

import moment from "moment";
import useCategory from "./hooks/useCategory";
import useExpense from "./hooks/useExpense";


export default function Home() {

  const { expenses, expenseLoading } = useExpense()
  console.log(expenses)

  return (
    <div >
      {expenses?.map((item: any, index: number) => (
        <div>
          <p>{item?.amount}</p>
          <p>{moment(item?.date).format('llll')}</p>
          <p>{item?.category?.categoryName}</p>
        </div>

      ))}
    </div>
  );
}
