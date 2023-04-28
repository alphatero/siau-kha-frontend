import { NextApiRequest, NextApiResponse } from "next";
import type { User, ResType } from '@/types/User';

const fakerUser: User = {
  username: "admin",
  password: "12345",
};

export const handler = (req: NextApiRequest, res: NextApiResponse<ResType>) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (username === fakerUser.username && password === fakerUser.password) {
      setTimeout(
        () => res.status(200).json({
            status: "success",
            message: "Login success",
            data: ""
        }),
        1000,
      )
    } else {
      res.status(401).json({ 
        status: "error",
        message: "Login failed",
        data: ""
       });
    }
  }
};

export default handler;
