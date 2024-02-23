import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request, {params}) => {


    const { slug } = params;
    console.log(slug);

    try {

        connectToDb();

        const post = await Post.findOne({slug});

        return NextResponse.json(post);
        
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
        
    }
}


export const DELETE = async (req: Request, {params}) => {


    const { slug } = params;
    console.log(slug);

    try {

        connectToDb();

        await Post.deleteOne({slug});

        return NextResponse.json("post deleted");
        
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
        
    }
}