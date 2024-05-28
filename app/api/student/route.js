import { db } from "@/configs";
import { GRADES, STUDENTS } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function POST(req,res){
    const data = await req.json();
    
    const result = await db.insert(STUDENTS)
    .values({
        name:data?.name,
        grade:data?.grade,
        address:data?.address,
        contact:data?.contact
    })
    return NextResponse.json(result);
}