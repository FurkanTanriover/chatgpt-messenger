// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {propmt,chatId,model,session} = req.body;
    if(!prompt){
        res.status(400).json({answer:"No prompt provided"});
    }
    if(!chatId){
        res.status(400).json({answer:"No chatId provided"});
    }

    //ChatGPT Query
    const response = await MediaQueryList(prompt, chatId, model);

  res.status(200).json({ name: "John Doe" });
}
