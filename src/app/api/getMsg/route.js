import { NextResponse } from "next/server";
import { conversation } from "@/utils/modals";

export async function POST(req) {

    const { id } = await req.json();
     console.log(id)
    const conv = await conversation.findOne({ userId: id });

   
    
    return NextResponse.json({data:conv})

    }