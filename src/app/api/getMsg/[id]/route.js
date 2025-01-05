import { NextResponse } from "next/server";
import { conversation } from "@/utils/modals";

export async function GET(req , { params }) {

    const { id } = await params;
     console.log(id)
    const conv = await conversation.findOne({ userId: id });

   
    
    return NextResponse.json({data:conv})

    }