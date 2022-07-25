// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { randomUUID } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

export interface IUser {
    id: number;
    name: string;
} 

const handler = (req: NextApiRequest, res: NextApiResponse<IUser[]>) => {
    // DB 데이터 조회 등 작업

    const list = [];
    for (var i = 1; i < 100; i++) {
        list.push({ id: i, name: randomUUID() });
    }

    res.status(200).json(list);
};

export default handler;
