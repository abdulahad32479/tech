"use client";
import dynamic from "next/dynamic";

const Chat = dynamic(
  () => import("@/app/(home)/chat"),
  { ssr: false }
);

export default Chat;
