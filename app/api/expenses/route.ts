import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const expenses = await prisma.expense.findMany({
        include: {
            category: true
        }
    })

    return NextResponse.json(expenses ?? [])
}