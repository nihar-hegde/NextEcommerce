import { nextauthOptions } from "@/lib/helpers/nextOptions";
import NextAuth from "next-auth";

const handler = NextAuth(nextauthOptions)

export { handler as GET, handler as POST }