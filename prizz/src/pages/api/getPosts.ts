// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'


interface Post {
    title: string;
    content: string;
    published: boolean;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
    try {
        if(req.method === "GET") {
            const data = await prisma.post.findMany();
            return res.status(200).json(data);
        }
        if(req.method === "POST") {
            const {title, content, published} = req.body as Post;
            await prisma.post.create({
                data: {
                  title: title,
                    content: content,
                    published: published
                },
              })
            return res.status(200).json("ok")
        }
        
        
    } catch (error) {
        return res.status(500).json(error)  
    }

}
