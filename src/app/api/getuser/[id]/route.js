import { NextResponse } from "next/server";
import { user } from "@/utils/modals";

export async function GET(req , { params }) {

    const { id } = await params;
     console.log(id)
    const userdata = await user.findOne({ _id: id });

   
    
    return NextResponse.json({data: userdata})

    }