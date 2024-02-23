import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {

    try {

        connectToDb();

        const posts = await Post.find();

        return NextResponse.json(posts);
        
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
        
    }
}