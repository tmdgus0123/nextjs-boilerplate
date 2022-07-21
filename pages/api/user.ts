// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface IUser {
    id: number;
    name: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<IUser[]>) => {
    // DB 데이터 조회 등 작업

    res.status(200).json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "stella" },
        { id: 3, name: "jane" },
        { id: 4, name: "yeom" },
    ]);
};

export default handler;
