// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface IUser {
    name: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<IUser[]>) => {
    // DB 데이터 조회 등 작업

    res.status(200).json([{ name: "John Doe" }, { name: "stella" }, { name: "jane" }, { name: "yeom" }]);
};

export default handler;
