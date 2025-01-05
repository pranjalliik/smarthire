import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbconnect";
import { user ,conversation } from "@/utils/modals";

export async function GET(req) {
    await dbConnect()
    const users = await user.find()
    
  return NextResponse.json({ data : users });
}
