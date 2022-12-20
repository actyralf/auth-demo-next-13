import {getToken} from "next-auth/jwt";
import octopodes from "../../../_data/octopodes.json";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const user = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
        return res.status(200).json(
          octopodes.map(octo => {
            return {
              id: octo.id,
              name: octo.name,
              matchesLoggedInUser: octo.email && user?.email === octo.email,
            };
          })
        );
      } catch (error) {
        console.log(error);
        return res.status(500).json({message: "server error"});
      }
    default:
      return res.status(405).json({error: "method not allowed"});
  }
}

export default handler;
