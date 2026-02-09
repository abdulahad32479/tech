import UserModel from "@features/users/user-model";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const walletAddress = body.walletAddress;

  if (!walletAddress) {
    return new Response(JSON.stringify({ error: "Wallet address required" }), { status: 400 });
  }

  const user = await UserModel.createOrGetUser(walletAddress);

  // const token = await UserUtils.createJWT(user?._id!);

  // return new Response(JSON.stringify(user), {
  //   status: 200,
  //   headers: {
  //     "Set-Cookie": `${
  //       process.env.PROJECT_NAME
  //     }-token=${token}; Expires=${getTwoHoursLaterTime()}; HttpOnly; Path=/`,
  //   },
  // });

  return new Response(JSON.stringify(user), {
    status: 200,
  });
}

function getTwoHoursLaterTime() {
  const date = new Date();
  date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
  return date.toUTCString();
}
