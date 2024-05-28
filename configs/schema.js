import { boolean, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const GRADES = pgTable('grades',{
    id:serial('id').primaryKey(),
    grade:varchar('grade',{length:10}).notNull()
})

export const STUDENTS = pgTable('students',{
    id:serial('id').primaryKey(),
    name:varchar('name',{length:20}).notNull(),
    grade:varchar('grade',{length:10}).notNull(),
    address:varchar('address',{length:50}).notNull(),
    contact:varchar('contact',{length:11}).notNull()
})

export const ATTENDANCE = pgTable('attendance',{
    id:serial('id').primaryKey(),
    studentId:integer('studentId', {length:11}).notNull(),
    present:boolean('present').default(false),
    day:integer('day',{length:11}).notNull(),//22
    date:varchar('date',{length:20}).notNull()//05/2024
})
