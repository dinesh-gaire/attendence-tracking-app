import { db } from "@/configs";
import { ATTENDANCE, STUDENTS } from "@/configs/schema";
import { and, desc, eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";
// import { pgTable } from "drizzle-orm/pg-core";

export async function GET(req){
    const searchParams = req.nextUrl.searchParams;
    const date = searchParams.get('date')
    const grade = searchParams.get('grade')

    const result = await db.select({
        day:ATTENDANCE.day,
        presentCount:sql`count(${ATTENDANCE.day})`
    }).from(ATTENDANCE)
    .leftJoin(STUDENTS,and(eq(ATTENDANCE.studentId, STUDENTS.id), eq(ATTENDANCE.date, date)))
    .groupBy(ATTENDANCE.day)
    .where(eq(STUDENTS.grade, grade))
    .orderBy(desc(ATTENDANCE.day))
    .limit(7)

    return NextResponse.json(result);
}