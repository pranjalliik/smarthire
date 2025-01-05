import { NextResponse } from "next/server";
import { user } from "@/utils/modals";

export async function POST(req ) {

    const { id } = await req.json();
     console.log(id)
    const userdata = await user.findById({ _id : id });

   
    
    return NextResponse.json({data: userdata})

    }